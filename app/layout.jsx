import "./globals.css";

const siteUrl = "https://rkazn.com";

export const metadata = {
  title: "RKAZN - AI Automation & Custom AI Solutions",
  description: "AI automation, custom AI agents, chatbots, and full-stack AI product development. Transform your business with intelligent AI solutions.",
  keywords: "AI automation, AI agents, chatbots, AI consulting, custom AI solutions, AI workflows",
  
  // Open Graph (Instagram/Facebook/LinkedIn share preview)
  openGraph: {
    title: "RKAZN - AI Automation Solutions",
    description: "Build your AI advantage. Custom AI agents, automation, and chatbots for your business.",
    url: siteUrl,
    siteName: "RKAZN",
    type: "website",
    images: [
      {
        url: `${siteUrl}/logo-white.png`,
        width: 1200,
        height: 630,
        alt: "RKAZN - AI Solutions",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "RKAZN - AI Automation & Solutions",
    description: "Transform your business with AI automation, custom agents, and chatbots.",
    creator: "@rkazn_",
    images: [`${siteUrl}/logo-white.png`],
  },
  
  // Apple meta
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "RKAZN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logo-heroleftside.png" type="image/svg+xml" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="RKAZN" />
      </head>
      <body>{children}</body>
    </html>
  );
}