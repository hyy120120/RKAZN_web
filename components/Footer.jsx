"use client";

export default function Footer({ variant }) {
  const isStatic = variant === "static";

  return (
    <footer className={isStatic ? "site-footer site-footer-static" : "site-footer"}>
      {/* left */}
      <div className="socials">
        <a
          href="https://www.linkedin.com/company/rkazn"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <span>/</span>

        <a
          href="https://www.instagram.com/rkazn_?igsh=MWM0ajF2YXhvazlpYg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <span>/</span>

        <a
          href="https://x.com/rkazn_ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>
      </div>

      <span className="footer-copyright">
        © {new Date().getFullYear()} RKAZN. All rights reserved.
      </span>

      {/* Left */}
      {/* <span className="name">
        Rudra Kapadia
      </span> */}
    </footer>
  );
}