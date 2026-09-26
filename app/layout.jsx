import Script from "next/script";
import "./globals.css";

const siteUrl = "https://rkazn.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "AI Automation & Custom AI Solutions for Businesses | RKAZN",
    template: "%s | RKAZN",
  },

  description:
    "RKAZN builds AI automation, custom AI solutions, AI agents, and workflow automation systems that help businesses reduce manual work and scale operations.",

  keywords: [
    "AI automation",
    "AI automation services",
    "custom AI solutions",
    "custom AI development",
    "AI agent development",
    "AI workflow automation",
    "business process automation",
  ],

  authors: [{ name: "RKAZN" }],
  creator: "RKAZN",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "AI Automation & Custom AI Solutions for Businesses | RKAZN",
    description:
      "AI automation, custom AI solutions, AI agents, and workflow automation built around your business.",
    url: siteUrl,
    siteName: "RKAZN",
    type: "website",
    images: [
      {
        url: "/logo-white.png",
        width: 1200,
        height: 630,
        alt: "RKAZN - AI Automation & Custom AI Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Automation & Custom AI Solutions for Businesses | RKAZN",
    description:
      "AI automation, custom AI solutions, AI agents, and workflow automation built around your business.",
    creator: "@rkazn_",
    images: ["/logo-white.png"],
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "RKAZN",
  },
};

export default function RootLayout({ children }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RKAZN",
    url: siteUrl,
    logo: `${siteUrl}/logo-white.png`,
    description:
      "RKAZN is an AI and product development studio helping businesses turn repetitive work, scattered data, and ambitious ideas into intelligent systems.",
    founder: {
      "@type": "Person",
      name: "Rudra Kapadia",
    },
    email: "info@rkazn.com",
    sameAs: [
      "https://www.linkedin.com/company/rkazn",
      "https://www.instagram.com/rkazn_",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/logo-heroleftside.png"
          type="image/svg+xml"
        />

        <meta name="theme-color" content="#000000" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />

        <link
          rel="stylesheet"
          href="https://chatzy-kb-store.s3.amazonaws.com/icons/5ab07987-b5db-477c-82ff-1287e0883acb"
        />

        <Script
          src="https://chatzy-kb-store.s3.amazonaws.com/icons/56706cc4-b3ba-4eba-9610-f2fb07008a5c"
          id="ae434347-53f1-4dfe-b2e9-e5585c90e34c"
          className="chatzy_widget_script"
          strategy="afterInteractive"
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WG1N2M5YNL"
          strategy="afterInteractive"
        />

        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WG1N2M5YNL');`}
        </Script>
      </head>

      <body>{children}</body>
    </html>
  );
}