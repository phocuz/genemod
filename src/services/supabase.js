
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://oovhstybispzdshtokol.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vdmhzdHliaXNwemRzaHRva29sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzMDY0ODMsImV4cCI6MjA0ODg4MjQ4M30.02HQavUyPyZRxVGYuRHBqVe4ilU-0FgpYXpKxgyAg08"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;