import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://nxssaifxsplrahljuqkr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54c3NhaWZ4c3BscmFobGp1cWtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1Mzk4NjUsImV4cCI6MjAzMTExNTg2NX0.SUyLCAEzIIJ0IQOS5XMTkALK45sdIx9XNVUfAMttqGo"
);
