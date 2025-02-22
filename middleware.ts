import { NextRequest, NextResponse } from "next/server";
import { enabledModules } from "./package/module/config";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;

  if (!enabledModules.inventory && url.startsWith("/inventory")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!enabledModules.product && url.startsWith("/product")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/inventory/:path*", "/product/:path*"],
};
