"use client";

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* left */}
      <div className="socials">
        
        <a
          href="https://www.linkedin.com/in/rudra-kapadia-02bb642b9"
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
        
      <span className="footer-copyright">
  © {new Date().getFullYear()} RKAZN. All rights reserved.
</span>

      {/* Left */}
      <span className="name">
        Rudra Kapadia
      </span>

    </footer>
  );
}