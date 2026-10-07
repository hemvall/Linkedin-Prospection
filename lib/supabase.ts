import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://cxnjjgwiizummimxytsx.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "sb_publishable_zu9los0rkryTf7ZXoHpoSQ_S8HXyqpK";

export const supabase = createClient(supabaseUrl, supabaseKey);
