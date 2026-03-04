import { LucideIcon } from "lucide-react";
import {
  Globe,
  TrendingUp,
  Zap,
  Shield,
  Code,
  Users,
} from "lucide-react";

export interface Product {
  name: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  features: string[];
  demoUrl: string;
  detailedDescription: string;
  technicalFeatures: string[];
  pricing: string;
}

export const products: Product[] = [
  {
    name: "CloudSync Pro",
    description:
      "Enterprise-grade cloud synchronization platform for seamless data management across all your devices and teams.",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
    features: ["Real-time sync", "Enterprise security", "API integration"],
    demoUrl: "https://cloudsync.demo.celesticore.com",
    detailedDescription:
      "CloudSync Pro revolutionizes how teams collaborate by providing instant synchronization across unlimited devices. Built on cutting-edge cloud infrastructure, it ensures your data is always accessible, secure, and up-to-date. Whether you're working from the office, home, or on the go, CloudSync Pro keeps your entire team connected.",
    technicalFeatures: [
      "Real-time bidirectional sync with conflict resolution",
      "End-to-end encryption with zero-knowledge architecture",
      "RESTful API with webhooks for custom integrations",
      "Unlimited storage with versioning and rollback",
      "Cross-platform support (Web, iOS, Android, Desktop)",
      "Advanced permission management and access controls",
    ],
    pricing: "Starting at ₹2,999/month",
  },
  {
    name: "DevHub Analytics",
    description:
      "Comprehensive analytics dashboard for development teams to track performance metrics and optimize workflows.",
    icon: TrendingUp,
    gradient: "from-purple-500 to-pink-500",
    features: ["Custom dashboards", "Real-time insights", "Team collaboration"],
    demoUrl: "https://devhub.demo.celesticore.com",
    detailedDescription:
      "DevHub Analytics transforms raw development data into actionable insights. Track code velocity, identify bottlenecks, and optimize your team's performance with beautiful, customizable dashboards. Integrate with your existing tools and get real-time visibility into what matters most.",
    technicalFeatures: [
      "Customizable dashboards with drag-and-drop widgets",
      "Integration with GitHub, GitLab, Jira, and more",
      "Real-time performance metrics and alerts",
      "Team productivity analytics and trends",
      "Code quality metrics and technical debt tracking",
      "Export reports in multiple formats (PDF, CSV, JSON)",
    ],
    pricing: "Starting at ₹4,999/month",
  },
  {
    name: "TaskFlow AI",
    description:
      "AI-powered project management tool that predicts bottlenecks and optimizes workflows for maximum productivity.",
    icon: Zap,
    gradient: "from-orange-500 to-amber-500",
    features: ["AI predictions", "Smart automation", "Resource optimization"],
    demoUrl: "https://taskflow.demo.celesticore.com",
    detailedDescription:
      "TaskFlow AI uses machine learning to predict project delays before they happen. It analyzes your team's patterns, identifies potential bottlenecks, and suggests optimal resource allocation. Say goodbye to missed deadlines and hello to predictable project delivery.",
    technicalFeatures: [
      "AI-powered task prioritization and scheduling",
      "Predictive analytics for deadline forecasting",
      "Smart resource allocation and workload balancing",
      "Automated workflow optimization suggestions",
      "Integration with popular project management tools",
      "Natural language task creation and updates",
    ],
    pricing: "Starting at ₹6,999/month",
  },
  {
    name: "SecureVault",
    description:
      "Next-generation password and secrets management for teams. Keep your credentials safe with military-grade encryption.",
    icon: Shield,
    gradient: "from-emerald-500 to-teal-500",
    features: ["Zero-knowledge encryption", "Team sharing", "Audit logs"],
    demoUrl: "https://securevault.demo.celesticore.com",
    detailedDescription:
      "SecureVault provides military-grade security for your organization's most sensitive data. With zero-knowledge encryption, not even we can access your secrets. Share credentials securely across teams, track access with detailed audit logs, and sleep soundly knowing your data is protected.",
    technicalFeatures: [
      "AES-256 encryption with zero-knowledge architecture",
      "Secure team sharing with granular permissions",
      "Comprehensive audit logs and compliance reporting",
      "Multi-factor authentication (MFA) support",
      "Browser extensions and mobile apps",
      "Emergency access and recovery options",
    ],
    pricing: "Starting at ₹1,999/month",
  },
  {
    name: "CodeCollab",
    description:
      "Real-time collaborative coding environment with integrated version control and live pair programming features.",
    icon: Code,
    gradient: "from-[#A020F0] to-purple-600",
    features: ["Live collaboration", "Version control", "Code review tools"],
    demoUrl: "https://codecollab.demo.celesticore.com",
    detailedDescription:
      "CodeCollab brings the power of pair programming to distributed teams. Code together in real-time, review changes collaboratively, and ship faster with integrated version control. Perfect for remote teams, coding bootcamps, and technical interviews.",
    technicalFeatures: [
      "Real-time collaborative editing with live cursors",
      "Integrated Git version control and branches",
      "Built-in code review and commenting system",
      "Video and voice chat during coding sessions",
      "Support for 100+ programming languages",
      "Private and public workspace options",
    ],
    pricing: "Starting at ₹3,499/month",
  },
  {
    name: "TeamConnect",
    description:
      "Modern team communication platform designed for remote teams with video, chat, and project integration.",
    icon: Users,
    gradient: "from-rose-500 to-red-500",
    features: ["Video conferencing", "Screen sharing", "Project integration"],
    demoUrl: "https://teamconnect.demo.celesticore.com",
    detailedDescription:
      "TeamConnect unifies all your team communication in one place. High-quality video conferencing, instant messaging, and seamless integration with your project management tools. Built for remote-first teams who need reliability and performance.",
    technicalFeatures: [
      "HD video conferencing for up to 500 participants",
      "Screen sharing with annotation tools",
      "Persistent chat channels and direct messaging",
      "Integration with project management platforms",
      "Recording and transcription services",
      "Custom bots and workflow automation",
    ],
    pricing: "Starting at ₹5,999/month",
  },
];
