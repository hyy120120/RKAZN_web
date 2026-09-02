"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES } from "@/data/services";

gsap.registerPlugin(ScrollTrigger);

const PROBLEMS = [
  "Manual, repetitive work eating your team's time",
  "Slow response times to leads and customers",
  "Repetitive processes that don't scale",
  "Manual data entry across disconnected tools",
  "Customer support that can't keep up with volume",
  "Leads that go cold before anyone follows up",
];

const PROCESS = [
  { step: "01", title: "Discover", desc: "We map your current process and find where time is actually being lost." },
  { step: "02", title: "Design", desc: "We design the automation/AI architecture around how your team really works." },
  { step: "03", title: "Build", desc: "We build it — clean, tested, production-grade, not a fragile no-code stack." },
  { step: "04", title: "Integrate", desc: "We connect it directly into your existing tools and systems." },
  { step: "05", title: "Launch", desc: "We deploy it into production with monitoring and rollback in place." },
  { step: "06", title: "Optimize", desc: "We track performance and refine it as your business changes." },
];

const USE_CASES = [
  "Auto-qualifying every inbound lead before a human touches it",
  "AI agent resolving common support queries instantly, 24/7",
  "Automated weekly reporting pulled straight from live data",
  "Document/invoice processing without manual data entry",
];

const INDUSTRIES = [
  "Real Estate",
  "E-commerce",
  "Healthcare",
  "Agencies",
  "Small Business",
  "SaaS",
];

const WHY_RKAZN = [
  "Custom-built systems, not generic no-code templates",
  "Clean, maintainable code behind every automation",
  "Direct integration with the tools you already use",
  "Clear human hand-off points — never a black box",
];

const HOME_FAQS = [
  { q: "How is this different from generic automation tools?", a: "Generic tools handle simple, linear tasks. We build custom logic and AI judgment on top — for the parts of your process that need actual understanding, not just triggers." },
  { q: "How long does a typical project take?", a: "Most single-workflow automations take 2–4 weeks. Larger, multi-system projects take longer — we scope this exactly during discovery." },
  { q: "Do I need to replace my current software?", a: "No. We build automations and AI systems that integrate with your existing stack via API, rather than requiring a platform migration." },
  { q: "What does it cost?", a: "It depends entirely on scope. We start with a short discovery call to understand your needs before quoting anything." },
];

export default function HomeContent() {
  const rootRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".home-fade").forEach((el) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      gsap.from(".home-solution-card", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".home-solutions-grid", start: "top 85%", once: true },
      });

      gsap.from(".home-problem-row", {
        x: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: ".home-problems-list", start: "top 85%", once: true },
      });

      gsap.from(".process-step", {
        x: -24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".home-process-track", start: "top 82%", once: true },
      });

      gsap.fromTo(
        ".home-process-line-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".home-process-track",
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );

      gsap.from(".home-faq-row", {
        y: 14,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: ".home-faq-list", start: "top 88%", once: true },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="home-content" ref={rootRef}>
      {/* -------- H1 + value prop + CTA -------- */}
      <section className="home-intro">
        <h1 className="home-h1">
          AI Automation &amp; Custom AI Solutions{" "}
          <span className="accent-text">for Businesses</span>
        </h1>
        <p className="home-value-prop">
          Automate repetitive workflows, deploy intelligent AI agents, and
          build custom AI systems designed around your business.
        </p>
        <div className="home-cta-row">
          <a href="mailto:info@rkazn.com" className="home-cta-primary">
            Get Your AI Automation Strategy
          </a>
          <Link href="/services" className="home-cta-secondary">
            Explore Our Services →
          </Link>
        </div>
      </section>

      {/* -------- AI Solutions We Build -------- */}
      <section className="about-section home-fade">
        <div className="section-label">AI Solutions We Build</div>
        <div className="home-solutions-grid">
          {SERVICES.map((s) => (
            <Link
              href={`/services/${s.slug}`}
              className="home-solution-card"
              key={s.slug}
            >
              <span className="home-solution-index">{s.id}</span>
              <h3>{s.title}</h3>
              <p>{s.tagline}</p>
              <span className="home-solution-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* -------- Business Problems We Solve -------- */}
      <section className="about-section home-fade">
        <div className="section-label">Business Problems We Solve</div>
        <div className="home-problems-list">
          {PROBLEMS.map((p) => (
            <div className="home-problem-row" key={p}>
              <span className="home-problem-mark">✕</span>
              <span>{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* -------- How RKAZN Works -------- */}
      <section className="about-section home-fade">
        <div className="section-label">How RKAZN Works</div>
        <div className="process-track home-process-track">
          <div className="process-line">
            <div className="process-line-fill home-process-line-fill" />
          </div>
          <div className="process-steps">
            {PROCESS.map((p) => (
              <div className="process-step" key={p.step}>
                <span className="process-step-num">{p.step}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------- Use Cases -------- */}
      <section className="about-section home-fade">
        <div className="section-label">AI Automation Use Cases</div>
        <div className="capability-grid">
          {USE_CASES.map((u, i) => (
            <div className="capability-row" key={u}>
              <span className="capability-index">{String(i + 1).padStart(2, "0")}</span>
              <span className="capability-name">{u}</span>
            </div>
          ))}
        </div>
      </section>

      {/* -------- Industries -------- */}
      <section className="about-section home-fade">
        <div className="section-label">Industries We Serve</div>
        <div className="stack-grid">
          {INDUSTRIES.map((i) => (
            <span className="stack-chip" key={i}>{i}</span>
          ))}
        </div>
      </section>

      {/* -------- Why RKAZN -------- */}
      <section className="about-section home-fade">
        <div className="section-label">Why RKAZN</div>
        <div className="capability-grid">
          {WHY_RKAZN.map((w, i) => (
            <div className="capability-row" key={w}>
              <span className="capability-index">{String(i + 1).padStart(2, "0")}</span>
              <span className="capability-name">{w}</span>
            </div>
          ))}
        </div>
      </section>

      {/* -------- Case Studies teaser -------- */}
      <section className="about-section home-fade home-case-studies">
        <div className="section-label">Case Studies</div>
        <p className="detail-description">
          Selected automation and AI projects — full breakdowns of what was
          built, why, and the stack behind it.
        </p>
        <Link href="/work" className="cta-link">
          View Selected Work →
        </Link>
      </section>

      {/* -------- FAQs -------- */}
      <section className="about-section home-fade">
        <div className="section-label">Frequently Asked Questions</div>
        <div className="svc-faq-list home-faq-list">
          {HOME_FAQS.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                className={`svc-faq-row home-faq-row ${isOpen ? "is-open" : ""}`}
                key={faq.q}
                onClick={() => setOpenFaq(isOpen ? null : i)}
              >
                <div className="svc-faq-question">
                  <span>{faq.q}</span>
                  <span className="svc-faq-toggle">{isOpen ? "−" : "+"}</span>
                </div>
                <div className="svc-faq-answer">
                  <div className="svc-faq-answer-inner">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* -------- Final CTA -------- */}
      <section className="about-cta home-fade">
        <div className="about-cta-inner">
          <h2>
            Ready to automate the busywork? <span className="accent-text">Let&apos;s talk.</span>
          </h2>
          <a href="mailto:info@rkazn.com" className="cta-link">
            info@rkazn.com →
          </a>
        </div>
      </section>
    </div>
  );
}