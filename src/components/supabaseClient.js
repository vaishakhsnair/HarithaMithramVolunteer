import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://uauainidbpansqtbflwz.supabase.com';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhdWFpbmlkYnBhbnNxdGJmbHd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMDc0MDYsImV4cCI6MjAyNzg4MzQwNn0.zKvZkMNYYV45TLFeD4QcjiQlXjWHXvv2jOVESBIWk5E';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);