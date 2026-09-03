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
      // Har row ka apna alag trigger — jab wahi row screen pe aaye tabhi wo
      // fully visible ho jaaye. Poori list ek saath trigger karne se neeche
      // wale items scroll-speed pe depend karke "stuck" reh jaate the.
      gsap.utils.toArray(".blog-index-row").forEach((row) => {
        gsap.fromTo(
          row,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 95%", once: true },
          }
        );
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