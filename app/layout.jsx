import "./globals.css";
const siteUrl = "https://rkazn.com";
export const metadata = {
  title: "Rudra Kapadia",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}