import { notFound } from "next/navigation";

// Work section temporarily disabled site-wide — koi real project/case study
// nahi hai is industry ke liye abhi. /work (index) pehle se hi notFound()
// tha; individual project pages bhi ab wahi karte hain, taaki placeholder
// case studies Google ko na dikhein. sitemap.js se bhi ye URLs hata di gayi hain.
//
// Jab real project data ho (data/projects.js), wapas enable karne ke liye:
// neeche wali line hata do aur asli generateStaticParams/generateMetadata/
// ProjectPage wapas laga do (git history me hai, commit se pehle wala).
export default function ProjectPage() {
  notFound();
}
