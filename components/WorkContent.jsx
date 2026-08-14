"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteNav from "./SiteNav";
import Footer from "./Footer";
import Counter from "./Counter";
import { PROJECTS } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

const FILTERS = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "3d", label: "3D / WebGL" },
  { key: "backend", label: "Backend" },
];

export default function WorkContent() {
  const rootRef = useRef(null);
  const previewRef = useRef(null);
  const quickX = useRef(null);
  const quickY = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoverProject, setHoverProject] = useState(null);

  const filtered =
    activeFilter === "all" ? PROJECTS : PROJECTS.filter((p) => p.tag === activeFilter);

  // Cursor-follow preview setup
  useEffect(() => {
    if (!previewRef.current) return;
    quickX.current = gsap.quickTo(previewRef.current, "x", { duration: 0.55, ease: "power3" });
    quickY.current = gsap.quickTo(previewRef.current, "y", { duration: 0.55, ease: "power3" });

    const handleMove = (e) => {
      quickX.current?.(e.clientX);
      quickY.current?.(e.clientY);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

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

      gsap.from(".work-stat", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".work-stats", start: "top 88%" },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  // Filter change hone par list ka fade-in animate karo
  useEffect(() => {
    gsap.fromTo(
      ".work-row",
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" }
    );
  }, [activeFilter]);

  return (
    <div className="inner-page" ref={rootRef}>
      <SiteNav />

      {/* -------- Hero -------- */}
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
          A selection of full-stack builds, interactive 3D experiences, and
          product engineering — more added regularly.
        </p>

        <div className="work-stats">
          <div className="work-stat">
            <div className="work-stat-num">
              <Counter value={PROJECTS.length} suffix="+" />
            </div>
            <div className="work-stat-label">Projects Shipped</div>
          </div>
          <div className="work-stat">
            <div className="work-stat-num">
              <Counter value={3} suffix="+" />
            </div>
            <div className="work-stat-label">Years Building</div>
          </div>
          <div className="work-stat">
            <div className="work-stat-num">
              <Counter value={100} suffix="%" />
            </div>
            <div className="work-stat-label">Custom-Written Code</div>
          </div>
        </div>
      </section>

      {/* -------- Filters -------- */}
      <div className="work-filters">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`work-filter-btn ${activeFilter === f.key ? "is-active" : ""}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* -------- Project list (cursor-follow preview) -------- */}
      <section className="work-list">
        {filtered.map((project, i) => (
          <Link
            href={`/work/${project.slug}`}
            className="work-row"
            key={project.title}
            onMouseEnter={() => setHoverProject(project)}
            onMouseLeave={() => setHoverProject(null)}
          >
            <span className="work-row-index">{String(i + 1).padStart(2, "0")}</span>
            <span className="work-row-title">{project.title}</span>
            <span className="work-row-category">{project.category}</span>
            <span className="work-row-year">{project.year}</span>
            <span className="work-row-arrow">→</span>
          </Link>
        ))}
      </section>

      {/* -------- Floating cursor preview -------- */}
      <div
        ref={previewRef}
        className={`work-preview ${hoverProject ? "is-visible" : ""}`}
      >
        {hoverProject && (
          <div
            className="work-preview-inner"
            style={{
              background: `linear-gradient(135deg, ${hoverProject.accent}55, #0a0a0a 75%)`,
            }}
          >
            <span
              className="work-preview-glow"
              style={{ background: hoverProject.accent }}
            />
            {/* Jab tak real project image na ho, logo placeholder dikhega.
                Kisi project me "image" field daal do (PROJECTS array me), wo real image use hogi */}
            <img
              src={hoverProject.image || "/logo-white.png"}
              alt={hoverProject.title}
              className={`work-preview-media ${hoverProject.image ? "" : "is-placeholder"}`}
            />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}