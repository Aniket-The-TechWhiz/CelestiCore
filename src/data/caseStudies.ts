import { LucideIcon } from "lucide-react";
import {
  TrendingUp,
  Zap,
  Users,
  Award,
} from "lucide-react";

export interface CaseStudyResult {
  icon: LucideIcon;
  value: string;
  label: string;
}

export interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  color: string;
}

export const caseStudies: CaseStudy[] = [
  {
    company: "Gravity 2K26",
    industry: "College Techfest",
    challenge: "Unifying multi-domain events, registrations, and prize management for a large-scale college techfest",
    solution: "Built a dynamic single-page event platform with Unstop registration integrations, sponsor showcases, and structured prize modules",
    results: [
      { icon: Award, value: "₹1L+", label: "Total Prize Pool" },
      { icon: TrendingUp, value: "6+", label: "Competitive Events" },
      { icon: Users, value: "₹199", label: "Starting Entry Fee" },
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    company: "PrimeBuild",
    industry: "Real Estate",
    challenge: "Connecting buyers and renters with quality property listings through a trustworthy, conversion-focused online presence",
    solution: "Developed a curated property discovery platform with filterable listings, client testimonials, FAQ support, and newsletter lead capture",
    results: [
      { icon: Award, value: "500+", label: "Properties Listed" },
      { icon: Users, value: "1000+", label: "Happy Clients" },
      { icon: TrendingUp, value: "4.9/5", label: "Client Rating" },
    ],
    color: "from-orange-500 to-amber-500",
  },
  {
    company: "Phoenix Tech Academy",
    industry: "Education",
    challenge: "Delivering structured computer and technology education to students in Hadapsar, Pune with an accessible online presence",
    solution: "Launched a responsive institute website with an admin-managed course catalog, enquiry flows, and facilities showcase",
    results: [
      { icon: Award, value: "4+", label: "Certified Courses" },
      { icon: Zap, value: "100%", label: "Practical Training" },
      { icon: Users, value: "Pune", label: "Hadapsar Campus" },
    ],
    color: "from-emerald-500 to-teal-500",
  },
];
