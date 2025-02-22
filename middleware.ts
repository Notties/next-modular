import { NextRequest, NextResponse } from "next/server";
import { enabledModules } from "@/package/module/config";
import { isModuleEnabled } from "@/shared/lib/utils";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;

  for (const moduleName of Object.keys(enabledModules)) {
    if (url.startsWith(`/${moduleName}`)) {
      const modulePath = url
        .replace(`/${moduleName}`, moduleName)
        .replace(/\//g, "/");
      if (!isModuleEnabled(modulePath)) {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/inventory/:path*", "/product/:path*"],
};
