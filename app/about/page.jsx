import AboutContent from "@/components/AboutContent";

export const metadata = {
  title: "About",
   description:
    "RKAZN is an AI and product development studio founded by Rudra Kapadia, helping businesses turn repetitive work, scattered data, and ambitious ideas into intelligent systems that create real leverage.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}