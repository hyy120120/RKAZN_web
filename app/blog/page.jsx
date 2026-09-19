import BlogIndex from "@/components/BlogIndex";

export const metadata = {
  title: "Blog — AI Automation Insights",
  description: "Practical, no-fluff writing on AI automation, AI agents, and business process design from RKAZN.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return <BlogIndex />;
}