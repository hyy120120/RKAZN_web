"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteNav from "./SiteNav";
import Footer from "./Footer";
import RichText from "./RichText";

gsap.registerPlugin(ScrollTrigger);

export default function BlogPost({ post }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blog-hero-line .reveal-inner", {
        yPercent: 115, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.06, delay: 0.15,
      });
      gsap.from(".richtext-p, .richtext-h2, .richtext-ul, .richtext-quote", {
        y: 24, opacity: 0, duration: 0.6, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ".blog-body", start: "top 85%", once: true },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: { "@type": "Person", name: "Rudra Kapadia" },
    publisher: { "@type": "Organization", name: "RKAZN" },
  };

  return (
    <div className="inner-page" ref={rootRef}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteNav />

      <section className="blog-hero">
        <div className="svc-breadcrumb">
          <Link href="/blog">Blog</Link> / <span>{post.cluster}</span>
        </div>
        <h1 className="blog-hero-heading">
          {post.title.split(" ").map((word, i) => (
            <span className="blog-hero-line reveal-line" key={i}>
              <span className="reveal-inner">{word}&nbsp;</span>
            </span>
          ))}
        </h1>
        <div className="blog-meta">
          <span>Rudra Kapadia</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </section>

      <article className="blog-body">
        <RichText blocks={post.content} />
      </article>

      <section className="about-cta">
        <div className="about-cta-inner">
          <h2>Got a process worth automating? <span className="accent-text">Let&apos;s talk.</span></h2>
          <a href="mailto:info@rkazn.com" className="cta-link">info@rkazn.com →</a>
        </div>
      </section>

      <Footer variant="static" />
    </div>
  );
}