"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteNav from "./SiteNav";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

// ⚠️ Ye sample/placeholder projects hain — apne real projects se replace karna
const PROJECTS = [
  { title: "Commerce Platform Rebuild", category: "Full-Stack / E-Commerce", year: "2026", accent: "#498a9f" },
  { title: "Interactive 3D Product Configurator", category: "WebGL / Three.js", year: "2026", accent: "#6fc7dd" },
  { title: "SaaS Dashboard & Analytics", category: "Full-Stack / SaaS", year: "2025", accent: "#498a9f" },
  { title: "Real-Time Booking System", category: "Backend / API", year: "2025", accent: "#6fc7dd" },
  { title: "Brand Portfolio Site", category: "Frontend / Design", year: "2025", accent: "#498a9f" },
  { title: "Internal Tooling Suite", category: "Full-Stack / Automation", year: "2024", accent: "#6fc7dd" },
];

export default function WorkContent() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".work-hero-line .reveal-inner", {
        yPercent: 115,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.08,
        delay: 0.15,
      });

      gsap.from(".work-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.09,
        scrollTrigger: {
          trigger: ".work-grid",
          start: "top 85%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="inner-page" ref={rootRef}>
      <SiteNav />

      <section className="work-hero">
        <h1 className="work-hero-heading">
          <span className="work-hero-line reveal-line">
            <span className="reveal-inner">Selected</span>
          </span>
          <span className="work-hero-line reveal-line">
            <span className="reveal-inner accent-text">Work.</span>
          </span>
        </h1>
        <p className="work-hero-sub">
          A selection of full-stack builds, interactive experiences, and
          product engineering — more added regularly.
        </p>
      </section>

      <section className="work-grid">
        {PROJECTS.map((project) => (
          <article className="work-card" key={project.title}>
            <div
              className="work-card-thumb"
              style={{
                background: `linear-gradient(135deg, ${project.accent}33, #0a0a0a 70%)`,
              }}
            >
              <span
                className="work-card-glow"
                style={{ background: project.accent }}
              />
            </div>
            <div className="work-card-meta">
              <h3>{project.title}</h3>
              <div className="work-card-sub">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </div>
  );
}