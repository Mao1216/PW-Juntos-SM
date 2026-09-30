import { useState } from "react";
import { ShieldCheck, X } from "lucide-react";
import { signInAdmin } from "@/lib/supabase";

const AdminAccess = () => {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true); setError("");
    try {
      const session = await signInAdmin(password);
      sessionStorage.setItem("juntos_admin_session", JSON.stringify(session));
      window.location.href = "/admin";
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo iniciar sesión");
    } finally { setLoading(false); }
  };

  return <>
    <button aria-label="Acceso administrador" title="Acceso administrador" onClick={() => setOpen(true)}
      className="w-10 h-10 rounded-lg border border-primary-foreground/30 text-primary-foreground flex items-center justify-center hover:bg-primary-foreground/10 transition-colors">
      <ShieldCheck className="w-5 h-5" />
    </button>
    {open && <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center px-4" onClick={() => setOpen(false)}>
      <div className="bg-card w-full max-w-md rounded-2xl p-7 shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6"><h2 className="font-display font-bold text-xl">Acceso administrador</h2><button onClick={() => setOpen(false)} aria-label="Cerrar"><X /></button></div>
        <form onSubmit={submit} className="space-y-4">
          <div><label className="block text-sm mb-1">Usuario</label><input value="Gosht2323" readOnly className="w-full rounded-lg border px-3 py-2 bg-muted" /></div>
          <div><label className="block text-sm mb-1">Contraseña</label><input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full rounded-lg border px-3 py-2 bg-background" /></div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <button disabled={loading} className="w-full rounded-lg bg-primary text-primary-foreground py-2.5 font-semibold disabled:opacity-60">{loading ? "Ingresando…" : "Ingresar"}</button>
        </form>
      </div>
    </div>}
  </>;
};

export default AdminAccess;
