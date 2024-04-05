import { createClient } from '@supabase/supabase-js';
console.log(process.env.SUPABASE_BASE_URL)
console.log(process.env.SUPABASE_SECRET)

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_BASE_URL;
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_SECRET;


export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);