// Homepage/services-overview accordion — 5 services, aligned 1:1 with the
// deep-dive pages in data/service-pages.js (via "slug").

export const SERVICES = [
  {
    id: "01",
    slug: "ai-automation",
    title: "AI Automation Services",
    tagline: "Stop doing by hand what a machine can do in seconds.",
    description:
      "We map your repetitive, manual processes — data entry, reporting, approvals, follow-ups — and replace them with automated pipelines that run 24/7 without human input.",
    deliverables: [
      "Workflow audit & automation roadmap",
      "Custom automation pipelines (no-code + code)",
      "CRM / tool integrations",
      "Error monitoring & alerting",
    ],
    tags: ["Automation", "APIs", "Integrations", "Ops"],
  },
  {
    id: "02",
    slug: "custom-ai-solutions",
    title: "Custom AI Solutions",
    tagline: "AI built around your business, not the other way around.",
    description:
      "We design and build AI assistants, knowledge systems, and internal tools trained on your data — engineered specifically around how your team actually works.",
    deliverables: [
      "Custom-trained AI assistants",
      "RAG / internal knowledge systems",
      "AI-powered internal tools",
      "Clean API integrations",
    ],
    tags: ["LLMs", "RAG", "Custom Build", "Integrations"],
  },
  {
    id: "03",
    slug: "ai-agent-development",
    title: "AI Agent Development",
    tagline: "An agent that actually knows your business.",
    description:
      "We build AI agents that don't just answer questions — they take real actions inside your systems, for customer support, sales, and internal operations.",
    deliverables: [
      "Custom-trained chat/voice agents",
      "Website & WhatsApp integration",
      "Lead capture & qualification logic",
      "Human hand-off when needed",
    ],
    tags: ["AI Agents", "Chatbots", "Automation", "Voice"],
  },
  {
    id: "04",
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    tagline: "Every workflow, running the same way, every single time.",
    description:
      "We connect the steps of your business processes — lead to customer, request to resolution — into a single automated flow, using AI wherever judgment is needed.",
    deliverables: [
      "Lead management & routing",
      "Onboarding & follow-up sequences",
      "CRM & API integrations",
      "Workflow monitoring & alerts",
    ],
    tags: ["Workflows", "CRM", "APIs", "Monitoring"],
  },
  {
    id: "05",
    slug: "business-process-automation",
    title: "Business Process Automation",
    tagline: "Handle 10x the volume with the same team.",
    description:
      "We map your real, end-to-end business processes across departments and automate the parts that don't need a human — without a full process redesign.",
    deliverables: [
      "Full process mapping & audit",
      "Cross-department automation",
      "Reporting & admin automation",
      "ROI-focused rollout",
    ],
    tags: ["Process Mapping", "Automation", "Ops", "Reporting"],
  },
];