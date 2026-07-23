import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Customer ID is required." },
        { status: 400 }
      );
    }

    // دریافت اطلاعات مشتری
    const { data: customer, error } = await supabaseAdmin
      .from("customers")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !customer) {
      return NextResponse.json(
        { error: "Customer not found." },
        { status: 404 }
      );
    }

    const currentDrinks = Number(customer.drinks ?? customer.DRINKS ?? 0);
    const currentPoints = Number(customer.points ?? 0);

    const { data, error: updateError } = await supabaseAdmin
      .from("customers")
      .update({
        drinks: currentDrinks + 1,
        DRINKS: currentDrinks + 1,
        points: currentPoints + 1,
      })
      .eq("id", id)
      .select()
      .single();

    if (updateError) {
      return NextResponse.json(
        { error: updateError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      customer: data,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}