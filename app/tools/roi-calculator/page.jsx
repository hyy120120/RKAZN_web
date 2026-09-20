import ROICalculator from "@/components/ROICalculator";

export const metadata = {
  title: "AI Automation ROI Calculator — Free Tool",
  description:
    "See how much manual, repetitive work is actually costing your business — and what AI automation could save you. Free calculator, no email required.",
  alternates: {
    canonical: "/tools/roi-calculator",
  },
};

export default function ROICalculatorPage() {
  return <ROICalculator />;
}