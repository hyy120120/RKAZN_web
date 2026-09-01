"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteNav from "./SiteNav";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const SOLUTION_TYPES = [
  {
    title: "AI Assistants",
    description:
      "Intelligent assistants that help your team work faster — research, writing, analysis, code generation.",
  },
  {
    title: "AI Agents",
    description:
      "Autonomous agents that execute complex workflows across multiple systems and tools.",
  },
  {
    title: "RAG / Knowledge Systems",
    description:
      "AI systems trained on your proprietary data to answer questions and retrieve insights.",
  },
  {
    title: "AI Workflow Systems",
    description:
      "Multi-step workflows powered by AI decision-making and automation.",
  },
  {
    title: "AI-Powered Internal Tools",
    description:
      "Custom dashboards, analytics platforms, and internal tools with AI capabilities.",
  },
  {
    title: "AI Integrations",
    description:
      "Plug AI capabilities into your existing products and platforms.",
  },
];

const DEVELOPMENT_PROCESS = [
  {
    step: "01",
    title: "Requirements & Feasibility",
    description:
      "We understand your problem, goals, constraints, and tech stack.",
  },
  {
    step: "02",
    title: "Architecture Design",
    description:
      "We design the system architecture, data flow, and AI model strategy.",
  },
  {
    step: "03",
    title: "Data Preparation",
    description:
      "We gather, structure, and prepare your data for training and fine-tuning.",
  },
  {
    step: "04",
    title: "Build & Develop",
    description:
      "We develop the AI system with clean, maintainable, production-ready code.",
  },
  {
    step: "05",
    title: "Integrate",
    description:
      "We integrate with your existing systems, databases, and APIs.",
  },
  {
    step: "06",
    title: "Test & Optimize",
    description:
      "We test thoroughly, optimize performance, and handle edge cases.",
  },
  {
    step: "07",
    title: "Deploy & Monitor",
    description:
      "We deploy to production and set up monitoring and alerting.",
  },
];

const INDUSTRIES_WE_SERVE = [
  "Technology & SaaS",
  "Real Estate",
  "E-commerce",
  "Healthcare",
  "Finance",
  "Marketing Agencies",
  "Legal Services",
  "Manufacturing",
];

const TECHNICAL_STACK = [
  "LLMs: OpenAI GPT-4, Claude, Llama",
  "Vector DBs: Pinecone, Weaviate, Supabase",
  "Frameworks: LangChain, LlamaIndex, AutoGPT",
  "Backend: Node.js, Python, Go",
  "Databases: PostgreSQL, MongoDB, Firebase",
  "Cloud: AWS, Google Cloud, Azure",
];

const FAQ_ITEMS = [
  {
    question: "What's the difference between custom AI and off-the-shelf AI tools?",
    answer:
      "Off-the-shelf tools (ChatGPT, Copilot) are generic and don't know your business. Custom AI systems are trained on your data, integrated with your systems, and tailored to your specific workflows. They're more accurate, private, and aligned with your business goals.",
  },
  {
    question: "Do you build AI from scratch or use existing models?",
    answer:
      "We use the best of both: we leverage state-of-the-art LLMs (GPT-4, Claude, Llama) as the foundation, then fine-tune, augment with your data, and integrate them into custom systems. This gives you the best of pre-trained models + your proprietary edge.",
  },
  {
    question: "How do you keep my data private?",
    answer:
      "Data privacy is paramount. We can deploy on your own infrastructure, use private cloud instances, implement encryption, and ensure no data is used for model training without permission. We comply with GDPR, CCPA, and other regulations.",
  },
  {
    question: "What if the AI makes mistakes or hallucinates?",
    answer:
      "We use techniques like Retrieval-Augmented Generation (RAG) to ground answers in your data, implement guardrails, use fact-checking, and set up continuous monitoring. We also build in human oversight and escalation for high-stakes decisions.",
  },
  {
    question: "How long does it take to build a custom AI solution?",
    answer:
      "It depends on complexity. A simple AI assistant might take 4-6 weeks. A complex multi-system solution could take 3-6 months. We provide a realistic timeline after discovery.",
  },
  {
    question: "What ongoing support do you provide?",
    answer:
      "We monitor performance, handle updates, refine models based on new data, and fix any issues. AI systems improve over time — we're committed to continuous optimization.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Yes. We build integrations with your CRM, databases, APIs, payment systems, communication tools, and any other software you use.",
  },
  {
    question: "What about scalability?",
    answer:
      "We build with scale in mind — cloud-native architecture, load balancing, caching, and optimization for high traffic.",
  },
];

