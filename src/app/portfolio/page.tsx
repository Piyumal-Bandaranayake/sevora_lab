import PortfolioClient from "./PortfolioClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Website Design & Web Development",
  description: "Browse Sevora Lab's portfolio of custom websites, online shops, and brand designs created for startups and small businesses in Sri Lanka.",
  keywords: [
    "sevora lab portfolio",
    "sevora lab projects",
    "web design gallery sri lanka",
    "software projects portfolio",
    "brand designs gallery",
    "drone photography sri lanka",
    "next.js website showcase",
    "custom web app examples",
    "corporate logo designs gallery",
    "commercial videography portfolio sri lanka"
  ],
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
