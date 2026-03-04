# Data Files

This folder contains the data sources for various sections of the website, including products, team members, job listings, client success stories, testimonials, services, and FAQs.

## File Structure

- **products.ts** - Contains all product data and the Product interface
- **team.ts** - Contains all team member data and the TeamMember interface
- **jobs.ts** - Contains all job listings and the Job interface
- **caseStudies.ts** - Contains all client success stories and the CaseStudy interface
- **testimonials.ts** - Contains all client testimonials and the Testimonial interface
- **services.ts** - Contains all services offered and the Service interface
- **faqs.ts** - Contains Frequently Asked Questions and the FAQ interface

## How to Modify Data

All changes to these files are automatically reflected on their respective pages. Simply modify the data and save - no server restart needed in development mode!

---

## Products Data

Located in: `products.ts`

To add, edit, or remove products, modify the `products` array. All changes will be automatically reflected on the Products page.

### Product Interface

```typescript
{
  name: string;                    // Product name
  description: string;             // Short description (displayed on card)
  icon: LucideIcon;                // Icon from lucide-react library
  gradient: string;                // Tailwind gradient classes
  features: string[];              // Array of 3-4 key features
  demoUrl: string;                 // URL to product demo
  detailedDescription: string;     // Longer description (shown in modal)
  technicalFeatures: string[];     // Detailed technical features list
  pricing: string;                 // Pricing information
}
```

### Example: Adding a New Product

1. Import the icon (if not already imported):
```typescript
import { YourIcon } from "lucide-react";
```

2. Add your product to the `products` array:
```typescript
{
  name: "Your Product Name",
  description: "Brief description of your product",
  icon: YourIcon,
  gradient: "from-blue-500 to-purple-500",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  demoUrl: "https://demo.yourproduct.com",
  detailedDescription: "Detailed description explaining what your product does...",
  technicalFeatures: [
    "Technical feature 1",
    "Technical feature 2",
    "Technical feature 3",
  ],
  pricing: "Starting at ₹X,XXX/month",
}
```

---

## Team Members Data

Located in: `team.ts`

To add, edit, or remove team members, modify the `teamMembers` array. All changes will be automatically reflected on the Company page's "Meet the Team" section.

### TeamMember Interface

```typescript
{
  name: string;        // Full name of team member
  role: string;        // Job title/position
  expertise: string;   // Area of expertise
  image?: string;      // Optional: URL to profile image
  linkedin?: string;   // Optional: LinkedIn profile URL  
  email?: string;      // Optional: Email address
}
```

### Example: Adding a New Team Member

Add to the `teamMembers` array:
```typescript
{
  name: "John Doe",
  role: "Senior Engineer",
  expertise: "Cloud Infrastructure & DevOps",
  image: "/images/team/john-doe.jpg",
  linkedin: "https://linkedin.com/in/johndoe",
  email: "john.doe@celesticore.com",
}
```

**Note:** All fields except `name`, `role`, and `expertise` are optional. If `image` is not provided or fails to load, the initials will be displayed in a gradient circle. If `linkedin` or `email` are not provided, those social links won't appear.

### Example: Editing a Team Member

Simply update any field in the existing team member object:
```typescript
{
  name: "Alex Johnson",
  role: "CEO & Co-Founder",
  expertise: "Business Strategy & Innovation",  // ← Updated
  linkedin: "https://linkedin.com/in/alexjohnson-new",  // ← Updated
}
```

### Example: Removing a Team Member

Delete the entire object from the `teamMembers` array.

### Image Guidelines

- **Format:** Use JPG, PNG, or WebP formats
- **Size:** Recommended 400x400px or larger (square ratio)
- **Location:** Place images in `/public/images/team/` folder
- **Path:** Reference as `/images/team/filename.jpg` (starting with `/`)
- **Fallback:** If image fails to load, initials will display automatically

---

## Jobs Data

Located in: `jobs.ts`

To add, edit, or remove job listings, modify the `jobs` array. All changes will be automatically reflected on the Jobs page.

### Job Interface

```typescript
{
  title: string;              // Job title
  location: string;           // "Remote", "Hybrid", or "On-site"
  type: string;              // "Full-time", "Part-time", or "Contract"
  salary: string;            // Salary range
  description: string;       // Brief job description
  responsibilities: string[]; // List of job responsibilities
  requirements: string[];     // List of job requirements
}
```

### Example: Adding a New Job

