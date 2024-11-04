import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  `${import.meta.env.VITE_SUPABASE_URL}`,
  `${import.meta.env.VITE_SUPABASE_KEY}`,
);

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
