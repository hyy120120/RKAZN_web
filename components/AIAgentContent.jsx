"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteNav from "./SiteNav";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const AGENT_TYPES = [
  {
    title: "Customer Support Agents",
    description:
      "AI agents that handle customer inquiries, support tickets, FAQs, and common issues 24/7 without human intervention.",
  },
  {
    title: "Sales Agents",
    description:
      "Agents that engage prospects, qualify leads, answer product questions, and book meetings automatically.",
  },
  {
    title: "Lead Qualification Agents",
    description:
      "Smart agents that evaluate inbound leads against your criteria and route qualified ones to sales.",
  },
  {
    title: "Research Agents",
    description:
      "Agents that gather information, analyze data, and compile research reports on demand.",
  },
  {
    title: "Internal Knowledge Agents",
    description:
      "Agents trained on your internal docs, policies, and knowledge base to help your team find answers fast.",
  },
  {
    title: "Operations Agents",
    description:
      "Agents that handle internal tasks like approvals, scheduling, expense management, and data entry.",
  },
  {
    title: "Data Processing Agents",
    description:
      "Agents that extract, transform, and process data from documents, emails, and databases.",
  },
];

const AGENT_CAPABILITIES = [
  "Understand customer context and intent",
  "Provide relevant, accurate answers",
  "Take actions in your business systems",
  "Escalate to humans when needed",
  "Learn and improve over time",
  "Maintain conversation history",
  "Integrate with your APIs and tools",
  "Handle multiple languages",
  "Work via chat, voice, email, or API",
];

const DEVELOPMENT_PROCESS = [
  {
    step: "01",
    title: "Discovery & Audit",
    description:
      "We understand your business, customer workflows, and where an AI agent adds the most value.",
  },
  {
    step: "02",
    title: "Agent Design",
    description:
      "We design the agent's personality, tone, capabilities, knowledge base, and escalation logic.",
  },
  {
    step: "03",
    title: "Data Preparation",
    description:
      "We gather and structure your training data — FAQs, docs, past conversations, product info.",
  },
  {
    step: "04",
    title: "Build & Train",
    description:
      "We build the agent using LLMs, RAG (Retrieval-Augmented Generation), and custom logic.",
  },
  {
    step: "05",
    title: "Integration",
    description:
      "We connect the agent to your website, CRM, knowledge base, and business systems.",
  },
  {
    step: "06",
    title: "Testing & Refinement",
    description:
      "We test edge cases, refine responses, and ensure quality before launch.",
  },
  {
    step: "07",
    title: "Deployment & Monitoring",
    description:
      "We launch the agent and continuously monitor performance and user feedback.",
  },
];

const AGENT_INTEGRATIONS = [
  "Website Chat Widget",
  "WhatsApp",
  "Email",
  "Slack",
  "Microsoft Teams",
  "Salesforce",
  "HubSpot",
  "Zendesk",
  "Custom APIs",
  "Voice Channels",
];

const USE_CASES = [
  {
    title: "Customer Support Agent",
    description:
      "Answers 70% of support questions without human involvement. Escalates complex issues to your support team.",
    impact: "24/7 support, 60% reduction in support costs",
  },
  {
    title: "Lead Qualification Agent",
    description:
      "Engages website visitors, qualifies them against your criteria, and passes warm leads to sales.",
    impact:
      "Better lead quality, faster sales response, higher conversion",
  },
  {
    title: "Product Q&A Agent",
    description:
      "Answers prospect questions about your product features, pricing, and implementation.",
    impact: "Faster sales cycle, better customer education",
  },
  {
    title: "Internal Knowledge Agent",
    description:
      "Your team asks questions about policies, processes, or docs. Agent retrieves the right answer instantly.",
    impact: "Faster onboarding, reduced support tickets",
  },
  {
    title: "Appointment Booking Agent",
    description:
      "Engages visitors, checks your calendar, and books meetings automatically.",
    impact: "More meetings booked, no scheduling friction",
  },
  {
    title: "Lead Nurture Agent",
    description:
      "Sends personalized follow-ups, shares content, and moves prospects through your sales funnel.",
    impact: "Consistent nurturing, higher close rates",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is an AI agent, and how is it different from a chatbot?",
    answer:
      "A chatbot answers questions based on predetermined responses. An AI agent is more intelligent: it understands context, makes decisions, takes actions in your business systems (like creating CRM entries, sending emails, booking meetings), and handles multi-step workflows.",
  },
  {
    question: "How does an AI agent learn?",
    answer:
      "AI agents use Large Language Models (LLMs) like GPT-4 combined with Retrieval-Augmented Generation (RAG). RAG allows the agent to pull information from your knowledge base, docs, and data sources to answer accurately. Agents improve through feedback loops and conversation data.",
  },
  {
    question: "Can an AI agent replace my support team?",
    answer:
      "No. AI agents handle routine questions and tasks, freeing your team to focus on complex issues and relationship building. Most agents handle 60-70% of inquiries; the rest escalate to humans.",
  },
  {
    question: "What data do I need to build an AI agent?",
    answer:
      "We typically need: FAQ documents, past support conversations, product documentation, policies, and knowledge base content. The more relevant data, the better the agent performs.",
  },
  {
    question: "How long does it take to build an AI agent?",
    answer:
      "Simple agents (basic Q&A) can launch in 3-4 weeks. Complex agents with multiple integrations and custom logic typically take 6-8 weeks.",
  },
  {
    question: "Can the AI agent integrate with our tools?",
    answer:
      "Yes. We build integrations with your CRM, ticketing system, knowledge base, calendar, email, Slack, and APIs. The agent can read and write data across all your systems.",
  },
  {
    question: "What about accuracy and hallucinations?",
    answer:
      "We use RAG and guardrails to ensure the agent only answers based on your data. If it doesn't know something, it says so and escalates. Continuous monitoring catches and fixes errors.",
  },
  {
    question: "How is customer data handled?",
    answer:
      "We follow security best practices: encrypted data transmission, secure storage, compliance with privacy regulations (GDPR, CCPA), and no data used for training without permission.",
  },
];

