import BusinessProcessContent from "@/components/BusinessProcessContent";

export const metadata = {
  title: "Business Process Automation Services | RKAZN",
  description:
    "Business process automation services by RKAZN. Streamline end-to-end processes, reduce costs, eliminate manual work. BPA solutions for modern businesses.",
  keywords:
    "business process automation, BPA services, process automation company, intelligent automation",
  openGraph: {
    title: "Business Process Automation Services | RKAZN",
    description:
      "Automate entire business processes from start to finish.",
    url: "https://rkazn.com/services/business-process-automation",
  },
};

export default function BusinessProcessPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Process Automation",
    provider: {
      "@type": "Organization",
      name: "RKAZN",
      url: "https://rkazn.com",
    },
    serviceType: "Business Process Automation",
    areaServed: "Worldwide",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BusinessProcessContent />
    </>
  );
}