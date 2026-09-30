const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export async function signInAdmin(password: string) {
  if (!supabaseUrl || !supabaseAnonKey) throw new Error("Supabase no está configurado");
  const response = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: { apikey: supabaseAnonKey, "Content-Type": "application/json" },
    body: JSON.stringify({ email: "gosht2323@juntossm.local", password }),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error_description || data.msg || "Credenciales incorrectas");
  return data;
}

export async function getPublicContent<T>(key: string, fallback: T): Promise<T> {
  if (!supabaseUrl || !supabaseAnonKey) return fallback;
  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/site_content?key=eq.${encodeURIComponent(key)}&select=value`, { headers: { apikey: supabaseAnonKey } });
    if (!response.ok) return fallback;
    const rows = await response.json();
    return rows[0]?.value ?? fallback;
  } catch { return fallback; }
}
