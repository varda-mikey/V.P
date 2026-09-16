// V-POINTS public Supabase client configuration.
// This file contains ONLY the browser-safe publishable key. Never put a service-role key here.
const VPOINTS_SUPABASE_URL = 'https://lwjeroszacnqibggxair.supabase.co';
const VPOINTS_SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_C_8DCymB11ev8BZZ4D7c_g_s-12P5LG';

window.VPOINTS_SUPABASE = {
  url: VPOINTS_SUPABASE_URL,
  publishableKey: VPOINTS_SUPABASE_PUBLISHABLE_KEY,
  create() {
    if (!window.supabase?.createClient) throw new Error('Supabase client library is not loaded.');
    return window.supabase.createClient(VPOINTS_SUPABASE_URL, VPOINTS_SUPABASE_PUBLISHABLE_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });
  }
};