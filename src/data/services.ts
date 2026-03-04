import { LucideIcon } from "lucide-react";
import {
  Globe,
  Smartphone,
  Package,
  Palette,
  Cloud,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

export const services: Service[] = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "We build responsive, fast, and SEO-optimized websites that elevate your brand and drive conversions.",
    features: [
      "Custom UI",
      "Mobile-first layout",
      "High-speed performance",
      "SEO optimization",
      "CMS options",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Transform your idea into a powerful mobile application.",
    features: [
      "Native & hybrid apps",
      "Smooth performance",
      "Secure API integration",
      "App store deployment",
      "Cross-platform support",
    ],
    gradient: "from-[#A020F0] to-purple-600",
  },
  {
    icon: Package,
    title: "Custom Product Development",
    description:
      "From idea to launch, our product engineers work alongside you to build scalable, market-ready digital products.",
    features: [
      "Full product lifecycle",
      "Scalable architecture",
      "MVP development",
      "User testing",
      "Market validation",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "We create elegant, intuitive designs that enhance user satisfaction, reduce friction, and increase engagement.",
    features: [
      "User research",
      "Wireframes & prototypes",
      "Design systems",
      "Usability testing",
      "Brand identity",
    ],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Deploy smarter with our secure cloud solutions and automated workflows.",
    features: [
      "Automated deployments",
      "CI/CD pipelines",
      "Server optimization",
      "Cloud migration",
      "24/7 monitoring",
    ],
    gradient: "from-[#2FFFA3] to-emerald-500",
  },
];
