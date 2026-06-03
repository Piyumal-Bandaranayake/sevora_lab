import ServicesClient from "./ServicesClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Custom Web Design & Development",
  description: "Sevora Lab offers premium web design, custom web application development, SEO optimization, brand logo design, videography, and social media design services in Sri Lanka.",
  keywords: [
    "web development services sri lanka",
    "custom web app development colombo",
    "logo designers colombo",
    "professional drone videography sri lanka",
    "social media post design services",
    "seo services sri lanka"
  ],
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
