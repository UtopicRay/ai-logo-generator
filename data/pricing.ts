import { PricingPlan } from "@/type";

export const PricingData: PricingPlan[] = [
  {
    id: "free",
    name: "Free Plan",
    price: "$0",
    features: [
      "Generate up to 5 logos per day",
      "Limited access to styles and colors",
      "Standard quality downloads (PNG)",
    ],
    buttonText: "Start Free",
  },
  {
    id: "pro",
    name: "Professional Plan",
    price: "$9.99/month",
    features: [
      "Unlimited and priority generations",
      "Editable and vector files (SVG)",
      "Commercial license and full ownership",
    ],
    buttonText: "Subscribe Now",
  },
];
