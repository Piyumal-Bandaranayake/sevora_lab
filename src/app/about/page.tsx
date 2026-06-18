import AboutClient from "./AboutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Web Designers & Developers",
  description: "Meet Sevora Lab, a progressive web development and creative software company in Sri Lanka. Discover our mission, core values, and expert team.",
  keywords: [
    "about sevora lab",
    "sevora lab team",
    "sri lanka software development team",
    "next.js developer team",
    "web design team sri lanka",
    "boutique tech agency sri lanka",
    "software engineers matale",
    "expert web developers sri lanka",
    "tech startup sri lanka",
    "sevoralab about us"
  ],
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
