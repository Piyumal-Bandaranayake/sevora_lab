import { LucideIcon, Layout, Code2, Search, Palette, Cpu } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  Icon: LucideIcon;
  image: string;
  features?: string[];
}

export const services: Service[] = [
  {
    title: "Website Design",
    description: "Visually stunning and user-centric designs that capture your brand essence and engage visitors.",
    Icon: Layout,
    image: "/images/services/web-design.png",
    features: [
      "Custom UI/UX & Responsive Layouts",
      "Interactive Prototypes & Wireframing",
      "Brand & Identity Integration",
      "User Research & Usability Testing"
    ]
  },
  {
    title: "Web Development",
    description: "High-performance, scalable web applications built with the latest technologies for maximum speed.",
    Icon: Code2,
    image: "/images/services/web-dev.png",
    features: [
      "React & Next.js Headless Applications",
      "Custom CMS Integration & APIs",
      "Secure E-Commerce & Payment Gateways",
      "SEO-Optimized & Speed-Tuned Code"
    ]
  },
  {
    title: "SEO Optimization",
    description: "Boost your search engine rankings and drive organic traffic with our data-driven SEO strategies.",
    Icon: Search,
    image: "/images/services/seo.png",
    features: [
      "Technical SEO Audits & Fixes",
      "Keyword Strategy & Competitor Analysis",
      "Content Strategy & Copywriting",
      "Advanced Traffic Analytics & Reporting"
    ]
  },
  {
    title: "Logo Design",
    description: "Memorable and unique logo designs that establish a strong brand identity for your business.",
    Icon: Palette,
    image: "/images/services/logo-design.png",
    features: [
      "Multiple Creative Design Concepts",
      "Vector Formats & Full Ownership Assets",
      "Comprehensive Brand Style Guides",
      "Social Media & Stationery Kits"
    ]
  },
  {
    title: "Automation Development",
    description: "Streamline operations and eliminate repetitive tasks with custom automated workflows, API integrations, and smart AI tools.",
    Icon: Cpu,
    image: "/images/services/automation.png",
    features: [
      "Custom API & Workflow Automations",
      "n8n & Zapier Process Pipelines",
      "AI Chatbot & Assistant Integration",
      "Data Sync & Automated Lead Routing"
    ]
  }
];
