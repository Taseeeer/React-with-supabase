import { createClient } from "@supabase/supabase-js";

const options = {
    schema: 'public',
    headers: { 'x-my-custom-header': 'my-app-name' },
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
} 
export const supabase = createClient(
    "https://imvukewavbvhazsidopd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltdnVrZXdhdmJ2aGF6c2lkb3BkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjEyNTk4ODIsImV4cCI6MTk3NjgzNTg4Mn0.hXU5lwkpapP2v0wiKlSkIdTZJ7wKh2ZflT0hqfGa0rU",
    options
)