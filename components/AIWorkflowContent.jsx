"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteNav from "./SiteNav";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const WORKFLOW_EXAMPLES = [
  {
    title: "Lead Management Workflow",
    flow: "New Lead → Form Submission → Lead Scoring → CRM Entry → Sales Notification → Follow-up Email",
  },
  {
    title: "Customer Onboarding",
    flow: "Purchase → Welcome Email → Account Setup → Training → Follow-up",
  },
  {
    title: "Support Ticket Processing",
    flow: "Email Received → Triage → Response → CRM Update → Follow-up",
  },
  {
    title: "Invoice Processing",
    flow: "Invoice → OCR & Extraction → Validation → Approval Flow → Payment",
  },
  {
    title: "Content Publishing",
    flow: "Draft → Review → Approval → Multi-channel Publishing",
  },
];

const WORKFLOW_TOOLS = [
  "Zapier",
  "Make",
  "n8n",
  "Custom APIs",
  "Webhooks",
  "Salesforce",
  "HubSpot",
  "Airtable",
  "Google Sheets",
  "Slack",
];

const FAQ_ITEMS = [
  {
    question: "What is workflow automation?",
    answer:
      "Workflow automation connects your tools and automates multi-step processes. Instead of manually moving data between systems, automations handle everything — data entry, notifications, updates — instantly and accurately.",
  },
  {
    question: "How is this different from Zapier or Make?",
    answer:
      "Zapier and Make are great for simple, rule-based automations. For complex workflows involving AI decisions, data transformation, and multiple integrations, we build custom solutions with deeper logic and better reliability.",
  },
  {
    question: "Can you automate workflows in our existing tools?",
    answer:
      "Yes. We integrate with your CRM, databases, APIs, email systems, Slack, and any tools you use. If it has an API, we can automate with it.",
  },
  {
    question: "What if something breaks?",
    answer:
      "We set up monitoring and alerts. We're notified immediately if something fails. We also build error-handling and retry logic into every workflow.",
  },
  {
    question: "How complex can workflows get?",
    answer:
      "Very complex. We build workflows with conditional logic, loops, error handling, data transformation, and escalation paths.",
  },
];

export default function AIWorkflowContent() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".workflow-hero h1 span", {
        yPercent: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.1,
      });

      gsap.from(".workflow-hero-sub", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".workflow-cta", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.4,
      });

      gsap.from(".workflow-card", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".workflows-grid",
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
      <section className="workflow-hero">
        <h1>
          <span className="reveal-line">
            <span className="reveal-inner">AI Workflow Automation</span>
          </span>
          <span className="reveal-line">
            <span className="reveal-inner accent-text">
              Connect & Automate Everything
            </span>
          </span>
        </h1>

        <p className="workflow-hero-sub">
          Connect your tools, automate multi-step workflows, and eliminate
          manual handoffs. From lead management to invoicing to customer
          onboarding — we automate it all.
        </p>

        <div className="workflow-cta">
          <a href="mailto:info@rkazn.com" className="btn btn-primary">
            Build Your Workflow →
          </a>
        </div>
      </section>

      {/* ============ WHAT IS WORKFLOW AUTOMATION ============ */}
      <section className="content-section">
        <h2>What Is AI Workflow Automation?</h2>
        <p>
          Workflow automation connects your business tools and automates
          repetitive, multi-step processes. Instead of your team manually
          moving data between systems, email leads to your CRM, or updating
          spreadsheets, automations handle everything instantly, 24/7.
        </p>
        <p>
          When combined with AI, workflows can handle intelligent decisions,
          data transformation, and complex logic — not just simple connections.
        </p>
      </section>

      {/* ============ WORKFLOW EXAMPLES ============ */}
      <section className="content-section">
        <h2>Workflow Examples</h2>
        <p>Real-world workflows we automate:</p>

        <div className="workflows-grid">
          {WORKFLOW_EXAMPLES.map((workflow, idx) => (
            <div key={idx} className="workflow-card">
              <h3>{workflow.title}</h3>
              <div className="workflow-flow">
                <code>{workflow.flow}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ WORKFLOW BENEFITS ============ */}
      <section className="content-section">
        <h2>Benefits of Workflow Automation</h2>

        <div className="benefits-list">
          <div className="benefit-item">
            <h4>Save Time</h4>
            <p>Automate hours of manual work every day.</p>
          </div>
          <div className="benefit-item">
            <h4>Reduce Errors</h4>
            <p>Consistent, accurate execution every single time.</p>
          </div>
          <div className="benefit-item">
            <h4>24/7 Operations</h4>
            <p>Workflows run overnight, weekends, and holidays.</p>
          </div>
          <div className="benefit-item">
            <h4>Better Data</h4>
            <p>Accurate, real-time data across all your systems.</p>
          </div>
          <div className="benefit-item">
            <h4>Happy Teams</h4>
            <p>Your team focuses on strategic work, not busywork.</p>
          </div>
          <div className="benefit-item">
            <h4>Scale Easily</h4>
            <p>Handle 10x more volume without linear cost increases.</p>
          </div>
        </div>
      </section>

      {/* ============ INTEGRATIONS ============ */}
      <section className="content-section">
        <h2>Tools We Integrate With</h2>

        <div className="integrations-grid">
          {WORKFLOW_TOOLS.map((tool, idx) => (
            <div key={idx} className="integration-tag">
              {tool}
            </div>
          ))}
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="content-section">
        <h2>How Workflow Automation Works</h2>

        <div className="how-works-steps">
          <div className="hw-step">
            <span className="hw-num">1</span>
            <h4>Audit Current Process</h4>
            <p>We map your current workflow, pain points, and manual steps.</p>
          </div>
          <div className="hw-arrow">→</div>
          <div className="hw-step">
            <span className="hw-num">2</span>
            <h4>Design Automation</h4>
            <p>We design the automated workflow with AI logic if needed.</p>
          </div>
          <div className="hw-arrow">→</div>
          <div className="hw-step">
            <span className="hw-num">3</span>
            <h4>Build Connections</h4>
            <p>We set up integrations, APIs, and data mappings.</p>
          </div>
          <div className="hw-arrow">→</div>
          <div className="hw-step">
            <span className="hw-num">4</span>
            <h4>Test & Launch</h4>
            <p>We test thoroughly and deploy to production.</p>
          </div>
          <div className="hw-arrow">→</div>
          <div className="hw-step">
            <span className="hw-num">5</span>
            <h4>Monitor & Optimize</h4>
            <p>We monitor performance and continuously refine.</p>
          </div>
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
        <h2>Ready to Automate Your Workflows?</h2>
        <p>
          Let&apos;s identify high-impact automation opportunities for your
          business.
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