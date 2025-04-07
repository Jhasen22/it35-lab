import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fxkjiezwealuukhzxkob.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4a2ppZXp3ZWFsdXVraHp4a29iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMzM1NjUsImV4cCI6MjA1OTYwOTU2NX0.qcOILbf3dKnV9ovadLkAysng8VeBAm6c5NLFXRAEtdA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);