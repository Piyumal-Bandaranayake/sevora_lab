import AboutClient from "./AboutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Sevora Lab, a premier software development and digital design studio based in Sri Lanka. Meet our team and explore our values of innovation, precision, and trust.",
  keywords: [
    "about sevora lab",
    "sri lanka software development team",
    "next.js developer team",
    "web design team sri lanka",
    "boutique tech agency"
  ],
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
