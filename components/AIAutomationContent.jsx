"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteNav from "./SiteNav";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const AI_AUTOMATION_SERVICES = [
  {
    title: "AI Workflow Automation",
    description:
      "Automate multi-step workflows that involve multiple systems, approvals, and data transformations.",
  },
  {
    title: "AI Agent Development",
    description:
      "Build intelligent agents that qualify leads, answer customer questions, and execute tasks.",
  },
  {
    title: "Business Process Automation",
    description:
      "Streamline end-to-end business processes from lead to contract to fulfillment.",
  },
  {
    title: "AI Customer Support Automation",
    description:
      "Deploy AI agents to handle support tickets, FAQs, and customer inquiries 24/7.",
  },
  {
    title: "AI Lead Automation",
    description:
      "Automate lead capture, qualification, CRM entry, and follow-up sequences.",
  },
  {
    title: "AI Document Automation",
    description:
      "Extract data from, classify, and route documents automatically.",
  },
];

const BUSINESS_PROCESSES = [
  "Lead Management",
  "Customer Onboarding",
  "Sales Follow-ups",
  "Customer Support",
  "Document Processing",
  "Reporting & Analytics",
  "CRM Automation",
  "Email & Notification Workflows",
];

const PROCESS_FLOW = [
  {
    title: "Discover",
    description:
      "We audit your current workflows and identify where AI creates real leverage.",
  },
  {
    title: "Design",
    description:
      "We design the automation pipeline tailored to your processes and tools.",
  },
  {
    title: "Build",
    description:
      "We build the solution using no-code, code, and AI integrations as needed.",
  },
  {
    title: "Integrate",
    description:
      "We connect it to your existing tools with seamless data flow.",
  },
  {
    title: "Test",
    description:
      "We test every workflow, edge case, and integration point thoroughly.",
  },
  {
    title: "Deploy",
    description: "We launch and monitor the automation in production.",
  },
  {
    title: "Monitor",
    description:
      "We continuously optimize performance and handle any issues.",
  },
];

const INTEGRATIONS = [
  "Salesforce",
  "HubSpot",
  "Pipedrive",
  "Zapier & Make",
  "Gmail & Microsoft Teams",
  "Slack",
  "Google Sheets & Airtable",
  "Custom APIs",
  "Webhooks",
  "Database Connections",
];

const USE_CASES = [
  {
    title: "Lead Management Automation",
    process:
      "Website Form → Lead Qualification → CRM Entry → Sales Notification → Follow-up Sequence",
    benefit: "50-70% reduction in lead response time",
  },
  {
    title: "Customer Onboarding",
    process:
      "Contract Signed → Welcome Email → Account Setup → Training Materials → Follow-up",
    benefit: "Consistent experience, faster time-to-value",
  },
  {
    title: "Support Ticket Automation",
    process:
      "Customer Email → AI Triage → Response or Human Escalation → Resolution Tracking",
    benefit: "24/7 support without additional headcount",
  },
  {
    title: "Invoice Processing",
    process:
      "Invoice Received → OCR & Extraction → Validation → Approval Flow → Payment",
    benefit: "Days reduced to hours, error reduction",
  },
  {
    title: "Sales Follow-up",
    process:
      "Meeting Scheduled → Automated Follow-up Emails → Task Reminders → CRM Updates",
    benefit: "100% consistency, no deals slip through",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is AI automation?",
    answer:
      "AI automation uses artificial intelligence to handle repetitive, manual tasks automatically — like data entry, customer support, lead qualification, and routine workflows. It removes human bottlenecks and runs 24/7.",
  },
  {
    question: "How is AI automation different from traditional automation?",
    answer:
      "Traditional automation (like Zapier) works best for simple, rule-based tasks. AI automation uses LLMs and machine learning to handle complex decisions, unstructured data, and workflows that require understanding context and nuance.",
  },
  {
    question: "What business processes can you automate?",
    answer:
      "Lead management, customer support, document processing, sales follow-ups, CRM workflows, reporting, data entry, approvals, scheduling, email campaigns, and more. We audit your workflows to find high-impact automation opportunities.",
  },
  {
    question: "How long does automation setup take?",
    answer:
      "Simple automations can launch in 2–4 weeks. Complex workflows with multiple integrations may take 4–8 weeks. We provide a clear timeline during discovery.",
  },
  {
    question: "Do you work with our existing tools?",
    answer:
      "Yes. We integrate with your current tech stack — Salesforce, HubSpot, Google Workspace, Slack, custom APIs, databases, and more.",
  },
  {
    question: "What's the ROI of AI automation?",
    answer:
      "ROI varies, but most businesses see 30-50% labor cost savings in automated processes, faster customer response, reduced errors, and improved team morale by eliminating manual work.",
  },
  {
    question: "Will automation replace my team?",
    answer:
      "No. Automation removes repetitive work so your team can focus on strategy, relationships, and high-value decisions. It makes your team more productive, not obsolete.",
  },
  {
    question: "What happens if the automation breaks or needs changes?",
    answer:
      "We provide ongoing monitoring and support. If processes change or you need adjustments, we're here to refine and optimize.",
  },
];

const BENEFITS = [
  {
    title: "Reduce Manual Work",
    description:
      "Eliminate repetitive, time-consuming tasks and free up your team for strategic work.",
  },
  {
    title: "Faster Response Times",
    description:
      "Automations respond to customers and prospects immediately — not when someone gets to it.",
  },
  {
    title: "Fewer Errors",
    description:
      "Machines don't miss steps, forget approvals, or typo data entries.",
  },
  {
    title: "24/7 Operations",
    description:
      "Workflows run overnight, weekends, and holidays without additional headcount.",
  },
  {
    title: "Scalability",
    description:
      "Add 10 customers or 100 — the automation scales without linear cost increase.",
  },
  {
    title: "Better Data",
    description:
      "Automated workflows ensure data consistency, completeness, and real-time accuracy.",
  },
];

