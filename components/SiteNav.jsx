"use client";

import Link from "next/link";

export default function SiteNav() {
  return (
    <header className="site-nav">
      <Link href="/" className="site-nav-mark">
        <span className="dot"></span>
        RKAZN
      </Link>

      <nav className="site-nav-links" aria-label="Primary Navigation">
        <Link href="/">Home</Link>
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}