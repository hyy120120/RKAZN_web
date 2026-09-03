"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteNav from "./SiteNav";
import Footer from "./Footer";
import { BLOG_POSTS } from "@/data/blog-posts";

gsap.registerPlugin(ScrollTrigger);

export default function BlogIndex() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blog-hero-line .reveal-inner", {
        yPercent: 115, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.08, delay: 0.15,
      });
      gsap.from(".blog-index-row", {
        y: 20, opacity: 0, duration: 0.6, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: ".blog-index-list", start: "top 85%", once: true },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="inner-page" ref={rootRef}>
      <SiteNav />

      <section className="blog-hero">
        <h1 className="blog-hero-heading">
          <span className="blog-hero-line reveal-line"><span className="reveal-inner">Notes on</span></span>
          <span className="blog-hero-line reveal-line"><span className="reveal-inner accent-text">AI &amp; Automation.</span></span>
        </h1>
        <p className="work-hero-sub">
          Practical, no-fluff writing on AI automation, agents, and business process design — from actually building this stuff.
        </p>
      </section>

      <section className="blog-index-list">
        {BLOG_POSTS.map((post, i) => (
          <Link href={`/blog/${post.slug}`} className="blog-index-row" key={post.slug}>
            <span className="work-row-index">{String(i + 1).padStart(2, "0")}</span>
            <div className="blog-index-meta">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
            <span className="blog-index-cluster">{post.cluster}</span>
            <span className="work-row-arrow">→</span>
          </Link>
        ))}
      </section>

      <Footer variant="static" />
    </div>
  );
}