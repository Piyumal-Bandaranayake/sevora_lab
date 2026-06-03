import { LucideIcon, Layout, Code2, Search, Palette, Camera, Image } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Website Design",
    description: "Visually stunning and user-centric designs that capture your brand essence and engage visitors.",
    Icon: Layout,
  },
  {
    title: "Web Development",
    description: "High-performance, scalable web applications built with the latest technologies for maximum speed.",
    Icon: Code2,
  },
  {
    title: "SEO Optimization",
    description: "Boost your search engine rankings and drive organic traffic with our data-driven SEO strategies.",
    Icon: Search,
  },
  {
    title: "Logo Design",
    description: "Memorable and unique logo designs that establish a strong brand identity for your business.",
    Icon: Palette,
  },
  {
    title: "Videography & Dronagraphy",
    description: "High-quality video production and drone footage to showcase your projects from stunning angles.",
    Icon: Camera,
  },
  {
    title: "Social Media Post Design",
    description: "Creative and engaging social media posts designed to capture attention and grow your audience.",
    Icon: Image,
  },
];
