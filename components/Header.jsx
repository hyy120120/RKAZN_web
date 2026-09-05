"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import RevealText from "./RevealText";

export default function Header() {
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
    <header className="site-header">
      {/* Logo */}
      <div className="mark">
        <img src="/logo-heroleftside.png" alt="RKAZN Logo" className="dot-logo" />
        <RevealText text="RKAZN" delay={0} />
      </div>

      {/* Contact */}
      <a href="tel:+919574874229" className="header-group header-link">
        <RevealText as="span" className="header-role" text="IND +91" delay={0.2} />
        <RevealText as="span" className="header-contact" text="9574874229" delay={0.25} />
      </a>

      {/* Role */}
      <a href="mailto:info@rkazn.com" className="header-group header-link">
        <RevealText as="span" className="header-role" text="E-Mail" delay={0.1} />
        <RevealText as="span" className="header-contact" text="info@rkazn.com" delay={0.15} />
      </a>

      {/* Mobile navigation toggle */}
      <button
        type="button"
        className={`site-nav-toggle${menuOpen ? " is-open" : ""}`}
        aria-expanded={menuOpen}
        aria-controls="hero-navigation"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      {/* Navigation */}
      <nav
        className="header-nav"
        aria-label="Primary Navigation"
      >
        {/* <a href="/work">
          <RevealText text="Work" delay={0.3} />
        </a> */}
        <a href="/services">
          <RevealText text="Services" delay={0.3} />
        </a>
        <a href="/about">
          <RevealText text="About" delay={0.35} />
        </a>
      </nav>

      <nav
        id="hero-navigation"
        className={`hero-mobile-nav site-nav-links${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile Primary Navigation"
      >
        <Link href="/" onClick={closeMenu}><RevealText text="Home" delay={0.25} /></Link>
        <Link href="/services" onClick={closeMenu}><RevealText text="Services" delay={0.3} /></Link>
        <Link href="/industries" onClick={closeMenu}><RevealText text="Industries" delay={0.35} /></Link>
        <Link href="/blog" onClick={closeMenu}><RevealText text="Blog" delay={0.4} /></Link>
        <Link href="/tools/roi-calculator" onClick={closeMenu}><RevealText text="Tools" delay={0.45} /></Link>
        <Link href="/about" onClick={closeMenu}><RevealText text="About" delay={0.5} /></Link>
      </nav>
    </header>
  );
}