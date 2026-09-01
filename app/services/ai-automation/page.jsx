import AIAutomationContent from "@/components/AIAutomationContent";

export const metadata = {
  title: "AI Automation Services | RKAZN - Automate Business Workflows",
  description:
    "RKAZN AI automation services help businesses automate repetitive workflows, reduce manual work, and streamline operations. Workflow automation, process automation, and business automation solutions for modern businesses.",
  keywords:
    "AI automation services, workflow automation, business process automation, AI automation company, business automation solutions",
  openGraph: {
    title: "AI Automation Services | RKAZN",
    description:
      "Automate repetitive workflows and reduce manual work with AI automation services.",
    url: "https://rkazn.com/services/ai-automation",
  },
};

export default function AIAutomationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Automation Services",
    provider: {
      "@type": "Organization",
      name: "RKAZN",
      url: "https://rkazn.com",
    },
    serviceType: "AI Automation & Workflow Automation",
    areaServed: "Worldwide",
    description:
      "Custom AI automation services to automate repetitive business workflows, reduce manual work, and scale operations.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AIAutomationContent />
    </>
  );
}