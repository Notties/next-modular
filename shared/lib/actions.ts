"use server";

import { cookies } from "next/headers";

export async function getCookie(cookieName: string) {
  const cookie = (await cookies()).get(cookieName);

  return cookie ? cookie.value : null;
}

export async function clearAllCookies() {
  const cookieStore = cookies();

  for (const cookie of (await cookieStore).getAll()) {
    (await cookieStore).set({
      name: cookie.name,
      value: "",
      path: "/",
      expires: new Date(0), // Expire the cookie
    });
  }
}
