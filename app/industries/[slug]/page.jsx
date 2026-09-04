import { notFound } from "next/navigation";
import { INDUSTRIES, getIndustryBySlug } from "@/data/industries";
import IndustryPageContent from "@/components/IndustryPageContent";

export function generateStaticParams() {
  return INDUSTRIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getIndustryBySlug(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
  };
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const page = getIndustryBySlug(slug);
  if (!page) notFound();

  return <IndustryPageContent page={page} />;
}