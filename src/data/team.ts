export interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  image?: string;     // Optional: URL to profile image
  linkedin?: string;  // Optional: LinkedIn profile URL
  email?: string;     // Optional: Email address
}

export const teamMembers: TeamMember[] = [
  {
    name: "Aniket Yelameli",
    role: "Founder",
    expertise: "Business Strategy & Product Vision",
    image: "/images/team/aniket.JPG",
    linkedin: "https://linkedin.com/in/alexjohnson",
    email: "alex.johnson@celesticore.com",
  },
  {
    name: "Sarah Chen",
    role: "CTO & Co-Founder",
    expertise: "Full-Stack Architecture & DevOps",
    image: "/images/team/sarah-chen.jpg",
    linkedin: "https://linkedin.com/in/sarahchen",
    email: "sarah.chen@celesticore.com",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Design",
    expertise: "UI/UX Design & Design Systems",
    image: "/images/team/michael-rodriguez.jpg",
    linkedin: "https://linkedin.com/in/michaelrodriguez",
    email: "michael.rodriguez@celesticore.com",
  },
  {
    name: "Emily Watson",
    role: "Lead Developer",
    expertise: "Frontend Development & React",
    image: "/images/team/emily-watson.jpg",
    linkedin: "https://linkedin.com/in/emilywatson",
    email: "emily.watson@celesticore.com",
  },
  {
    name: "David Kim",
    role: "Product Manager",
    expertise: "Product Strategy & User Research",
    image: "/images/team/david-kim.jpg",
    linkedin: "https://linkedin.com/in/davidkim",
    email: "david.kim@celesticore.com",
  },
  {
    name: "Lisa Martinez",
    role: "Head of Marketing",
    expertise: "Digital Marketing & Brand Strategy",
    image: "/images/team/lisa-martinez.jpg",
    linkedin: "https://linkedin.com/in/lisamartinez",
    email: "lisa.martinez@celesticore.com",
  },
];
