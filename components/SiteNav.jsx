"use client";

import Link from "next/link";

export default function SiteNav() {
  return (
    <header className="site-nav">
      <Link href="/" className="site-nav-mark">
        <img src="/logo-heroleftside.png" alt="RKAZN Logo" className="dot-logo" />
        RKAZN
      </Link>

      <nav className="site-nav-links" aria-label="Primary Navigation">
        <Link href="/">Home</Link>
        {/* <Link href="/work">Work</Link> */}
        <Link href="/services">Services</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}