import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const auth = request.headers.get("authorization");

  if (auth) {
    const [, encoded] = auth.split(" ");
    const decoded = atob(encoded);

    if (decoded === "admin:hayk2026") {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="HAYK Admin"',
    },
  });
}

export const config = {
  matcher: ["/admin/:path*"],
};