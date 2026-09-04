import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import { INDUSTRIES } from "@/data/industries";

export const metadata = {
  title: "Industries We Serve",
  description: "AI automation solutions built around the specific needs of your industry.",
};

export default function IndustriesPage() {
  return (
    <div className="inner-page">
      <SiteNav />

      <section className="svc-hero">
        <h1 className="svc-hero-heading">Industries We Serve</h1>
        <p className="svc-intro">
          Same engineering discipline, applied to what actually matters in
          your industry.
        </p>
      </section>

      <section className="work-list">
        {INDUSTRIES.map((ind, i) => (
          <Link href={`/industries/${ind.slug}`} className="work-row" key={ind.slug}>
            <span className="work-row-index">{String(i + 1).padStart(2, "0")}</span>
            <span className="work-row-title">{ind.navLabel}</span>
            <span className="work-row-category">AI Automation</span>
            <span className="work-row-arrow">→</span>
          </Link>
        ))}
      </section>

      <Footer variant="static" />
    </div>
  );
}