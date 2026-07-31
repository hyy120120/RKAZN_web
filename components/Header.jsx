"use client";

export default function Header() {
  return (
    <header className="site-header">
      {/* Logo */}
      <div className="mark">
        <span className="dot"></span>
        <span>RK</span>
      </div>

      {/* Role */}
      <div className="header-group">
        <span className="header-role">
          Full Stack Developer
        </span>

        <span className="header-contact">
          rudrakapadia@gmail.com
        </span>
      </div>

      {/* Contact */}
      <div className="header-group">
        <span className="header-role">
          IND +91
        </span>

        <span className="header-contact">
          9574874229
        </span>
      </div>

      {/* Navigation */}
      <nav
        className="header-nav"
        aria-label="Primary Navigation"
      >
        <a href="#work">Work</a>

        <a href="#about">About</a>
      </nav>
    </header>
  );
}