const WHY_RKAZN = [
  {
    title: "Full-Stack Expertise",
    description:
      "From LLM selection to deployment, we own the entire AI system.",
  },
  {
    title: "Custom Not Template",
    description:
      "Every solution is built for your specific business and goals.",
  },
  {
    title: "Production Ready",
    description:
      "Our code is clean, tested, documented, and ready for real-world use.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We're here to optimize, iterate, and scale your AI systems as your business grows.",
  },
];

export default function CustomAISolutionsContent() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".custom-ai-hero h1 span", {
        yPercent: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.1,
      });

      gsap.from(".custom-ai-hero-sub", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".custom-ai-cta", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.4,
      });

      gsap.from(".solution-type-card", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".solution-types-grid",
          start: "top 85%",
        },
      });

      gsap.from(".dev-step-card", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".dev-process-grid",
          start: "top 85%",
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="inner-page" ref={rootRef}>
      <SiteNav />

      {/* ============ HERO ============ */}
      <section className="custom-ai-hero">
        <h1>
          <span className="reveal-line">
            <span className="reveal-inner">Custom AI Solutions</span>
          </span>
          <span className="reveal-line">
            <span className="reveal-inner accent-text">
              Built Around Your Business
            </span>
          </span>
        </h1>

        <p className="custom-ai-hero-sub">
          Tailor-made AI systems designed for your specific workflows,
          integrated with your existing tools, and deployed with
          production-grade quality. AI that works for your business.
        </p>

        <div className="custom-ai-cta">
          <a href="mailto:info@rkazn.com" className="btn btn-primary">
            Discuss Your AI Solution →
          </a>
        </div>
      </section>

      {/* ============ WHY CUSTOM AI ============ */}
      <section className="content-section">
        <h2>Why Off-the-Shelf AI Isn't Always Enough</h2>

        <div className="why-custom-grid">
          <div className="why-custom-card">
            <h4>Generic Training</h4>
            <p>
              Off-the-shelf AI (ChatGPT) is trained on general internet data.
              It doesn't understand your business, products, or workflows.
            </p>
          </div>
          <div className="why-custom-card">
            <h4>Data Privacy</h4>
            <p>
              When you use public AI services, your data is sent to third-party
              servers. Custom AI stays on your infrastructure.
            </p>
          </div>
          <div className="why-custom-card">
            <h4>Integration Gaps</h4>
            <p>
              Generic tools don't integrate with your CRM, database, or custom
              systems. Custom AI connects to everything you use.
            </p>
          </div>
          <div className="why-custom-card">
            <h4>Business Outcomes</h4>
            <p>
              Custom AI is optimized for your specific business goals — revenue,
              customer satisfaction, operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* ============ SOLUTIONS WE BUILD ============ */}
      <section className="content-section">
        <h2>Our Custom AI Solutions</h2>

        <div className="solution-types-grid">
          {SOLUTION_TYPES.map((solution, idx) => (
            <div key={idx} className="solution-type-card">
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ DEVELOPMENT PROCESS ============ */}
      <section className="content-section">
        <h2>Our Development Process</h2>

        <div className="dev-process-grid">
          {DEVELOPMENT_PROCESS.map((step) => (
            <div key={step.step} className="dev-step-card">
              <span className="step-num accent-text">{step.step}</span>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ INDUSTRIES WE SERVE ============ */}
      <section className="content-section">
        <h2>Industries We Serve</h2>
        <p>
          Custom AI solutions have applications across every industry. We've
          worked with:
        </p>

        <div className="industries-grid">
          {INDUSTRIES_WE_SERVE.map((industry, idx) => (
            <div key={idx} className="industry-tag">
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* ============ TECHNICAL STACK ============ */}
      <section className="content-section">
        <h2>Technical Stack & Expertise</h2>
        <p>
          We leverage cutting-edge AI technologies and best practices:
        </p>

        <div className="tech-stack-list">
          {TECHNICAL_STACK.map((tech, idx) => (
            <div key={idx} className="tech-item">
              <span className="tech-icon">→</span>
              <span className="tech-text">{tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ WHY CHOOSE RKAZN ============ */}
      <section className="content-section">
        <h2>Why Choose RKAZN for Custom AI?</h2>

        <div className="why-choose-grid">
          {WHY_RKAZN.map((item, idx) => (
            <div key={idx} className="why-choose-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="content-section">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, idx) => (
            <details key={idx} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="final-cta-section">
        <h2>Ready to Build Your Custom AI Solution?</h2>
        <p>
          Let&apos;s discuss your specific needs and build something amazing
          together.
        </p>
        <a href="mailto:info@rkazn.com" className="cta-link">
          info@rkazn.com →
        </a>
      </section>

      {/* Ghost logo */}
      <section className="ghost-logo-section">
        <img src="/logo-ghost.png" alt="RKAZN" className="ghost-logo-img" />
      </section>

      <Footer />
    </div>
  );
}