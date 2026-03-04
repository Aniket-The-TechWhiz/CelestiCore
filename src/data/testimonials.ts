export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;  // Optional: URL to client's profile image
  company?: string; // Optional: Company name (if different from role)
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "CelestiCore transformed our vision into reality. Their team's expertise and dedication resulted in a product that exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCo",
    content:
      "Working with CelestiCore was a game-changer. They delivered a scalable solution on time and within budget. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, DesignHub",
    content:
      "The UI/UX design services from CelestiCore elevated our brand. Their attention to detail and user-centric approach is unmatched.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "CTO, StartupLabs",
    content:
      "Exceptional quality and professionalism. CelestiCore helped us scale our platform to handle millions of users seamlessly.",
    rating: 5,
  },
];
