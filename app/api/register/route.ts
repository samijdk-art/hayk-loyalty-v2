import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = `${body.firstName} ${body.lastName}`.trim();
    const phone = body.phone?.trim();
    const branch = body.branch;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    // بررسی شماره تکراری
    const { data: existing, error: existingError } = await supabaseAdmin
      .from("customers")
      .select("id")
      .eq("phone", phone)
      .maybeSingle();

    if (existingError) {
      return NextResponse.json(
        { error: existingError.message },
        { status: 500 }
      );
    }

    if (existing) {
      return NextResponse.json(
        { error: "This phone number is already registered." },
        { status: 409 }
      );
    }

    const qrToken = randomUUID();

    const { data, error } = await supabaseAdmin
      .from("customers")
      .insert({
        name: name,
        phone: phone,
        branch: branch,
        drinks: 0,
        points: 0,
        free_drinks: 0,
        qr_token: qrToken,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase Error:", error);

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      customer: data,
    });

  } catch (error) {
    console.error("Server Error:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}