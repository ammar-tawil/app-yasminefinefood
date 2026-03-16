import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create client conditionally or with dummy values to prevent fatal crash
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase environment variables are missing. Database features will be disabled.");
}
