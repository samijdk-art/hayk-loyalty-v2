import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";


export async function POST(request: Request) {


  const body = await request.json();


  const { NAME, PHONE } = body;



  const { data, error } = await supabase

    .from("customers")

    .insert({

      NAME,

      PHONE,

      DRINKS: 0,

      points: 0,

    })

    .select()

    .single();



  if (error) {


    console.log(error);


    return NextResponse.json(

      {
        error: error.message
      },

      {
        status:500
      }

    );

  }



  return NextResponse.json(data);


}