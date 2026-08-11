"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteNav from "./SiteNav";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const CAPABILITIES = [
  "Full-Stack Web Development",
  "React / Next.js Engineering",
  "3D & Interactive Experiences",
  "API & Backend Architecture",
  "Performance Optimization",
  "Brand-Driven UI Design",
];

const STACK = [
  "React",
  "Next.js",
  "Three.js",
  "Node.js",
  "GSAP",
  "WebGL",
  "PostgreSQL",
  "Tailwind",
];

export default function AboutContent() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero heading — lines staggered upar se reveal hote hain
      gsap.from(".about-hero-line .reveal-inner", {
        yPercent: 115,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.08,
        delay: 0.15,
      });

      // Bio paragraphs — scroll me aate hi fade+rise
      gsap.utils.toArray(".bio-block").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      // Section labels
      gsap.utils.toArray(".section-label").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          x: -20,
          duration: 0.7,
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      // Capability rows — stagger
      gsap.from(".capability-row", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".capability-grid",
          start: "top 82%",
        },
      });

      // Stack chips
      gsap.from(".stack-chip", {
        scale: 0.85,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: ".stack-grid",
          start: "top 88%",
        },
      });

      // CTA
      gsap.from(".about-cta-inner", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-cta",
          start: "top 85%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="inner-page" ref={rootRef}>
      <SiteNav />

      {/* -------- Hero statement -------- */}
      <section className="about-hero">
        <h1 className="about-hero-heading">
          <span className="about-hero-line reveal-line">
            <span className="reveal-inner">Building digital</span>
          </span>
          <span className="about-hero-line reveal-line">
            <span className="reveal-inner">products with</span>
          </span>
          <span className="about-hero-line reveal-line">
            <span className="reveal-inner accent-text">precision &amp; craft.</span>
          </span>
        </h1>
      </section>

      {/* -------- Bio -------- */}
      <section className="about-bio">
        <p className="bio-block">
          RKAZN is a full-stack development studio founded by Rudra Kapadia,
          building fast, reliable, and visually distinct web experiences for
          brands and founders who care about the details.
        </p>
        <p className="bio-block">
          From interactive 3D interfaces to production-grade backend systems,
          every project is engineered end-to-end — no templates, no
          shortcuts, just clean code and considered design.
        </p>
        <p className="bio-block">
          Based in India, working with clients everywhere — RKAZN partners
          with teams who want their product to feel as good as it works.
        </p>
      </section>

      {/* -------- Capabilities -------- */}
      <section className="about-section">
        <div className="section-label">Capabilities</div>
        <div className="capability-grid">
          {CAPABILITIES.map((item, i) => (
            <div className="capability-row" key={item}>
              <span className="capability-index">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="capability-name">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* -------- Stack -------- */}
      <section className="about-section">
        <div className="section-label">Tech Stack</div>
        <div className="stack-grid">
          {STACK.map((tech) => (
            <span className="stack-chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* -------- Marquee -------- */}
      <div className="marquee">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              BUILD&nbsp;/&nbsp;DESIGN&nbsp;/&nbsp;SHIP&nbsp;/&nbsp;REPEAT&nbsp;/&nbsp;
              BUILD&nbsp;/&nbsp;DESIGN&nbsp;/&nbsp;SHIP&nbsp;/&nbsp;REPEAT&nbsp;/&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* -------- CTA -------- */}
      <section className="about-cta">
        <div className="about-cta-inner">
          <h2>Have a project in mind?</h2>
          <a href="mailto:info@rkazn.com" className="cta-link">
            info@rkazn.com →
          </a>
        </div>
      </section>

      {/* -------- Ghost watermark logo -------- */}
      <section className="ghost-logo-section">
        <img
          src="/logo-ghost.png"
          alt="RKAZN"
          className="ghost-logo-img"
        />
       
      </section>

      <Footer />
    </div>
  );
}