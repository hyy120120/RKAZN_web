"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="site-nav">
      <Link href="/" className="site-nav-mark">
        <img src="/logo-heroleftside.png" alt="RKAZN Logo" className="dot-logo" />
        RKAZN
      </Link>

      <button
        type="button"
        className={`site-nav-toggle${menuOpen ? " is-open" : ""}`}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <nav
        id="site-navigation"
        className={`site-nav-links${menuOpen ? " is-open" : ""}`}
        aria-label="Primary Navigation"
      >
        <Link href="/" onClick={closeMenu}>Home</Link>
        {/* <Link href="/work">Work</Link> */}
        <Link href="/services" onClick={closeMenu}>Services</Link>
        <Link href="/industries" onClick={closeMenu}>Industries</Link>
        <Link href="/blog" onClick={closeMenu}>Blog</Link>
        <Link href="/tools/roi-calculator" onClick={closeMenu}>Tools</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
      </nav>
    </header>
  );
}