Add to the `jobs` array:
```typescript
{
  title: "Mobile App Developer",
  location: "Remote",
  type: "Full-time",
  salary: "₹60L - ₹90L",
  description: "Build beautiful, high-performance mobile applications for iOS and Android.",
  responsibilities: [
    "Develop cross-platform mobile applications",
    "Collaborate with design team on UI/UX",
    "Write clean, maintainable code",
    "Optimize app performance",
  ],
  requirements: [
    "3+ years of mobile development experience",
    "Strong knowledge of React Native or Flutter",
    "Experience with native iOS/Android development",
    "Understanding of mobile design patterns",
  ],
}
```

### Example: Editing a Job

Update any field in the existing job object:
```typescript
{
  title: "Senior Full-Stack Developer",
  salary: "₹70L - ₹1.1Cr",  // ← Updated salary range
  // ... other fields
}
```

### Example: Removing a Job

Delete the entire job object from the `jobs` array.

### Job Location Options
- **Remote** - Fully remote position
- **Hybrid** - Mix of remote and office work
- **On-site** - Full-time office work

### Job Type Options
- **Full-time** - Regular full-time employment
- **Part-time** - Part-time position
- **Contract** - Contract/freelance work

---

## Client Success Stories (Case Studies) Data

Located in: `caseStudies.ts`

To add, edit, or remove client success stories, modify the `caseStudies` array. All changes will be automatically reflected on the Homepage's "Client Success Stories" section.

### CaseStudy Interface

```typescript
{
  company: string;           // Client company name
  industry: string;          // Industry sector (e.g., "Fintech", "Healthcare")
  challenge: string;         // The client's challenge/problem
  solution: string;          // How CelestiCore solved it
  results: CaseStudyResult[]; // Array of measurable results
  color: string;             // Tailwind gradient classes for styling
}
```

### CaseStudyResult Interface

```typescript
{
  icon: LucideIcon;  // Icon from lucide-react (e.g., TrendingUp, Zap)
  value: string;     // Metric value (e.g., "300%", "50K+")
  label: string;     // Description of the metric (e.g., "User Growth")
}
```

### Example: Adding a New Case Study

Add to the `caseStudies` array:
```typescript
{
  company: "TechStartup",
  industry: "SaaS",
  challenge: "Needed to scale rapidly for growing user base",
  solution: "Built microservices architecture with automated scaling",
  results: [
    { icon: TrendingUp, value: "10x", label: "Scalability" },
    { icon: Zap, value: "99.99%", label: "Uptime" },
    { icon: Users, value: "1M+", label: "Users Served" },
  ],
  color: "from-orange-500 to-red-500",
}
```

### Example: Editing a Case Study

Update any field in the existing case study object:
```typescript
{
  company: "FinanceFlow",
  challenge: "Modernization of legacy banking infrastructure",  // ← Updated
  results: [
    { icon: TrendingUp, value: "400%", label: "User Growth" },  // ← Updated value
    // ... other results
  ],
}
```

### Example: Removing a Case Study

Delete the entire case study object from the `caseStudies` array.

### Available Icons for Results

Common icons used in case study results:
- `TrendingUp` - For growth metrics
- `Zap` - For speed/performance metrics
- `Shield` - For security/reliability metrics
- `Users` - For user-related metrics
- `Award` - For revenue/achievement metrics

### Industry Examples
- **Fintech** - Financial technology
- **Healthcare** - Medical and health services
- **E-commerce** - Online retail
- **SaaS** - Software as a Service
- **Education** - EdTech platforms
- **Real Estate** - Property tech

---

## Client Testimonials Data

Located in: `testimonials.ts`

To add, edit, or remove client testimonials, modify the `testimonials` array. All changes will be automatically reflected on the Homepage's "What Our Clients Say" section.

### Testimonial Interface

```typescript
{
  name: string;       // Client's full name
  role: string;       // Job title and company (e.g., "CEO, TechStart Inc.")
  content: string;    // Testimonial text/quote
  rating: number;     // Rating out of 5 (typically 5 for client testimonials)
  image?: string;     // Optional: URL to client's profile image
  company?: string;   // Optional: Company name (if separate from role)
}
```

### Example: Adding a New Testimonial

Add to the `testimonials` array:
```typescript
{
  name: "John Smith",
  role: "CTO, Innovation Labs",
  content: "CelestiCore delivered an exceptional solution that transformed our business operations. Their technical expertise and commitment to quality are outstanding.",
  rating: 5,
  image: "/images/testimonials/john-smith.jpg",
}
```

### Example: Editing a Testimonial

