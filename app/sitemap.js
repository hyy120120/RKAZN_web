import { PROJECTS } from "@/data/projects";
import { SERVICE_PAGES } from "@/data/service-pages";
import { BLOG_POSTS } from "@/data/blog-posts";
import { INDUSTRIES } from "@/data/industries";

export default function sitemap() {
  const base = "https://rkazn.com";

  const staticRoutes = [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/industries`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/tools/roi-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
  ];

  const serviceRoutes = SERVICE_PAGES.map((p) => ({
    url: `${base}/services/${p.slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85,
  }));

  const industryRoutes = INDUSTRIES.map((p) => ({
    url: `${base}/industries/${p.slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75,
  }));

  const workRoutes = PROJECTS.map((p) => ({
    url: `${base}/work/${p.slug}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6,
  }));

  const blogRoutes = BLOG_POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}`, lastModified: p.date, changeFrequency: "monthly", priority: 0.65,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...workRoutes, ...blogRoutes];
}