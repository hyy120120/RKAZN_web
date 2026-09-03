"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteNav from "./SiteNav";
import Footer from "./Footer";
import Scene from "./Scene";

gsap.registerPlugin(ScrollTrigger);

// Terminal jaisa typewriter — lines ek-ek karke, character-by-character type hoti hain
function useTypewriter(lines, speed = 14, lineDelay = 200) {
  const [displayed, setDisplayed] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let lineIndex = 0;
    let charIndex = 0;
    const current = [];

    function tick() {
      if (cancelled) return;

      if (lineIndex >= lines.length) {
        setDone(true);
        return;
      }

      const target = lines[lineIndex];
      charIndex++;
      current[lineIndex] = target.slice(0, charIndex);
      setDisplayed([...current]);

      if (charIndex >= target.length) {
        lineIndex++;
        charIndex = 0;
        setTimeout(tick, lineDelay);
      } else {
        setTimeout(tick, speed);
      }
    }

    tick();
    return () => {
      cancelled = true;
    };
  }, [lines, speed, lineDelay]);

  return { displayed, done };
}

export default function ProjectTerminal({ project }) {
  const rootRef = useRef(null);

  const terminalLines = useMemo(
    () => [
      `$ cat ${project.slug}/manifest.json`,
      `> PROJECT   : ${project.title}`,
      `> CATEGORY  : ${project.category}`,
      `> ROLE      : ${project.role}`,
      `> DURATION  : ${project.duration}`,
      `> YEAR      : ${project.year}`,
      `$ _`,
    ],
    [project]
  );

  const { displayed, done } = useTypewriter(terminalLines, 12, 180);

  useEffect(() => {
    if (!done) return;

    const ctx = gsap.context(() => {
      gsap.from(".detail-section", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".detail-sections",
          start: "top 90%",
        },
      });

      gsap.from(".detail-stack-chip", {
        scale: 0.85,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "back.out(1.6)",
        scrollTrigger: { trigger: ".detail-stack-grid", start: "top 88%" },
      });

      gsap.from(".detail-highlight", {
        x: -24,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".detail-highlights", start: "top 85%" },
      });
    }, rootRef);

    return () => ctx.revert();
  }, [done]);

  return (
    <div className="inner-page" ref={rootRef}>
      <SiteNav />

      {/* Peeche rotating logo — wahi hero wala animation, background me */}
      <div className="terminal-bg-scene">
        <Scene />
      </div>
      <div className="terminal-bg-overlay" />

      <section className="terminal-hero">
        <div className="terminal-window">
          <div className="terminal-titlebar">
            <span className="terminal-dot terminal-dot-red" />
            <span className="terminal-dot terminal-dot-yellow" />
            <span className="terminal-dot terminal-dot-green" />
            <span className="terminal-titlebar-label">
              rkazn@build: ~/projects/{project.slug}
            </span>
          </div>

          <div className="terminal-body">
            {displayed.map((line, i) => (
              <div key={i} className="terminal-line">
                {line}
                {i === displayed.length - 1 && !done && (
                  <span className="terminal-cursor" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-sections">
        <div className="detail-section">
          <h2 className="section-label">Overview</h2>
          <p className="detail-description">{project.description}</p>
        </div>

        {project.challenge && (
          <div className="detail-section">
            <h2 className="section-label">The Challenge</h2>
            <p className="detail-description">{project.challenge}</p>
          </div>
        )}

        {project.approach && (
          <div className="detail-section">
            <h2 className="section-label">Our Approach</h2>
            <p className="detail-description">{project.approach}</p>
          </div>
        )}

        <div className="detail-section">
          <h2 className="section-label">Tech Stack</h2>
          <div className="detail-stack-grid">
            {project.stack.map((tech) => (
              <span className="detail-stack-chip" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="detail-section">
          <h2 className="section-label">The Result</h2>
          <div className="detail-highlights">
            {project.highlights.map((h) => (
              <div className="detail-highlight" key={h}>
                <span className="detail-highlight-check">✓</span>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="detail-section detail-cta">
          <Link href="/work" className="cta-link">
            ← Back to all work
          </Link>
        </div>
      </section>

      <Footer variant="static" />
    </div>
  );
}