"use client";

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Left */}
      <span className="name">
        Rudra Kapadia
      </span>

      {/* Right */}
      <div className="socials">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <span>/</span>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}