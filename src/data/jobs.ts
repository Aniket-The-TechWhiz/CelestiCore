export interface Job {
  title: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const jobs: Job[] = [
  {
    title: "Senior Full-Stack Developer",
    location: "Remote",
    type: "Full-time",
    salary: "₹66L - ₹1Cr",
    description:
      "We're looking for an experienced full-stack developer to join our core team and help build innovative web applications.",
    responsibilities: [
      "Design and develop scalable web applications",
      "Collaborate with cross-functional teams",
      "Write clean, maintainable code",
      "Mentor junior developers",
      "Participate in code reviews",
    ],
    requirements: [
      "5+ years of professional experience",
      "Strong knowledge of React and Node.js",
      "Experience with cloud platforms (AWS/Azure)",
      "Excellent problem-solving skills",
      "Strong communication abilities",
    ],
  },
  {
    title: "UI/UX Designer",
    location: "Hybrid",
    type: "Full-time",
    salary: "₹50L - ₹75L",
    description:
      "Join our design team to create beautiful, intuitive interfaces that delight users and drive business results.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Develop and maintain design systems",
      "Collaborate with developers on implementation",
      "Present design concepts to stakeholders",
    ],
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma and Adobe Creative Suite",
      "Strong portfolio showcasing design work",
      "Understanding of web and mobile design principles",
      "Excellent visual design skills",
    ],
  },
  {
    title: "DevOps Engineer",
    location: "On-site",
    type: "Contract",
    salary: "₹75L - ₹1.08Cr",
    description:
      "We need a DevOps expert to optimize our infrastructure, automate deployments, and ensure system reliability.",
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage cloud infrastructure (AWS/GCP)",
      "Monitor system performance and reliability",
      "Automate deployment processes",
      "Implement security best practices",
    ],
    requirements: [
      "4+ years of DevOps experience",
      "Strong knowledge of Docker and Kubernetes",
      "Experience with infrastructure as code (Terraform/CloudFormation)",
      "Proficiency in scripting (Python/Bash)",
      "Understanding of security and compliance",
    ],
  },
  {
    title: "Product Manager",
    location: "Remote",
    type: "Full-time",
    salary: "₹83L - ₹1.25Cr",
    description:
      "Lead product strategy and execution for our flagship products, working closely with engineering and design teams.",
    responsibilities: [
      "Define product vision and roadmap",
      "Gather and prioritize product requirements",
      "Work with engineering to deliver features",
      "Analyze product metrics and user feedback",
      "Coordinate product launches",
    ],
    requirements: [
      "5+ years of product management experience",
      "Strong technical background",
      "Excellent analytical skills",
      "Experience with agile methodologies",
      "Outstanding communication skills",
    ],
  },
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    salary: "₹58L - ₹83L",
    description:
      "Build responsive, performant web applications using modern frontend technologies and best practices.",
    responsibilities: [
      "Develop user-facing features",
      "Optimize applications for speed and scalability",
      "Collaborate with designers on implementation",
      "Write unit and integration tests",
      "Participate in agile ceremonies",
    ],
    requirements: [
      "3+ years of frontend development experience",
      "Expert knowledge of React and TypeScript",
      "Understanding of web performance optimization",
      "Experience with state management (Redux/Zustand)",
      "Strong CSS skills",
    ],
  },
  {
    title: "Data Scientist",
    location: "Hybrid",
    type: "Full-time",
    salary: "₹79L - ₹1.16Cr",
    description:
      "Leverage data to drive product decisions and build machine learning models that power our applications.",
    responsibilities: [
      "Analyze large datasets to extract insights",
      "Build and deploy machine learning models",
      "Create data visualizations and dashboards",
      "Collaborate with product teams on analytics",
      "Develop data pipelines",
    ],
    requirements: [
      "4+ years of data science experience",
      "Strong knowledge of Python and SQL",
      "Experience with ML frameworks (TensorFlow/PyTorch)",
      "Statistical analysis expertise",
      "Excellent communication skills",
    ],
  },
  {
    title: "Backend Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "₹62L - ₹91L",
    description:
      "Build robust, scalable backend systems and APIs that power our web and mobile applications.",
    responsibilities: [
      "Design and implement RESTful APIs",
      "Optimize database queries and performance",
      "Develop microservices architecture",
      "Ensure system security and data integrity",
      "Write comprehensive API documentation",
    ],
    requirements: [
      "4+ years of backend development experience",
      "Strong knowledge of Node.js or Python",
      "Experience with SQL and NoSQL databases",
      "Understanding of API design principles",
      "Familiarity with cloud services",
    ],
  },
  {
    title: "QA Automation Engineer",
    location: "Hybrid",
    type: "Full-time",
    salary: "₹54L - ₹79L",
    description:
      "Ensure the quality of our products by designing and implementing comprehensive automated testing strategies.",
    responsibilities: [
      "Develop and maintain automated test suites",
      "Create test plans and test cases",
      "Perform manual and automated testing",
      "Identify and document bugs",
      "Collaborate with developers on fixes",
    ],
    requirements: [
      "3+ years of QA automation experience",
      "Strong knowledge of testing frameworks (Selenium/Cypress)",
      "Experience with CI/CD integration",
      "Understanding of software development lifecycle",
      "Detail-oriented with analytical mindset",
    ],
  },
];
