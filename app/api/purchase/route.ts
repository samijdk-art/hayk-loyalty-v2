import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";


export async function POST(req: Request) {

  console.log("API START");


  const { id } = await req.json();

  console.log("ID:", id);


  const { data: customer, error } = await supabase
    .from("customers")
    .select("*")
    .eq("id", id)
    .single();


  console.log("CUSTOMER:", customer);
  console.log("ERROR:", error);


  if (!customer) {

    return NextResponse.json(
      {
        error: "Customer not found"
      },
      {
        status: 404
      }
    );

  }


  const { data, error: updateError } = await supabase
    .from("customers")
    .update({

      DRINKS: Number(customer.DRINKS || 0) + 1,

      points: Number(customer.points || 0) + 1

    })
    .eq("id", id)
    .select()
    .single();



  console.log("UPDATED:", data);
  console.log("UPDATE ERROR:", updateError);



  return NextResponse.json({
    data,
    updateError
  });

}