// Industry pages — same AI automation services, positioned around
// each industry's specific, real pain points.

export const INDUSTRIES = [
  {
    slug: "real-estate",
    navLabel: "Real Estate",
    metaTitle: "AI Automation for Real Estate Businesses",
    metaDescription:
      "AI automation for real estate — lead qualification, follow-ups, and property inquiry handling that never sleeps.",
    h1: "AI Automation for Real Estate",
    intro:
      "Real estate runs on speed — the first agent to respond usually wins the deal. RKAZN builds AI automation that qualifies leads, answers property questions, and follows up within seconds, not hours.",
    sections: [
      {
        h2: "The Problem in Real Estate",
        content:
          "Leads come in at all hours — from listing sites, WhatsApp, website forms. By the time an agent responds the next morning, a competitor has often already called. Manual follow-up sequences get dropped, and qualified buyers slip through because nobody had time to properly screen them.",
      },
      {
        h2: "Where AI Automation Fits",
        subsections: [
          { h3: "Instant Lead Response", content: "Every inbound inquiry gets an immediate, relevant reply — 24/7, not just during office hours." },
          { h3: "Automatic Qualification", content: "Budget, timeline, and property preferences captured before a human ever picks up the phone." },
          { h3: "Property Q&A Agent", content: "Answers common questions about listings instantly, freeing agents for actual showings and negotiations." },
          { h3: "Follow-Up Sequences", content: "Automated, personalized follow-ups that don't stop just because someone forgot to log a call." },
        ],
      },
      {
        h2: "Why It Matters Here Specifically",
        content:
          "In real estate, response time is often the single biggest factor in whether a lead converts. Automating the first response and qualification step doesn't replace your agents — it makes sure every lead actually gets a fair shot before it goes cold.",
      },
    ],
    faqs: [
      { q: "Can this integrate with the CRM we already use?", a: "Yes — we connect directly to most real estate CRMs and lead sources via API, no need to switch platforms." },
      { q: "Will leads know they're talking to an AI first?", a: "That's your call — we can be fully transparent about it, or have it hand off to a human agent seamlessly once qualified." },
    ],
  },

  {
    slug: "e-commerce",
    navLabel: "E-commerce",
    metaTitle: "AI Automation for E-commerce Businesses",
    metaDescription:
      "AI automation for e-commerce — order support, returns, and customer queries handled instantly, at any volume.",
    h1: "AI Automation for E-commerce",
    intro:
      "Order status questions, return requests, and \"where's my package\" messages eat up support hours that should go toward growing the store. RKAZN automates the repetitive parts of e-commerce support and operations.",
    sections: [
      {
        h2: "The Problem in E-commerce",
        content:
          "Support volume scales with sales — but support teams don't scale as fast. The same handful of questions (order status, returns, sizing, shipping) get asked hundreds of times a week, each one manually typed out by a human who could be doing something more valuable.",
      },
      {
        h2: "Where AI Automation Fits",
        subsections: [
          { h3: "Order Status & Tracking", content: "Instant, accurate answers pulled directly from your order system — no manual lookups." },
          { h3: "Returns & Refunds", content: "Automated processing of standard return requests within your policy rules." },
          { h3: "Product Q&A", content: "Answers sizing, material, and compatibility questions instantly, day or night." },
          { h3: "Abandoned Cart Follow-Up", content: "Automated, well-timed nudges that don't feel like spam." },
        ],
      },
      {
        h2: "Why It Matters Here Specifically",
        content:
          "During peak sale periods, support volume can spike 5-10x. Automation is what lets a small team handle that spike without hiring seasonal staff or leaving customers waiting for days.",
      },
    ],
    faqs: [
      { q: "Does this work with Shopify / WooCommerce?", a: "Yes, we integrate directly with major e-commerce platforms to pull real order and inventory data." },
      { q: "Can it handle refunds automatically?", a: "Within rules you set — e.g., auto-approve returns under a certain value or within your policy window, escalate anything else." },
    ],
  },

  {
    slug: "healthcare",
    navLabel: "Healthcare",
    metaTitle: "AI Automation for Healthcare Businesses",
    metaDescription:
      "AI automation for healthcare practices — appointment scheduling, patient follow-ups, and admin work, handled carefully and securely.",
    h1: "AI Automation for Healthcare Practices",
    intro:
      "Healthcare admin work is relentless — scheduling, reminders, intake forms, follow-ups. RKAZN automates the administrative load so your staff can focus on patients, not paperwork.",
    sections: [
      {
        h2: "The Problem in Healthcare",
        content:
          "Front-desk staff spend a huge share of their day on phone calls that don't need a human — confirming appointments, answering basic questions, chasing no-shows. Meanwhile patients wait on hold for things a well-designed system could handle instantly.",
      },
      {
        h2: "Where AI Automation Fits",
        subsections: [
          { h3: "Appointment Scheduling", content: "Automated booking, confirmation, and rescheduling that syncs directly with your calendar." },
          { h3: "Reminders & No-Show Reduction", content: "Automated reminders sent at the right time, through the right channel." },
          { h3: "Intake & Pre-Visit Forms", content: "Digital intake collected before the visit, reducing waiting-room admin time." },
          { h3: "Patient FAQs", content: "Answers common questions about hours, insurance, and general policies instantly." },
        ],
      },
      {
        h2: "Why It Matters Here Specifically",
        content:
          "Every automated process in a healthcare setting is designed with clear boundaries — nothing that requires clinical judgment is ever automated. The goal is removing admin friction, not replacing care decisions.",
      },
    ],
    faqs: [
      { q: "Is patient data handled securely?", a: "Yes — data handling is scoped carefully per project, and we design systems around your specific compliance requirements." },
      { q: "Does this replace front-desk staff?", a: "No — it removes the repetitive admin load so your existing staff can focus on patients instead of phone queues." },
    ],
  },

  {
    slug: "agencies",
    navLabel: "Agencies",
    metaTitle: "AI Automation for Agencies",
    metaDescription:
      "AI automation for marketing, creative, and service agencies — client reporting, lead intake, and internal ops without the manual grind.",
    h1: "AI Automation for Agencies",
    intro:
      "Agencies run on billable hours — every hour spent on manual reporting or admin is an hour not spent on client work. RKAZN automates the operational grind that eats into agency margins.",
    sections: [
      {
        h2: "The Problem in Agencies",
        content:
          "Weekly/monthly client reports get manually compiled from five different tools. New leads sit in an inbox for a day before anyone qualifies them. Internal status updates happen over endless Slack threads instead of a system that just tracks it.",
      },
      {
        h2: "Where AI Automation Fits",
        subsections: [
          { h3: "Automated Client Reporting", content: "Reports pulled and formatted automatically from your live data sources — no more manual compiling." },
          { h3: "Lead Intake & Qualification", content: "New inquiries scored and routed automatically the moment they come in." },
          { h3: "Internal Status Automation", content: "Automated project status updates pulled from your actual tools, not manual check-ins." },
          { h3: "Proposal & Onboarding Automation", content: "Standardized onboarding sequences that trigger automatically once a deal closes." },
        ],
      },
      {
        h2: "Why It Matters Here Specifically",
        content:
          "Agencies live and die by margins. Every hour of manual, repeatable admin work automated is an hour that goes back into either billable work or actual capacity to take on more clients.",
      },
    ],
    faqs: [
      { q: "Can this pull data from tools like Google Analytics or ad platforms?", a: "Yes — we build reporting automations that pull directly from the platforms you already use for client work." },
      { q: "Will this work for a small agency, not just big ones?", a: "Yes — in fact smaller teams often see the biggest relative time savings, since there's no dedicated ops person to absorb the manual work." },
    ],
  },

  {
    slug: "small-business",
    navLabel: "Small Business",
    metaTitle: "AI Automation for Small Businesses",
    metaDescription:
      "AI automation for small businesses — practical, affordable automation for the busywork that a bigger team would normally absorb.",
    h1: "AI Automation for Small Businesses",
    intro:
      "You don't have a big team to absorb repetitive admin work — every hour matters. RKAZN builds practical, right-sized AI automation that removes the busywork without an enterprise price tag.",
    sections: [
      {
        h2: "The Problem for Small Businesses",
        content:
          "Enterprise automation tools are built (and priced) for enterprises. Small businesses end up either doing everything manually or duct-taping together five different no-code tools that break the moment something changes.",
      },
      {
        h2: "Where AI Automation Fits",
        subsections: [
          { h3: "Customer Inquiries", content: "Instant answers to common questions, any time of day, without hiring extra support staff." },
          { h3: "Booking & Scheduling", content: "Automated appointment or order scheduling that just works, without back-and-forth emails." },
          { h3: "Follow-Ups", content: "Automated, consistent follow-up sequences — the kind that are easy to forget when you're wearing five hats." },
          { h3: "Admin & Reporting", content: "Simple automated reports so you always know how the business is actually doing." },
        ],
      },
      {
        h2: "Why It Matters Here Specifically",
        content:
          "For a small business, automation isn't about scale — it's about giving the owner and small team their time back. A well-built automation can genuinely feel like hiring a reliable extra pair of hands, for a fraction of the cost.",
      },
    ],
    faqs: [
      { q: "Is this affordable for a small business budget?", a: "We scope projects around what actually makes sense for your size — starting with the single highest-impact process, not a full overhaul." },
      { q: "Do I need technical staff to maintain this?", a: "No — every automation we build is documented and designed to run without needing an in-house developer." },
    ],
  },
];

export function getIndustryBySlug(slug) {
  return INDUSTRIES.find((i) => i.slug === slug);
}