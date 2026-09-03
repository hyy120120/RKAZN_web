"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteNav from "./SiteNav";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

export default function ServicePageContent({ page }) {
  const rootRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".svc-hero-line .reveal-inner", {
        yPercent: 115,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.08,
        delay: 0.15,
      });

      gsap.from(".svc-intro", {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
      });

      gsap.utils.toArray(".svc-section").forEach((el) => {
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray(".svc-sub").forEach((el) => {
        gsap.from(el, {
          y: 16,
          opacity: 0,
          duration: 0.55,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });

      gsap.from(".svc-faq-row", {
        y: 14,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: ".svc-faq-list", start: "top 88%", once: true },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    description: page.metaDescription,
    provider: {
      "@type": "Organization",
      name: "RKAZN",
      url: "https://rkazn.com",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="inner-page" ref={rootRef}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <SiteNav />

      {/* -------- Hero (H1) -------- */}
      <section className="svc-hero">
        <div className="svc-breadcrumb">
          <Link href="/services">Services</Link> / <span>{page.navLabel}</span>
        </div>

        <h1 className="svc-hero-heading">
          {page.h1.split(" ").map((word, i) => (
            <span className="svc-hero-line reveal-line" key={i}>
              <span className="reveal-inner">{word}&nbsp;</span>
            </span>
          ))}
        </h1>

        <p className="svc-intro">{page.intro}</p>
      </section>

      {/* -------- Sections (H2 + H3) -------- */}
      <section className="svc-sections">
        {page.sections.map((section) => (
          <div className="svc-section" key={section.h2}>
            <h2 className="svc-section-h2">{section.h2}</h2>

            {section.content && (
              <p className="svc-section-body">{section.content}</p>
            )}

            {section.subsections && (
              <div className="svc-sub-grid">
                {section.subsections.map((sub) => (
                  <div className="svc-sub" key={sub.h3}>
                    <h3 className="svc-sub-h3">{sub.h3}</h3>
                    <p className="svc-sub-body">{sub.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* -------- FAQs -------- */}
      <section className="svc-faq about-section">
        <h2 className="section-label">Frequently Asked Questions</h2>
        <div className="svc-faq-list">
          {page.faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                className={`svc-faq-row ${isOpen ? "is-open" : ""}`}
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

      {/* -------- CTA -------- */}
      <section className="about-cta services-cta">
        <div className="about-cta-inner">
          <h2>
            Ready to start automating? <span className="accent-text">Let&apos;s talk.</span>
          </h2>
          <a href="mailto:info@rkazn.com" className="cta-link">
            info@rkazn.com →
          </a>
        </div>
      </section>

      <Footer variant="static" />
    </div>
  );
}