const WHY_CHOOSE = [
  {
    title: "Custom-Built Agents",
    description:
      "Every agent is tailored to your business, brand, and workflows — not generic templates.",
  },
  {
    title: "Production-Ready Quality",
    description:
      "We build agents that are reliable, scalable, and integrated into your actual business systems.",
  },
  {
    title: "Full-Stack Ownership",
    description:
      "We own the entire process: data preparation, model selection, integration, testing, and ongoing optimization.",
  },
  {
    title: "Continuous Improvement",
    description:
      "We monitor agent performance, gather feedback, and continuously refine accuracy and usefulness.",
  },
];

export default function AIAgentContent() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".agent-hero h1 span", {
        yPercent: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.1,
      });

      gsap.from(".agent-hero-sub", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.from(".agent-cta", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.4,
      });

      gsap.from(".agent-type-card", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".agent-types-grid",
          start: "top 85%",
        },
      });

      gsap.from(".capability-item", {
        y: 15,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".capabilities-grid",
          start: "top 85%",
        },
      });

      gsap.from(".dev-step", {
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

      gsap.from(".usecase-card", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".usecases-grid",
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
      <section className="agent-hero">
        <h1>
          <span className="reveal-line">
            <span className="reveal-inner">AI Agent Development</span>
          </span>
          <span className="reveal-line">
            <span className="reveal-inner accent-text">
              Services for Business Automation
            </span>
          </span>
        </h1>

        <p className="agent-hero-sub">
          Deploy intelligent AI agents that qualify leads, support customers,
          answer questions, and execute tasks — 24/7, without human
          intervention. Agents that actually take actions in your business
          systems.
        </p>

        <div className="agent-cta">
          <a href="mailto:info@rkazn.com" className="btn btn-primary">
            Discuss Your AI Agent →
          </a>
        </div>
      </section>

      {/* ============ WHAT IS AN AI AGENT ============ */}
      <section className="content-section">
        <h2>What Is an AI Agent?</h2>
        <p>
          An AI agent is an intelligent system that understands customer intent,
          retrieves relevant information, makes decisions, and takes actions —
          all autonomously. Unlike simple chatbots that follow pre-programmed
          scripts, agents use Large Language Models (LLMs) to reason, understand
          context, and respond intelligently.
        </p>
        <p>
          For example: A customer service agent doesn't just answer FAQs — it
          reads a customer's email, understands their problem, searches your
          knowledge base and CRM, and sends a personalized response. If needed,
          it escalates to a human with full context.
        </p>
      </section>

      {/* ============ AI AGENTS VS CHATBOTS ============ */}
      <section className="content-section">
        <h2>AI Agents vs Traditional Chatbots</h2>

        <div className="comparison-table">
          <div className="comparison-row header">
            <div className="comparison-cell">Feature</div>
            <div className="comparison-cell">Traditional Chatbot</div>
            <div className="comparison-cell accent-text">AI Agent</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell">Logic</div>
            <div className="comparison-cell">
              Pre-programmed rules and responses
            </div>
            <div className="comparison-cell">LLM-based reasoning</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell">Context Understanding</div>
            <div className="comparison-cell">Limited, keyword-based</div>
            <div className="comparison-cell">Deep understanding of nuance</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell">Decision Making</div>
            <div className="comparison-cell">Yes/No branches</div>
            <div className="comparison-cell">Complex reasoning</div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell">System Integration</div>
            <div className="comparison-cell">Limited, hard to code</div>
            <div className="comparison-cell">
              Deep integrations with APIs and databases
            </div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell">Task Execution</div>
            <div className="comparison-cell">Mostly answer questions</div>
            <div className="comparison-cell">
              Answer, execute actions, update systems
            </div>
          </div>

          <div className="comparison-row">
            <div className="comparison-cell">Scalability</div>
            <div className="comparison-cell">
              Requires new rules for each scenario
            </div>
            <div className="comparison-cell">Handles new scenarios automatically</div>
          </div>
        </div>
      </section>

      {/* ============ OUR AI AGENT SERVICES ============ */}
      <section className="content-section">
        <h2>Our AI Agent Development Services</h2>

        <div className="agent-types-grid">
          {AGENT_TYPES.map((agent, idx) => (
            <div key={idx} className="agent-type-card">
              <h3>{agent.title}</h3>
              <p>{agent.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ HOW AI AGENTS WORK ============ */}
      <section className="content-section">
        <h2>How AI Agents Work</h2>

        <div className="how-it-works">
          <div className="work-step">
            <span className="step-num">1</span>
            <h4>Customer Message</h4>
            <p>Customer sends a message via chat, email, or voice.</p>
          </div>

          <div className="work-arrow">→</div>

          <div className="work-step">
            <span className="step-num">2</span>
            <h4>Intent Recognition</h4>
            <p>Agent understands the customer's intent and context.</p>
          </div>

          <div className="work-arrow">→</div>

          <div className="work-step">
            <span className="step-num">3</span>
            <h4>Information Retrieval</h4>
            <p>Agent searches your knowledge base, docs, and CRM for relevant info.</p>
          </div>

          <div className="work-arrow">→</div>

          <div className="work-step">
            <span className="step-num">4</span>
            <h4>Response Generation</h4>
            <p>Agent crafts a personalized, accurate response or takes action.</p>
          </div>

          <div className="work-arrow">→</div>

          <div className="work-step">
            <span className="step-num">5</span>
            <h4>Escalation (if needed)</h4>
            <p>If the issue is complex, agent escalates to a human with context.</p>
          </div>
        </div>
      </section>

      {/* ============ AGENT CAPABILITIES ============ */}
      <section className="content-section">
        <h2>AI Agent Capabilities</h2>

        <div className="capabilities-grid">
          {AGENT_CAPABILITIES.map((capability, idx) => (
            <div key={idx} className="capability-item">
              <span className="cap-icon">✓</span>
              <span className="cap-text">{capability}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ AI AGENT INTEGRATIONS ============ */}
      <section className="content-section">
        <h2>AI Agent Integrations</h2>
        <p>
          AI agents connect to all your tools and channels to deliver seamless
          experiences:
        </p>

        <div className="integrations-grid">
          {AGENT_INTEGRATIONS.map((integration, idx) => (
            <div key={idx} className="integration-tag">
              {integration}
            </div>
          ))}
        </div>
      </section>

      {/* ============ DEVELOPMENT PROCESS ============ */}
      <section className="content-section">
        <h2>AI Agent Development Process</h2>

        <div className="dev-process-grid">
          {DEVELOPMENT_PROCESS.map((step) => (
            <div key={step.step} className="dev-step">
              <span className="dev-step-num accent-text">{step.step}</span>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SECURITY & HUMAN OVERSIGHT ============ */}
      <section className="content-section">
        <h2>Security & Human Oversight</h2>

        <div className="security-grid">
          <div className="security-card">
            <h4>Data Security</h4>
            <p>
              Encrypted transmission, secure storage, compliance with GDPR/CCPA,
              and no unauthorized data usage.
            </p>
          </div>
          <div className="security-card">
            <h4>Human Escalation</h4>
            <p>
              Agents escalate complex issues to humans with full conversation
              context for seamless handoffs.
            </p>
          </div>
          <div className="security-card">
            <h4>Error Monitoring</h4>
            <p>
              Real-time monitoring catches errors and misconceptions. We refine
              agents continuously.
            </p>
          </div>
          <div className="security-card">
            <h4>Audit Trails</h4>
            <p>
              Full logs of every interaction for compliance, quality assurance,
              and liability.
            </p>
          </div>
        </div>
      </section>

      {/* ============ USE CASES ============ */}
      <section className="content-section">
        <h2>AI Agent Use Cases</h2>

        <div className="usecases-grid">
          {USE_CASES.map((usecase, idx) => (
            <div key={idx} className="usecase-card">
              <h3>{usecase.title}</h3>
              <p className="usecase-desc">{usecase.description}</p>
              <p className="usecase-impact">
                <strong>Impact:</strong> {usecase.impact}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ WHY CHOOSE RKAZN ============ */}
      <section className="content-section">
        <h2>Why Choose RKAZN for AI Agent Development?</h2>

        <div className="why-choose-grid">
          {WHY_CHOOSE.map((item, idx) => (
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
        <h2>Ready to Build Your AI Agent?</h2>
        <p>
          Let&apos;s discuss your specific use case and build a custom agent
          that transforms your business.
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