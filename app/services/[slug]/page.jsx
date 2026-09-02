import { notFound } from "next/navigation";
import { SERVICE_PAGES, getServicePageBySlug } from "@/data/service-pages";
import ServicePageContent from "@/components/ServicePageContent";

export function generateStaticParams() {
  return SERVICE_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getServicePageBySlug(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const page = getServicePageBySlug(slug);
  if (!page) notFound();

  return <ServicePageContent page={page} />;
}