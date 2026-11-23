import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/admin") && pathname !== "/admin/login" && !request.cookies.get("dawai24_admin_session")) {
    const url = new URL("/login", request.url);
    url.searchParams.set("next", "/admin");
    return NextResponse.redirect(url);
  }
  if ((pathname.startsWith("/account") || pathname.startsWith("/orders")) && !request.cookies.get("dawai24_customer_session")) {
    const url = new URL("/login", request.url);
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
