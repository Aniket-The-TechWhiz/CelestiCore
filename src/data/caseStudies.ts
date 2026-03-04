import { LucideIcon } from "lucide-react";
import {
  TrendingUp,
  Zap,
  Shield,
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
    company: "FinanceFlow",
    industry: "Fintech",
    challenge: "Legacy banking system needed modernization",
    solution: "Built a secure, scalable mobile banking platform",
    results: [
      { icon: TrendingUp, value: "300%", label: "User Growth" },
      { icon: Zap, value: "60%", label: "Faster Transactions" },
      { icon: Shield, value: "99.9%", label: "Uptime Achieved" },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    company: "HealthTrack",
    industry: "Healthcare",
    challenge: "Patient engagement and appointment management",
    solution: "Comprehensive telemedicine and patient portal",
    results: [
      { icon: Users, value: "50K+", label: "Active Patients" },
      { icon: TrendingUp, value: "85%", label: "Patient Satisfaction" },
      { icon: Zap, value: "40%", label: "Admin Time Saved" },
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    company: "ShopNest",
    industry: "E-commerce",
    challenge: "Scale infrastructure for Black Friday demand",
    solution: "Cloud-native platform with auto-scaling",
    results: [
      { icon: TrendingUp, value: "500%", label: "Traffic Handled" },
      { icon: Zap, value: "<2s", label: "Page Load Time" },
      { icon: Award, value: "₹40Cr+", label: "Revenue Generated" },
    ],
    color: "from-purple-500 to-pink-500",
  },
];
