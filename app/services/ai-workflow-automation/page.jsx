import AIWorkflowContent from "@/components/AIWorkflowContent";

export const metadata = {
  title: "AI Workflow Automation Services | RKAZN",
  description:
    "AI workflow automation services to connect tools, automate multi-step processes, and eliminate manual work. Integrate CRM, email, databases, and custom systems.",
  keywords:
    "AI workflow automation, workflow automation services, process automation, API integration",
  openGraph: {
    title: "AI Workflow Automation Services | RKAZN",
    description:
      "Connect your tools and automate complex workflows with AI.",
    url: "https://rkazn.com/services/ai-workflow-automation",
  },
};

export default function AIWorkflowPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Workflow Automation",
    provider: {
      "@type": "Organization",
      name: "RKAZN",
      url: "https://rkazn.com",
    },
    serviceType: "Workflow Automation",
    areaServed: "Worldwide",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AIWorkflowContent />
    </>
  );
}