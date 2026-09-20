import { NextResponse } from "next/server";

// Enforces a single canonical domain: rkazn.com (no "www").
// Every page, sitemap entry, and meta tag in this project already assumes
// "https://rkazn.com" as the canonical host — but nothing was actually
// redirecting requests that hit "www.rkazn.com" to it. That let Google
// index both hostnames as separate URLs for the same content, splitting
// ranking signal across them.
export function middleware(request) {
  const host = request.headers.get("host") || "";

  if (host.startsWith("www.")) {
    const url = new URL(request.url);
    url.host = host.replace(/^www\./, "");
    return NextResponse.redirect(url, 308); // 308 = permanent, method-preserving
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run on everything except Next.js internals and static files.
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
