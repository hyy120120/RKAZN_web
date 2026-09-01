import CustomAISolutionsContent from "@/components/CustomAISolutionsContent";

export const metadata = {
  title: "Custom AI Solutions | RKAZN - Tailor-Made AI Systems",
  description:
    "Custom AI solutions built around your business needs. From AI assistants and RAG systems to custom AI workflows and internal tools. Tailor-made, production-ready AI solutions by RKAZN.",
  keywords:
    "custom AI solutions, AI assistants, RAG systems, AI workflows, custom AI tools, AI product development",
  openGraph: {
    title: "Custom AI Solutions | RKAZN",
    description:
      "Tailor-made AI systems designed around your specific business and tech stack.",
    url: "https://rkazn.com/services/custom-ai-solutions",
  },
};

export default function CustomAISolutionsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom AI Solutions",
    provider: {
      "@type": "Organization",
      name: "RKAZN",
      url: "https://rkazn.com",
    },
    serviceType: "Custom AI System Development",
    areaServed: "Worldwide",
    description:
      "Custom AI solutions including AI assistants, RAG systems, AI workflows, and intelligent business tools.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CustomAISolutionsContent />
    </>
  );
}