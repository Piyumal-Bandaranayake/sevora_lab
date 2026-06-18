import { LucideIcon, Layout, Code2, Search, Palette, Camera, Image } from "lucide-react";

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
    title: "Videography & Dronagraphy",
    description: "High-quality video production and drone footage to showcase your projects from stunning angles.",
    Icon: Camera,
    image: "/images/services/videography.png",
    features: [
      "4K Cinematic Video Production",
      "Aerial Drone Video & Photography",
      "Professional Editing & Color Grading",
      "Custom Sound Design & Voiceovers"
    ]
  },
  {
    title: "Social Media Post Design",
    description: "Creative and engaging social media posts designed to capture attention and grow your audience.",
    Icon: Image,
    image: "/images/services/social-media.png",
    features: [
      "Custom-Branded Graphic Templates",
      "Campaign Assets & Content Planning",
      "Story & Video Reel Assets",
      "Engagement-Driven Copywriting"
    ]
  },
];

