// SEO-optimized deep-dive content for each core service.
// Har page: h1, meta, intro, sections (H2 + optional H3 sub-items), FAQs.
// ⚠️ Ye strong first-draft content hai — real case studies, real numbers, aur
// apni team/experience ke details se personalize/expand karna (jaisa roadmap me bola gaya EEAT ke liye).

export const SERVICE_PAGES = [
  {
    slug: "ai-automation",
    navLabel: "AI Automation",
    metaTitle: "AI Automation Services for Smarter Business Operations",
    metaDescription:
      "Custom AI automation services — workflow automation, AI agents, and business process automation that removes manual work and scales with your business.",
    h1: "AI Automation Services for Smarter Business Operations",
    intro:
      "Manual, repetitive work slows every growing business down. RKAZN designs and builds AI automation systems that take the repetitive parts of your operations — data entry, follow-ups, reporting, approvals — off your team's plate, so people spend time on work that actually needs a human.",
    sections: [
      {
        h2: "What Is AI Automation?",
        content:
          "AI automation combines traditional workflow automation (rule-based, deterministic steps) with AI models that can understand language, make judgment calls, and handle unstructured input — emails, documents, conversations. Instead of a rigid if-this-then-that script, an AI-automated workflow can read a customer email, understand intent, pull the right data, and take the correct action, escalating to a human only when it genuinely needs to.",
      },
      {
        h2: "Our AI Automation Services",
        subsections: [
          { h3: "AI Workflow Automation", content: "End-to-end automation of multi-step business processes — lead routing, approvals, onboarding — connected across the tools you already use." },
          { h3: "AI Agent Development", content: "Custom AI agents that take real actions inside your systems: qualifying leads, answering support queries, updating records." },
          { h3: "Business Process Automation", content: "Automating entire departmental workflows — sales, support, operations — with monitoring and error-handling built in." },
          { h3: "AI Customer Support Automation", content: "First-line support automation that resolves common queries instantly and hands off complex cases with full context." },
          { h3: "AI Lead Automation", content: "Automatic lead capture, qualification, scoring, and routing to the right person at the right time." },
          { h3: "AI Document Automation", content: "Extracting, structuring, and processing data from invoices, forms, and contracts without manual entry." },
        ],
      },
      {
        h2: "What Business Processes Can We Automate?",
        content:
          "Common candidates: lead qualification and routing, customer onboarding, support ticket triage, invoice and document processing, reporting and dashboards, CRM data entry, follow-up sequences, and internal approvals. If a process is repetitive, rule-based, or involves reading/writing the same kind of information over and over, it's very likely automatable.",
      },
      {
        h2: "How Our AI Automation Process Works",
        subsections: [
          { h3: "Discover", content: "We map your current workflow end-to-end and identify where time is actually being lost." },
          { h3: "Design", content: "We design the automation architecture — what triggers it, what decisions it makes, where a human stays in the loop." },
          { h3: "Build", content: "We build the automation using the right mix of code and integrations for your stack." },
          { h3: "Integrate", content: "We connect it directly to your existing tools — CRM, email, calendar, internal systems." },
          { h3: "Test", content: "We run it against real scenarios, including edge cases, before it touches live data." },
          { h3: "Deploy", content: "We ship it into production with rollback and monitoring in place." },
          { h3: "Monitor", content: "We track performance and refine the automation as your business changes." },
        ],
      },
      {
        h2: "AI Automation Integrations",
        content:
          "We build automations that connect directly to the tools you already run your business on — CRMs, email platforms, calendars, spreadsheets, support desks, and custom internal tools via API. No forcing you onto a new platform.",
      },
      {
        h2: "Benefits of AI Automation",
        content:
          "Less manual, repetitive work for your team. Faster response times for customers and leads. Fewer errors from manual data entry. Clear visibility into what's happening across your operations. And processes that keep working at 2am, on weekends, and during your busiest periods — without needing more headcount.",
      },
      {
        h2: "AI Automation Use Cases",
        content:
          "A real-estate team auto-qualifying inbound leads before a human ever touches them. An e-commerce brand auto-processing returns and refund requests. An agency auto-generating and routing weekly client reports. A services business auto-scheduling and confirming appointments without back-and-forth emails.",
      },
      {
        h2: "Why Choose RKAZN?",
        content:
          "We don't sell generic no-code templates. Every automation is built around how your business actually works, with clean, maintainable code behind it — not a fragile stack of disconnected tools. You get a system you can trust with the parts of your business that matter.",
      },
    ],
    faqs: [
      { q: "How long does an AI automation project take?", a: "Most single-workflow automations take 2–4 weeks from discovery to deployment, depending on complexity and how many systems need to be connected." },
      { q: "Do I need to change my existing tools?", a: "Usually not. We build automations that integrate with your current stack via API rather than requiring a platform migration." },
      { q: "What if the automation makes a mistake?", a: "Every automation we build includes monitoring, error-handling, and clear human hand-off points for anything outside its confidence threshold." },
      { q: "Is this different from Zapier or Make?", a: "Tools like Zapier and Make are great for simple, linear tasks. We build on top of them where it makes sense, and write custom logic where AI judgment or complex branching is required — something no-code tools alone can't handle." },
    ],
  },

  {
    slug: "custom-ai-solutions",
    navLabel: "Custom AI Solutions",
    metaTitle: "Custom AI Solutions Built Around Your Business",
    metaDescription:
      "Custom AI solutions — AI assistants, knowledge systems, internal tools, and integrations — designed and built specifically around how your business works.",
    h1: "Custom AI Solutions Built Around Your Business",
    intro:
      "Off-the-shelf AI tools solve generic problems. Your business isn't generic. RKAZN designs and builds custom AI solutions — assistants, knowledge systems, internal tools — engineered specifically around your data, your workflow, and your goals.",
    sections: [
      {
        h2: "What Are Custom AI Solutions?",
        content:
          "A custom AI solution is built specifically for your business — trained or configured on your data, integrated with your systems, and designed around how your team actually works. Unlike a generic SaaS AI tool, it doesn't force you to adapt your process to the software.",
      },
      {
        h2: "Why Off-the-Shelf AI Isn't Always Enough",
        content:
          "Generic AI tools are built for the average use case, not yours. They often can't access your internal data, don't understand your specific terminology or processes, and hit walls the moment your requirements get even slightly non-standard. Custom solutions remove those limits.",
      },
      {
        h2: "Our Custom AI Solutions",
        subsections: [
          { h3: "AI Assistants", content: "Purpose-built assistants for a specific role — sales, support, research, operations — trained on your context." },
          { h3: "AI Agents", content: "Agents that don't just answer questions but take real actions across your connected tools." },
          { h3: "RAG / Knowledge Systems", content: "Retrieval-augmented systems that let an AI answer accurately from your internal documents and data — not just its training data." },
          { h3: "AI Workflow Systems", content: "End-to-end systems where AI decision-making is embedded directly into a business process." },
          { h3: "AI-Powered Internal Tools", content: "Custom internal dashboards and tools with AI features built in from day one." },
          { h3: "AI Integrations", content: "Connecting AI capabilities into your existing product or platform via clean API integrations." },
        ],
      },
      {
        h2: "Our Development Process",
        content:
          "We start with a scoping conversation to understand the real problem — not just the requested feature. From there: architecture design, iterative build with regular check-ins, testing against real data, and a clean handover with documentation.",
      },
      {
        h2: "Industries We Serve",
        content:
          "We've worked across e-commerce, real estate, agencies, professional services, and early-stage SaaS products — anywhere a business has a specific process that generic tools don't handle well.",
      },
      {
        h2: "Frequently Asked Questions",
        content: "",
      },
    ],
    faqs: [
      { q: "How is this different from just using ChatGPT?", a: "General AI chat tools don't have access to your private data, your systems, or your specific workflow logic. A custom solution is engineered to plug directly into how your business actually runs." },
      { q: "Do you build on top of existing AI models?", a: "Yes — we typically build on top of leading LLM providers (OpenAI, Anthropic, etc.) rather than training models from scratch, which keeps costs reasonable and quality high." },
      { q: "Can this integrate with our existing software?", a: "Yes, custom AI solutions are built specifically to integrate with your current stack via API, database access, or webhooks." },
      { q: "What does a typical project cost?", a: "It depends entirely on scope. We start with a short discovery call to understand your needs before quoting anything." },
    ],
  },

  {
    slug: "ai-agent-development",
    navLabel: "AI Agent Development",
    metaTitle: "AI Agent Development Services for Business Automation",
    metaDescription:
      "Custom AI agent development — agents that take real actions inside your business systems, not just answer questions. Built for support, sales, and operations.",
    h1: "AI Agent Development Services for Business Automation",
    intro:
      "Most chatbots can only answer questions. RKAZN builds AI agents that take real action — qualifying a lead, updating a record, scheduling a follow-up — directly inside the tools your business already runs on.",
    sections: [
      {
        h2: "What Is an AI Agent?",
        content:
          "An AI agent is a system that can understand a goal, decide on a sequence of steps, and execute those steps using tools — APIs, databases, internal systems — with a level of autonomy. It's the difference between a system that tells you what to do next, and one that actually does it.",
      },
      {
        h2: "AI Agents vs Traditional Chatbots",
        content:
          "A traditional chatbot follows scripted decision trees and can only respond with text. An AI agent understands intent, reasons about the right next step, and can take real actions — booking a meeting, updating a CRM record, escalating to a human — inside your connected systems.",
      },
      {
        h2: "Our AI Agent Development Services",
        subsections: [
          { h3: "Customer Support Agents", content: "Resolve common queries instantly, with full context handed off for anything that needs a human." },
          { h3: "Sales Agents", content: "Engage inbound leads, answer product questions, and move qualified leads toward a booked call." },
          { h3: "Lead Qualification Agents", content: "Score and route leads automatically based on your qualification criteria." },
          { h3: "Research Agents", content: "Pull, summarize, and structure information from multiple sources automatically." },
          { h3: "Internal Knowledge Agents", content: "Give your team instant, accurate answers pulled from internal docs and systems." },
          { h3: "Operations Agents", content: "Handle recurring operational tasks — scheduling, status updates, reminders — without manual input." },
          { h3: "Data Processing Agents", content: "Extract, clean, and structure data from documents, emails, or forms automatically." },
        ],
      },
      {
        h2: "How AI Agents Work",
        content:
          "An agent is given a goal and a set of tools it's allowed to use (an API, a database query, a calendar action). It reasons through the steps needed, uses the right tool at the right time, and checks its own progress — escalating to a human when it hits something outside its scope.",
      },
      {
        h2: "AI Agent Integrations",
        content:
          "We connect agents to your CRM, support desk, calendar, internal APIs, and communication channels (email, WhatsApp, website chat) — so they operate inside your existing systems rather than a separate silo.",
      },
      {
        h2: "AI Agent Development Process",
        content:
          "Discovery of the exact task and its edge cases, tool/permission design (what the agent can and can't touch), build and prompt-engineering, testing against real scenarios, and staged rollout with monitoring.",
      },
      {
        h2: "Security & Human Oversight",
        content:
          "Every agent we build has clear boundaries on what it can access and act on, logging for every action taken, and defined hand-off points where a human takes over — especially for anything customer-facing or financially sensitive.",
      },
      {
        h2: "AI Agent Use Cases",
        content:
          "A support agent resolving 60% of tickets before they reach a human. A sales agent qualifying every inbound lead within seconds of form submission. An internal agent answering employee questions from company documentation instantly.",
      },
      {
        h2: "Why RKAZN?",
        content:
          "We build agents that take real actions inside real systems — not demo chatbots. Every agent ships with proper guardrails, monitoring, and a clear human hand-off path.",
      },
    ],
    faqs: [
      { q: "Can an AI agent really take actions, not just chat?", a: "Yes — that's the core of what we build. Agents are connected to real tools (APIs, databases, calendars) and can perform actual actions within defined permissions." },
      { q: "What happens if the agent doesn't know the answer?", a: "It escalates to a human with full context, rather than guessing or making something up." },
      { q: "Can it work inside WhatsApp or our website chat?", a: "Yes, agents can be deployed across website chat, WhatsApp, email, or internal tools depending on where you need them." },
      { q: "How do you prevent the agent from making mistakes?", a: "Clear scoping of what it's allowed to access and do, thorough testing against edge cases, and monitoring/logging on every action it takes in production." },
    ],
  },

  {
    slug: "ai-workflow-automation",
    navLabel: "AI Workflow Automation",
    metaTitle: "AI Workflow Automation Services",
    metaDescription:
      "AI-powered workflow automation for lead management, onboarding, support, and reporting — connected across your existing tools.",
    h1: "AI Workflow Automation Services",
    intro:
      "Every business runs on workflows — lead to customer, request to resolution, data to report. RKAZN automates those workflows end-to-end, using AI to handle the judgment calls that simple automation tools can't.",
    sections: [
      {
        h2: "What Is AI Workflow Automation?",
        content:
          "AI workflow automation connects the steps of a business process — triggers, decisions, actions — into a single automated flow, using AI where the process needs to understand language, make a judgment call, or handle something unstructured.",
      },
      {
        h2: "Manual vs Automated Workflows",
        content:
          "A manual workflow depends on someone remembering to do the next step, correctly, every time. An automated workflow runs the same way every time, at any hour, without needing anyone to remember, follow up, or double check.",
      },
      {
        h2: "AI Workflow Automation Examples",
        subsections: [
          { h3: "Lead Management", content: "Auto-capture, score, and route leads to the right person the moment they come in." },
          { h3: "Customer Onboarding", content: "Automated welcome sequences, account setup, and check-ins triggered by signup." },
          { h3: "Sales Follow-ups", content: "Timed, personalized follow-ups that trigger automatically based on prospect behavior." },
          { h3: "Customer Support", content: "Auto-triage and first-response for incoming support requests." },
          { h3: "Document Processing", content: "Automatic extraction and routing of information from incoming documents." },
          { h3: "Reporting", content: "Automated, scheduled reports pulled directly from your live data." },
        ],
      },
      {
        h2: "CRM Automation",
        content:
          "We connect automations directly into your CRM — auto-updating records, logging activity, and triggering the next step in your sales or support process without manual data entry.",
      },
      {
        h2: "API Integrations",
        content:
          "Every workflow we build connects to your real tools via API — no manual copy-pasting between systems, no duplicate data entry.",
      },
      {
        h2: "AI + Human Workflows",
        content:
          "Full automation isn't always the goal. We design workflows where AI handles the repetitive parts and hands off to a human exactly where judgment, empathy, or approval is genuinely needed.",
      },
      {
        h2: "Workflow Monitoring",
        content:
          "Every automated workflow ships with monitoring and alerting, so you know immediately if something breaks — instead of finding out weeks later.",
      },
    ],
    faqs: [
      { q: "Will this replace my team?", a: "No — the goal is to remove repetitive manual work so your team can focus on higher-value tasks, not to replace judgment-based roles." },
      { q: "What tools do you connect with?", a: "Most CRMs, email platforms, calendars, spreadsheets, support desks, and any system with an API or webhook support." },
      { q: "How do you handle exceptions in a workflow?", a: "Every workflow includes defined fallback paths and human hand-off points for anything outside the expected pattern." },
    ],
  },

  {
    slug: "business-process-automation",
    navLabel: "Business Process Automation",
    metaTitle: "Business Process Automation Services",
    metaDescription:
      "Business process automation services — mapping and automating real operational processes, from lead to close, with AI where it genuinely adds value.",
    h1: "Business Process Automation Services",
    intro:
      "Business process automation isn't about buzzwords — it's about looking at how work actually flows through your business and removing the friction. RKAZN maps your real processes and automates them end-to-end.",
    sections: [
      {
        h2: "What Is Business Process Automation?",
        content:
          "Business process automation (BPA) is the use of technology to execute recurring business tasks and processes with minimal human input — reducing manual work, cutting errors, and speeding up cycle times across departments.",
      },
      {
        h2: "A Real Process Example",
        content:
          "Take a typical sales process: Lead → Qualification → CRM → Follow-up → Meeting → Proposal. Each step is usually manual and easy to drop. We look at exactly where automation and AI can step in — auto-qualifying leads, auto-logging to CRM, auto-scheduling follow-ups — without removing human judgment where it's genuinely needed, like the actual sales conversation.",
      },
      {
        h2: "Where We Typically Find the Biggest Wins",
        subsections: [
          { h3: "Sales Operations", content: "Lead intake, qualification, CRM updates, and follow-up sequencing." },
          { h3: "Customer Support", content: "Ticket triage, common-query resolution, and escalation routing." },
          { h3: "Onboarding", content: "New customer or employee onboarding sequences and checklists." },
          { h3: "Reporting & Admin", content: "Recurring reports, data compilation, and internal status updates." },
        ],
      },
      {
        h2: "Our Approach",
        content:
          "We map your process exactly as it happens today — not as it's supposed to happen on paper. From there, we identify the specific steps worth automating, design the automation, build it, and integrate it into your existing tools with proper monitoring.",
      },
      {
        h2: "Why It Matters",
        content:
          "Manual processes don't scale — every new customer, lead, or request adds more manual work. Automated processes handle 10x the volume with the same amount of human effort, freeing your team to focus on the parts of the business that actually need them.",
      },
    ],
    faqs: [
      { q: "How is BPA different from AI automation?", a: "Business process automation looks at the whole end-to-end process across a department; AI automation often refers to individual automated tasks. In practice, we usually combine both — automating full processes using AI where judgment is needed." },
      { q: "Do we need to redesign our whole process first?", a: "No — we start by mapping how the process actually works today, then find the highest-leverage points to automate without requiring a full redesign." },
      { q: "How do you measure success?", a: "Typically: time saved per cycle, error/rework reduction, and how much volume the process can now handle without added headcount." },
    ],
  },
];

export function getServicePageBySlug(slug) {
  return SERVICE_PAGES.find((p) => p.slug === slug);
}