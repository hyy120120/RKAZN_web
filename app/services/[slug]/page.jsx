import { notFound } from "next/navigation";
import { SERVICE_PAGES, getServicePageBySlug } from "@/data/service-pages";
import ServicePageContent from "@/components/ServicePageContent";

export function generateStaticParams() {
  return SERVICE_PAGES.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getServicePageBySlug(slug);

  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,

    alternates: {
      canonical: `/services/${page.slug}`,
    },

    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://rkazn.com/services/${page.slug}`,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
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