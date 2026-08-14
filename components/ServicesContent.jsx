"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteNav from "./SiteNav";
import Footer from "./Footer";
import Counter from "./Counter";
import { SERVICES } from "@/data/services";

gsap.registerPlugin(ScrollTrigger);

const PROCESS = [
  {
    step: "01",
    title: "Discover",
    desc: "We audit your current workflow and find exactly where AI creates real leverage — not hype.",
  },
  {
    step: "02",
    title: "Design & Build",
    desc: "We design and build the solution — automation, agent, or full product — tailored to your stack.",
  },
  {
    step: "03",
    title: "Integrate",
    desc: "We plug it directly into your existing tools, website, or product with minimal disruption.",
  },
  {
    step: "04",
    title: "Optimize",
    desc: "We monitor, refine, and scale the solution as your business grows.",
  },
];

export default function ServicesContent() {
  const rootRef = useRef(null);
  const [openId, setOpenId] = useState(SERVICES[0].id);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-hero-line .reveal-inner", {
        yPercent: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.1,
      });

      gsap.from(".work-stat", {
        y: 15,
        opacity: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: ".services-stats", start: "top 88%" },
      });

      gsap.from(".service-row", {
        y: 16,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: ".services-list", start: "top 85%" },
      });

      // gsap.from(".process-step", {
      //   y: 24,
      //   opacity: 0,
      //   duration: 0.6,
      //   stagger: 0.1,
      //   ease: "power3.out",
      //   scrollTrigger: { trigger: ".process-grid", start: "top 95%" },
      // });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="inner-page" ref={rootRef}>
      <SiteNav />

      {/* -------- Hero -------- */}
      <section className="work-hero">
        <h1 className="work-hero-heading">
          <span className="services-hero-line reveal-line">
            <span className="reveal-inner">AI Solutions That</span>
          </span>
          <span className="services-hero-line reveal-line">
            <span className="reveal-inner accent-text">Actually Ship.</span>
          </span>
        </h1>
        <p className="work-hero-sub">
          We design, build, and integrate AI systems that remove manual work,
          speed up decisions, and scale with your business — end to end.
        </p>

        <div className="work-stats services-stats">
          <div className="work-stat">
            <div className="work-stat-num">
              <Counter value={SERVICES.length} />
            </div>
            <div className="work-stat-label">Core Services</div>
          </div>
          <div className="work-stat">
            <div className="work-stat-num">
              <Counter value={100} suffix="%" />
            </div>
            <div className="work-stat-label">Custom-Built, No Templates</div>
          </div>
          <div className="work-stat">
            <div className="work-stat-num">
              <Counter value={48} suffix="h" />
            </div>
            <div className="work-stat-label">Avg. Response Time</div>
          </div>
        </div>
      </section>

      {/* -------- Services accordion list -------- */}
      <section className="services-list">
        {SERVICES.map((service) => {
          const isOpen = openId === service.id;
          return (
            <div
              key={service.id}
              className={`service-row ${isOpen ? "is-open" : ""}`}
              onClick={() => setOpenId(isOpen ? null : service.id)}
            >
              <div className="service-row-head">
                <span className="service-row-index">{service.id}</span>
                <div className="service-row-titles">
                  <h3 className="service-row-title">{service.title}</h3>
                  <p className="service-row-tagline">{service.tagline}</p>
                </div>
                <span className="service-row-toggle">
                  {isOpen ? "−" : "+"}
                </span>
              </div>

              <div className="service-row-body">
               <div className="service-row-body-inner">
                 <p className="service-row-desc">
                   {service.description}
                 </p>
             
                 <ul className="service-row-deliverables">
                   {service.deliverables.map((d) => (
                     <li key={d}>{d}</li>
                   ))}
                 </ul>
             
                 <div className="service-row-tags">
                   {service.tags.map((t) => (
                     <span key={t} className="service-tag">
                       {t}
                     </span>
                   ))}
                 </div>
               </div>
             </div>
            </div>
          );
        })}
      </section>

      {/* -------- Process -------- */}
      <section className="about-section">
        <p className="section-label">How We Work</p>
        <div className="process-grid">
          {PROCESS.map((p) => (
            <div className="process-step" key={p.step}>
              <span className="process-step-num accent-text">{p.step}</span>
              <h4 className="process-step-title">{p.title}</h4>
              <p className="process-step-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* -------- CTA -------- */}
      <section className="about-cta services-cta">
        <div className="about-cta-inner">
          <h2>
            Let&apos;s build your <span className="accent-text">AI advantage.</span>
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