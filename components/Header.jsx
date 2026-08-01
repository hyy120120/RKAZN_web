"use client";

import RevealText from "./RevealText";

export default function Header() {
  return (
    <header className="site-header">
      {/* Logo */}
      <div className="mark">
        <span className="dot"></span>
        <RevealText text="RKAZN" delay={0} />
      </div>

      {/* Role */}
      <div className="header-group">
        <RevealText as="span" className="header-role" text="E-Mail" delay={0.1} />
        <RevealText as="span" className="header-contact" text="info@rkazn.com" delay={0.15} />
      </div>

      {/* Contact */}
      <div className="header-group">
        <RevealText as="span" className="header-role" text="IND +91" delay={0.2} />
        <RevealText as="span" className="header-contact" text="9574874229" delay={0.25} />
      </div>

      {/* Navigation */}
      <nav className="header-nav" aria-label="Primary Navigation">
        <a href="#work">
          <RevealText text="Work" delay={0.3} />
        </a>
        <a href="#about">
          <RevealText text="About" delay={0.35} />
        </a>
      </nav>
    </header>
  );
}