Update any field in the existing testimonial object:
```typescript
{
  name: "Sarah Johnson",
  role: "CEO, TechStart Inc.",
  content: "Updated testimonial text...",  // ← Updated
  rating: 5,
}
```

### Example: Removing a Testimonial

Delete the entire testimonial object from the `testimonials` array.

### Rating Guidelines

- Always use **5** for positive client testimonials
- Rating determines the number of stars displayed
- Stars are displayed in green (#2FFFA3 color)

### Best Practices

- **Keep it concise**: Testimonials should be 1-3 sentences
- **Be specific**: Mention specific results or benefits when possible
- **Include role**: Always specify the client's title and company
- **Authenticity**: Use real client feedback (with permission)
- **Variety**: Mix different industries and use cases

### Image Guidelines

- **Format:** Use JPG, PNG, or WebP formats
- **Size:** Recommended 200x200px (square ratio)
- **Location:** Place images in `/public/images/testimonials/` folder
- **Path:** Reference as `/images/testimonials/filename.jpg`

---

## Services Data

Located in: `services.ts`

To add, edit, or remove services, modify the `services` array. All changes will be automatically reflected on the Services page.

### Service Interface

```typescript
{
  icon: LucideIcon;        // Icon from lucide-react
  title: string;           // Service name
  description: string;     // Service description
  features: string[];      // List of key features/benefits
  gradient: string;        // Tailwind gradient classes
}
```

### Example: Adding a New Service

Add to the `services` array:
```typescript
{
  icon: Code,
  title: "API Development",
  description: "Build robust, scalable APIs for your applications.",
  features: [
    "RESTful design",
    "GraphQL support",
    "Authentication & authorization",
    "Rate limiting",
    "Documentation",
  ],
  gradient: "from-green-500 to-teal-500",
}
```

### Example: Editing a Service

Update any field in the existing service object:
```typescript
{
  icon: Globe,
  title: "Website Development",
  description: "Updated description here...",  // ← Updated
  features: [
    "Custom UI",
    "Mobile-first layout",
    "High-speed performance",
    "SEO optimization",
    "CMS options",
    "Analytics integration",  // ← New feature
  ],
}
```

### Example: Removing a Service

Delete the entire service object from the `services` array.

---

## Frequently Asked Questions (FAQ) Data

Located in: `faqs.ts`

To add, edit, or remove FAQs, modify the `faqs` array. All changes will be automatically reflected on the Services page's FAQ section.

### FAQ Interface

```typescript
{
  question: string;  // The FAQ question
  answer: string;    // The FAQ answer/response
}
```

### Example: Adding a New FAQ

Add to the `faqs` array:
```typescript
{
  question: "What is your response time for support tickets?",
  answer: "We aim to respond to all support tickets within 24 hours during business days. Enterprise clients receive priority support with 4-hour response time.",
}
```

### Example: Editing a FAQ

Update any field in the existing FAQ object:
```typescript
{
  question: "What technologies do you specialize in?",  // ← Updated question
  answer: "We specialize in modern tech stacks including React, Next.js, Node.js, Python, AWS, Docker, and more. We choose the best technology based on your specific project requirements.",  // ← Updated answer
}
```

### Example: Removing a FAQ

Delete the entire FAQ object from the `faqs` array.

### Best Practices for FAQs

- **Clear Questions:** Write questions as users would ask them
- **Concise Answers:** Keep answers informative but brief (2-3 sentences)
- **Logical Order:** Arrange FAQs from most common to least common
- **Avoid Jargon:** Use simple language that non-technical users understand
- **Actionable:** Provide clear next steps or contact information when needed
- **Keep Updated:** Regularly review and update FAQs based on customer feedback

---

## Available Icons (for Products)

You can use any icon from the [Lucide React](https://lucide.dev/icons/) library. Some commonly used icons:

- `Globe` - For cloud/web products
- `TrendingUp` - For analytics products
- `Zap` - For performance/speed products
- `Shield` - For security products
- `Code` - For developer tools
- `Users` - For collaboration tools

## Gradient Options (for Products)

Use Tailwind's gradient classes. Examples:
- `from-blue-500 to-cyan-500`
- `from-purple-500 to-pink-500`
- `from-orange-500 to-amber-500`
- `from-emerald-500 to-teal-500`
- `from-rose-500 to-red-500`
- `from-[#A020F0] to-purple-600` (custom colors)

---

## Notes

- Changes to these files are automatically hot-reloaded in development mode
- No need to restart the server after making changes
- All items are displayed in the order they appear in their respective arrays
- Make sure to follow the TypeScript interfaces for type safety
