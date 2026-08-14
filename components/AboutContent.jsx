"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteNav from "./SiteNav";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const CAPABILITIES = [
  "AI Automation & Workflows",
  "Custom AI Agents & Chatbots",
  "AI-Powered Product Development",
  "Data & Analytics Systems",
  "API & Backend Architecture",
  "AI Strategy & Consulting",
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
            <span className="reveal-inner">Building AI systems</span>
          </span>
          <span className="about-hero-line reveal-line">
            <span className="reveal-inner">that turn ideas into</span>
          </span>
          <span className="about-hero-line reveal-line">
            <span className="reveal-inner accent-text">real leverage.</span>
          </span>
        </h1>
      </section>

      {/* -------- Bio -------- */}
      <section className="about-bio">
        <p className="bio-block">
           RKAZN is an AI and product development studio founded by Rudra Kapadia.
           We help businesses turn repetitive work, scattered data, and ambitious
           ideas into intelligent systems that actually create leverage.
        </p>
        <p className="bio-block">
          From AI automation and custom agents to full-stack products and data
          platforms, we design and build solutions around the way your business
          already works — then make them faster, smarter, and easier to scale.
        </p>
        <p className="bio-block">
           No unnecessary AI hype. No generic templates. Just practical systems,
           clean engineering, and thoughtful product design built to solve real
           problems. Based in India, working with teams everywhere.
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
        {Array.from({ length: 30 }).map((_, i) => (
          <span className="marquee-item" key={i}>
            THINK&nbsp;/&nbsp;AUTOMATE&nbsp;/&nbsp;BUILD&nbsp;/&nbsp;SCALE&nbsp;/&nbsp;
          </span>
        ))}
      </div>
    </div>

      {/* -------- CTA -------- */}
      <section className="about-cta">
        <div className="about-cta-inner">
          <h2>
           Ready to build your <span className="accent-text">AI advantage?</span>
         </h2>
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