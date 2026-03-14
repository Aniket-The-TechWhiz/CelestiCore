import { LucideIcon } from "lucide-react";
import {
  Building2,
  TrendingUp,
  GraduationCap,
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
    name: "GDGoC - TAE",
    description:
      "Google Developer Groups on Campus at Trinity Academy of Engineering (GDGoC-TAE) is a student-led community fostering technology learning and innovation.",
    icon: Users,
    gradient: "from-blue-500 to-cyan-500",
    features: ["Workshops & study jams", "Hackathons & tech talks", "Community mentorship"],
    demoUrl: "https://gdgoc-tae.netlify.app/",
    detailedDescription:
      "Google Developer Groups on Campus at Trinity Academy of Engineering (GDGoC-TAE) is a student-led community fostering technology learning and innovation. Through hands-on workshops, coding sessions, and tech talks, we empower students to explore Google's cutting-edge technologies.",
    technicalFeatures: [
      "Event discovery interface with upcoming and past event categorization",
      "Community registration and contact workflows with social platform integrations",
      "Role-based team showcase covering technical, management, and outreach leads",
      "Media-rich event gallery for workshops, study jams, conferences, and hackathons",
      "Resource and FAQ hub aligned with Google developer programs and learning paths",
      "Responsive web experience optimized for campus-wide student access",
    ],
    pricing: "Free for Trinity Academy students",
  },
  {
    name: "Gravity 2K26",
    description:
      "GRAVITY 2K26 is the flagship techfest of KJEI, bringing together innovation, coding, robotics, and competitive events for student builders.",
    icon: TrendingUp,
    gradient: "from-purple-500 to-pink-500",
    features: ["Multi-domain tech events", "Live registrations", "Prize-driven competitions"],
    demoUrl: "https://gravity2k26.tech/",
    detailedDescription:
      "Gravity 2K26 is positioned as the ultimate techfest experience by KJEI, designed to unite students through hackathon-style innovation, technical challenges, gaming competitions, and project pitching. The platform highlights event timelines, team formats, registration pathways, and structured prize pools, while promoting a high-energy community-driven atmosphere around technology and creativity.",
    technicalFeatures: [
      "Event-centric architecture with dedicated pages for flagship and sub-events",
      "External registration integrations (Unstop links) for streamlined participant onboarding",
      "Structured event metadata including team size, format, pricing, and rule sets",
      "Prize and schedule modules presenting date-wise milestones and reward breakdowns",
      "Sponsor and contact sections with direct email and social platform connectivity",
      "Responsive single-page web experience optimized for high student traffic",
    ],
    pricing: "Event registrations starting from ₹199/team",
  },
  {
    name: "PrimeBuild",
    description:
      "PrimeBuild is a premium property discovery platform focused on curated rental and resale listings for buyers, renters, and investors.",
    icon: Building2,
    gradient: "from-orange-500 to-amber-500",
    features: ["Rental & resale listings", "Property filters", "Client-focused brokerage"],
    demoUrl: "https://real-estate-frontend-eight-tawny.vercel.app/",
    detailedDescription:
      "PrimeBuild helps users discover high-quality real estate opportunities through a polished listings interface, trusted brokerage positioning, and clear customer engagement paths. The website is built around rental and resale discovery, social proof through reviews, and conversion-focused sections like FAQs, contact, and newsletter updates.",
    technicalFeatures: [
      "Segmented property browsing flows for rentals and resale opportunities",
      "Dynamic property listing module with filtering controls and loading states",
      "Testimonial carousel experience with dated client feedback and rating emphasis",
      "FAQ and guided support components for common buyer and renter questions",
      "Lead capture features including contact CTA and newsletter subscription",
      "Responsive real-estate landing architecture with performance-oriented media assets",
    ],
    pricing: "Brokerage pricing based on property type and service scope",
  },
  {
    name: "Phoenix Tech Academy",
    description:
      "Phoenix Tech Academy is a computer education institute in Hadapsar, Pune, empowering students with essential computer skills and technology courses.",
    icon: GraduationCap,
    gradient: "from-emerald-500 to-teal-500",
    features: ["Certified computer courses", "Coding & tech classes", "Hands-on learning"],
    demoUrl: "https://phoenix-tech.in/",
    detailedDescription:
      "Phoenix Tech Academy brings the vision of 'From Ideas to Impact' to life by providing quality technology education in Hadapsar, Pune. The institute offers professional courses including MS-CIT, Basic Computer, Coding Classes, and English Speaking — all managed through a dynamic course admin panel. With modern infrastructure and a student-first approach, Phoenix Tech prepares learners for real-world digital careers.",
    technicalFeatures: [
      "Admin-managed course catalog with dynamic listing and enrollment flows",
      "Course discovery pages with duration, description, and explore CTAs",
      "Enquiry and contact capture forms linked to institute communication channels",
      "Modern infrastructure showcase section highlighting learning facilities",
      "Quick links navigation covering all offered courses and contact details",
      "Responsive single-page layout optimized for student and parent audiences",
    ],
    pricing: "Course fees vary — contact institute for current pricing",
  },];
