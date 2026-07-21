import { supabase } from "@/lib/supabase";
import { Customer } from "@/types/customer";

export async function getCustomers(): Promise<Customer[]> {
  const { data, error } = await supabase
    .from("customers")
    .select("*")
    .order("NAME", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data as Customer[];
}