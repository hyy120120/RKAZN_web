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

function ScrollRevealText({ children }) {
  const words = children.split(" ");

  return (
    <p className="bio-block scroll-reveal-text">
      {words.map((word, index) => (
        <span className="scroll-word" key={`${word}-${index}`}>
          {word}
          {index !== words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}

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

     // Bio text — scroll ke saath word by word reveal + reverse
      const paragraphs = gsap.utils.toArray(".scroll-reveal-text");
      
      const allWords = paragraphs.map((paragraph) =>
        Array.from(paragraph.querySelectorAll(".scroll-word"))
      );
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-bio",
          start: "top 80%",
          end: "bottom 30%",
          scrub: true,
        },
      });
      
      allWords.forEach((words) => {
        tl.fromTo(
          words,
          {
            color: "rgba(255, 255, 255, 0.22)",
          },
          {
            color: "rgba(255, 255, 255, 1)",
            stagger: 0.08,
            ease: "none",
          }
        );
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
         <ScrollRevealText>
           RKAZN is an AI and product development studio founded by Rudra Kapadia.
           We help businesses turn repetitive work, scattered data, and ambitious
           ideas into intelligent systems that actually create leverage.
         </ScrollRevealText>
       
         <ScrollRevealText>
          From AI automation and custom agents to full-stack products and data
          platforms, we design and build solutions around the way your business
          already works — then make them faster, smarter, and easier to scale.
         </ScrollRevealText>
       
         <ScrollRevealText>
           No unnecessary AI hype. No generic templates. Just practical systems,
           clean engineering, and thoughtful product design built to solve real
           problems. Based in India, working with teams everywhere.
         </ScrollRevealText>
       </section>
       
      {/* -------- Capabilities -------- */}
      <section className="about-section">
        <h2 className="section-label">Capabilities</h2>
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
        <h2 className="section-label">Tech Stack</h2>
        <div className="stack-grid">
          {STACK.map((tech) => (
            <span className="stack-chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* -------- Founder -------- */}
      <section className="about-section">
        <h2 className="section-label">Who's Behind RKAZN</h2>
        <div className="founder-block">
          <div className="founder-avatar">RK</div>
          <div>
            <h3 className="founder-name">Rudra Kapadia</h3>
            <p className="founder-role">Founder &amp; Lead Developer, RKAZN</p>
            <p className="founder-bio">
              Rudra founded RKAZN to bring proper software engineering
              discipline to AI automation — clean code, real integrations,
              and systems businesses can actually depend on, not fragile
              no-code stacks bolted together.
            </p>
          </div>
        </div>
      </section>

      {/* -------- Who We Work With -------- */}
      <section className="about-section">
        <h2 className="section-label">Who We Work With</h2>
        <p className="detail-description">
          RKAZN works with small and mid-sized businesses, agencies, and
          founders who have a real, repeatable process they want automated
          or a specific problem generic AI tools can't solve — not
          businesses looking for a one-size-fits-all template.
        </p>
      </section>

      {/* -------- Contact / Location -------- */}
      <section className="about-section">
        <h2 className="section-label">Get In Touch</h2>
        <div className="contact-block">
          <div>
            <span className="contact-label">Email</span>
            <a href="mailto:info@rkazn.com" className="contact-value">
              info@rkazn.com
            </a>
          </div>
          <div>
            <span className="contact-label">Location</span>
            <span className="contact-value">India — working with clients worldwide</span>
          </div>
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

      <Footer variant="static" />
    </div>
  );
}