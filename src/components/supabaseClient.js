import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_BASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_SECRET;


export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);