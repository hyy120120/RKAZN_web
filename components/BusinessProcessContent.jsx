"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteNav from "./SiteNav";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const BPA_PROCESSES = [
  {
    title: "Lead to Opportunity",
    stages:
      "Lead Capture → Qualification → CRM Entry → Sales Assignment → Follow-up → Opportunity Stage",
  },
  {
    title: "Order to Fulfillment",
    stages:
      "Order Placed → Payment Processing → Inventory Check → Fulfillment → Shipping → Delivery",
  },
  {
    title: "Customer Onboarding",
    stages:
      "Purchase → Welcome Communication → Setup → Training → Activation → Success Check",
  },
  {
    title: "Invoice to Payment",
    stages:
      "Invoice Generated → Sent to Customer → Payment Received → Reconciliation → Reporting",
  },
  {
    title: "Hire to Productive",
    stages:
      "Job Posting → Candidate Screening → Interview → Offer → Onboarding → Training",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is business process automation?",
    answer:
      "Business process automation (BPA) streamlines entire end-to-end business processes. Instead of managing individual workflows, we look at the complete process — from lead to customer to payment — and automate every stage, handoff, and decision point.",
  },
  {
    question: "How is BPA different from simple workflow automation?",
    answer:
      "Workflow automation connects tools (e.g., form to CRM). BPA automates the entire business process with multiple workflows, decisions, human touchpoints, and checks — ensuring the whole process runs smoothly from start to finish.",
  },
  {
    question: "What processes can we automate?",
    answer:
      "Nearly any repeatable business process: lead management, customer onboarding, order fulfillment, invoice processing, hiring, contract management, compliance workflows, etc.",
  },
  {
    question: "How much does BPA cost?",
    answer:
      "It depends on process complexity, number of integrations, and customization needed. Simple processes might cost $10K-30K. Complex enterprise-wide automation could be $100K+. We provide a detailed quote during discovery.",
  },
  {
    question: "How long does BPA implementation take?",
    answer:
      "3-6 months depending on complexity. We break it into phases and deliver value incrementally.",
  },
  {
    question: "What's the ROI?",
    answer:
      "Most businesses see 30-50% savings in process-related labor costs, faster cycle times, fewer errors, and improved customer experience. We calculate specific ROI during discovery.",
  },
  {
    question: "Will automation eliminate jobs?",
    answer:
      "Automation eliminates repetitive tasks, not jobs. Your team shifts to strategic work, relationship building, and customer success — higher-value activities.",
  },
];

export default function BusinessProcessContent() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bpa-hero h1 span", {
        yPercent: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.1,
      });

      gsap.from(".bpa-hero-sub", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".bpa-cta", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.4,
      });

      gsap.from(".process-card", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".processes-grid",
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
      <section className="bpa-hero">
        <h1>
          <span className="reveal-line">
            <span className="reveal-inner">Business Process</span>
          </span>
          <span className="reveal-line">
            <span className="reveal-inner accent-text">
              Automation Services
            </span>
          </span>
        </h1>

        <p className="bpa-hero-sub">
          Streamline entire business processes from start to finish. Reduce
          costs, eliminate manual work, and improve customer experience. We
          automate end-to-end processes, not just individual tasks.
        </p>

        <div className="bpa-cta">
          <a href="mailto:info@rkazn.com" className="btn btn-primary">
            Automate Your Processes →
          </a>
        </div>
      </section>

      {/* ============ WHAT IS BPA ============ */}
      <section className="content-section">
        <h2>What Is Business Process Automation?</h2>
        <p>
          Business process automation (BPA) is the intelligent automation of
          entire end-to-end business processes. Instead of automating isolated
          tasks, we look at the complete workflow — from start to finish — and
          optimize every stage:
        </p>

        <ul className="process-list">
          <li>Data entry and validation</li>
          <li>Approval workflows</li>
          <li>System integrations</li>
          <li>Decision logic</li>
          <li>Notifications and alerts</li>
          <li>Reporting and tracking</li>
          <li>Exception handling</li>
        </ul>
      </section>

      {/* ============ COMMON PROCESSES WE AUTOMATE ============ */}
      <section className="content-section">
        <h2>Common Processes We Automate</h2>

        <div className="processes-grid">
          {BPA_PROCESSES.map((process, idx) => (
            <div key={idx} className="process-card">
              <h3>{process.title}</h3>
              <p className="process-stages">{process.stages}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ BPA BENEFITS ============ */}
      <section className="content-section">
        <h2>Benefits of Business Process Automation</h2>

        <div className="bpa-benefits">
          <div className="benefit-group">
            <h4>Cost Savings</h4>
            <ul>
              <li>30-50% reduction in process labor costs</li>
              <li>Fewer manual errors = less rework</li>
              <li>Scale operations without hiring</li>
            </ul>
          </div>

          <div className="benefit-group">
            <h4>Speed & Efficiency</h4>
            <ul>
              <li>Processes complete 10-50x faster</li>
              <li>24/7 operations without human input</li>
              <li>No bottlenecks from manual handoffs</li>
            </ul>
          </div>

          <div className="benefit-group">
            <h4>Quality & Compliance</h4>
            <ul>
              <li>100% consistent execution</li>
              <li>Reduced errors and compliance risks</li>
              <li>Complete audit trails</li>
            </ul>
          </div>

          <div className="benefit-group">
            <h4>Customer Experience</h4>
            <ul>
              <li>Faster response times</li>
              <li>Improved accuracy</li>
              <li>Better data across customer journey</li>
            </ul>
          </div>

          <div className="benefit-group">
            <h4>Team Productivity</h4>
            <ul>
              <li>Eliminate repetitive busywork</li>
              <li>Focus on strategic priorities</li>
              <li>Higher employee satisfaction</li>
            </ul>
          </div>

          <div className="benefit-group">
            <h4>Visibility & Control</h4>
            <ul>
              <li>Real-time process monitoring</li>
              <li>Detailed analytics and reporting</li>
              <li>Data-driven process optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============ OUR BPA APPROACH ============ */}
      <section className="content-section">
        <h2>Our Business Process Automation Approach</h2>

        <div className="approach-steps">
          <div className="approach-step">
            <span className="step-badge">1</span>
            <h4>Process Audit & Mapping</h4>
            <p>
              We document your current process, identify bottlenecks, and spot
              automation opportunities.
            </p>
          </div>

          <div className="approach-step">
            <span className="step-badge">2</span>
            <h4>Automation Design</h4>
            <p>
              We design the automated process with decision logic, error
              handling, and optimization.
            </p>
          </div>

          <div className="approach-step">
            <span className="step-badge">3</span>
            <h4>System Integration</h4>
            <p>
              We connect all systems involved: CRM, ERP, database, email,
              approval systems, reporting tools.
            </p>
          </div>

          <div className="approach-step">
            <span className="step-badge">4</span>
            <h4>Build & Configure</h4>
            <p>
              We build the automation using workflow engines, APIs, and custom
              code as needed.
            </p>
          </div>

          <div className="approach-step">
            <span className="step-badge">5</span>
            <h4>Test & Refine</h4>
            <p>
              We test all scenarios, edge cases, and integrations before launch.
            </p>
          </div>

          <div className="approach-step">
            <span className="step-badge">6</span>
            <h4>Launch & Optimize</h4>
            <p>
              We deploy with monitoring and continuously optimize based on
              performance data.
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
        <h2>Ready to Transform Your Processes?</h2>
        <p>
          Let&apos;s audit your critical processes and identify automation
          opportunities.
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