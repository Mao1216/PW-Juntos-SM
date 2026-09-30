import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const api = () => ({
  url: import.meta.env.VITE_SUPABASE_URL as string,
  key: import.meta.env.VITE_SUPABASE_ANON_KEY as string,
  token: JSON.parse(sessionStorage.getItem("juntos_admin_session") || "null")?.access_token,
});

const AdminPage = () => {
  const [keyName, setKeyName] = useState("noticias");
  const [json, setJson] = useState("[]");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const load = async () => {
      const { url, key, token } = api();
      if (!token) { window.location.href = "/"; return; }
      const response = await fetch(`${url}/rest/v1/site_content?key=eq.${encodeURIComponent(keyName)}&select=value`, { headers: { apikey: key, Authorization: `Bearer ${token}` } });
      const rows = await response.json();
      if (rows[0]) setJson(JSON.stringify(rows[0].value, null, 2));
    };
    load();
  }, [keyName]);

  const save = async () => {
    try {
      const value = JSON.parse(json);
      const { url, key, token } = api();
      const response = await fetch(`${url}/rest/v1/site_content`, { method: "POST", headers: { apikey: key, Authorization: `Bearer ${token}`, "Content-Type": "application/json", Prefer: "resolution=merge-duplicates" }, body: JSON.stringify({ key: keyName, value, updated_at: new Date().toISOString() }) });
      if (!response.ok) throw new Error(await response.text());
      setMessage("Contenido guardado correctamente.");
    } catch (error) { setMessage(error instanceof Error ? error.message : "JSON inválido"); }
  };

  return <div className="min-h-screen"><Navbar /><main className="pt-32 pb-24 container max-w-5xl mx-auto px-6"><div className="flex items-center justify-between mb-8"><div><p className="section-label mb-3">Administración</p><h1 className="font-display font-black text-4xl">Editar contenido</h1></div><button onClick={() => { sessionStorage.removeItem("juntos_admin_session"); window.location.href = "/"; }} className="rounded-lg border px-4 py-2">Cerrar sesión</button></div><div className="bg-card border rounded-2xl p-6 space-y-5"><label className="block font-semibold">Sección<select value={keyName} onChange={e => setKeyName(e.target.value)} className="mt-2 w-full rounded-lg border bg-background px-3 py-2"><option value="noticias">Noticias</option><option value="logros">Logros</option><option value="equipo">Integrantes</option><option value="informacion">Información general</option></select></label><label className="block font-semibold">Contenido (JSON)<textarea value={json} onChange={e => setJson(e.target.value)} rows={20} className="mt-2 w-full rounded-lg border bg-background p-3 font-mono text-sm" /></label><button onClick={save} className="rounded-lg bg-primary text-primary-foreground px-5 py-2.5 font-semibold">Guardar cambios</button>{message && <p className="text-sm text-secondary">{message}</p>}</div></main><Footer /></div>;
};

export default AdminPage;