export default function AIAutomationContent() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ai-auto-hero h1 span", {
        yPercent: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.1,
      });

      gsap.from(".ai-auto-hero-sub", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".ai-auto-cta", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.4,
      });

      gsap.from(".service-card-auto", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-grid-auto",
          start: "top 85%",
        },
      });

      gsap.from(".benefit-card", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".benefits-grid",
          start: "top 85%",
        },
      });

      gsap.from(".process-item", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-section",
          start: "top 85%",
        },
      });

      gsap.from(".usecase-item", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".usecases-section",
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
      <section className="ai-auto-hero">
        <h1>
          <span className="reveal-line">
            <span className="reveal-inner">AI Automation Services for</span>
          </span>
          <span className="reveal-line">
            <span className="reveal-inner accent-text">
              Smarter Business Operations
            </span>
          </span>
        </h1>

        <p className="ai-auto-hero-sub">
          Stop doing by hand what a machine can do in seconds. We build custom
          automation pipelines that eliminate repetitive tasks, reduce manual
          work, and let your team focus on high-value work.
        </p>

        <div className="ai-auto-cta">
          <a href="mailto:info@rkazn.com" className="btn btn-primary">
            Get Your Automation Strategy →
          </a>
        </div>
      </section>

      {/* ============ WHAT IS AI AUTOMATION ============ */}
      <section className="content-section">
        <h2>What Is AI Automation?</h2>
        <p>
          AI automation uses artificial intelligence to handle repetitive,
          manual, and rule-based business processes without human input. Unlike
          traditional automation tools (like Zapier), AI automation understands
          context, makes intelligent decisions, and handles unstructured data —
          emails, documents, customer messages, etc.
        </p>
        <p>
          For example: Instead of manually reading a customer email, determining
          urgency, extracting key information, and routing it to the right
          department, an AI automation agent does it in seconds, 24/7, with zero
          human overhead.
        </p>
      </section>

      {/* ============ OUR AI AUTOMATION SERVICES ============ */}
      <section className="content-section">
        <h2>Our AI Automation Services</h2>

        <div className="services-grid-auto">
          {AI_AUTOMATION_SERVICES.map((service, idx) => (
            <div key={idx} className="service-card-auto">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ WHAT CAN WE AUTOMATE ============ */}
      <section className="content-section">
        <h2>What Business Processes Can We Automate?</h2>
        <p>
          Nearly any repeatable business process can be automated. Here are
          common examples:
        </p>

        <div className="processes-list">
          {BUSINESS_PROCESSES.map((process, idx) => (
            <div key={idx} className="process-item-simple">
              <span className="process-icon">→</span>
              <span className="process-name">{process}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ HOW OUR AI AUTOMATION PROCESS WORKS ============ */}
      <section className="content-section process-section">
        <h2>How Our AI Automation Process Works</h2>
        <p>
          We follow a structured approach to ensure successful, scalable
          automation:
        </p>

        <div className="process-flow-grid">
          {PROCESS_FLOW.map((step, idx) => (
            <div key={idx} className="process-item">
              <span className="step-num">{String(idx + 1).padStart(2, "0")}</span>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ INTEGRATIONS ============ */}
      <section className="content-section">
        <h2>AI Automation Integrations</h2>
        <p>
          We seamlessly connect your automation to the tools you already use:
        </p>

        <div className="integrations-grid">
          {INTEGRATIONS.map((integration, idx) => (
            <div key={idx} className="integration-tag">
              {integration}
            </div>
          ))}
        </div>
      </section>

      {/* ============ BENEFITS ============ */}
      <section className="content-section">
        <h2>Benefits of AI Automation</h2>

        <div className="benefits-grid">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="benefit-card">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ USE CASES ============ */}
      <section className="content-section usecases-section">
        <h2>AI Automation Use Cases</h2>
        <p>
          Real-world examples of how businesses benefit from AI automation:
        </p>

        <div className="usecases-list">
          {USE_CASES.map((usecase, idx) => (
            <div key={idx} className="usecase-item">
              <h4>{usecase.title}</h4>
              <div className="usecase-process">
                <code>{usecase.process}</code>
              </div>
              <p className="usecase-benefit">
                <strong>Result:</strong> {usecase.benefit}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ WHY CHOOSE RKAZN ============ */}
      <section className="content-section">
        <h2>Why Choose RKAZN for AI Automation?</h2>

        <div className="why-choose-grid">
          <div className="why-choose-card">
            <h3>Custom-Built Solutions</h3>
            <p>
              No templates or off-the-shelf products. Every automation is
              tailored to your specific workflows and business goals.
            </p>
          </div>
          <div className="why-choose-card">
            <h3>End-to-End Ownership</h3>
            <p>
              We handle discovery, design, build, integration, testing,
              deployment, and ongoing optimization.
            </p>
          </div>
          <div className="why-choose-card">
            <h3>Real Business Impact</h3>
            <p>
              We focus on measurable outcomes: reduced costs, faster response
              times, fewer errors, and improved customer experience.
            </p>
          </div>
          <div className="why-choose-card">
            <h3>Ongoing Support</h3>
            <p>
              We monitor performance, handle changes, and continuously optimize
              as your business evolves.
            </p>
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
          Let&apos;s audit your operations and build a realistic automation
          roadmap.
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