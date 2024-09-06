import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ypjyoalnaklrlqxkvpvp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwanlvYWxuYWtscmxxeGt2cHZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU2NDgzNzgsImV4cCI6MjA0MTIyNDM3OH0.s-XsnI1wbXwU1nv4cd7U-_vdxErb5CBL44j8VqT0JWY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)