export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://rkazn.com/sitemap.xml", // apni actual domain se replace karna
  };
}