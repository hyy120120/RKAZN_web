import AIAgentContent from "@/components/AIAgentContent";

export const metadata = {
  title: "AI Agent Development Services | RKAZN - Custom AI Agents for Business",
  description:
    "Custom AI agent development services by RKAZN. Build intelligent AI agents for customer support, lead qualification, sales, and internal workflows. Deploy AI agents that take actions in your business systems.",
  keywords:
    "AI agent development, custom AI agents, AI agents for business, intelligent agents, chatbot development, AI automation agents",
  openGraph: {
    title: "AI Agent Development Services | RKAZN",
    description:
      "Deploy intelligent AI agents that qualify leads, support customers, and automate business tasks.",
    url: "https://rkazn.com/services/ai-agent-development",
  },
};

export default function AIAgentPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Agent Development",
    provider: {
      "@type": "Organization",
      name: "RKAZN",
      url: "https://rkazn.com",
    },
    serviceType: "Custom AI Agent Development",
    areaServed: "Worldwide",
    description:
      "Custom AI agent development services. Build intelligent agents for customer support, lead qualification, sales automation, and business process automation.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AIAgentContent />
    </>
  );
}