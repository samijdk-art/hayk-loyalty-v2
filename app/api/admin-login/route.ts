import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (
    username === "admin" &&
    password === "hayk2026"
  ) {
    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set("hayk-admin", "logged", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  }

  return NextResponse.json(
    {
      error: "Invalid credentials",
    },
    {
      status: 401,
    }
  );
}