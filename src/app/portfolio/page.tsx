import PortfolioClient from "./PortfolioClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work & Portfolio",
  description: "Browse the portfolio of Sevora Lab. Discover our custom web development projects, modern logo designs, professional posters, and high-quality videography projects in Sri Lanka.",
  keywords: [
    "sevora lab portfolio",
    "web design gallery sri lanka",
    "software projects portfolio",
    "brand designs gallery",
    "drone photography sri lanka"
  ],
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
