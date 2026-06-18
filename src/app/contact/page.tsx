import ContactClient from "./ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Hire Web Designers in Sri Lanka",
  description: "Ready to start your project? Get a free quote for website design, development, or SEO services from Sevora Lab in Sri Lanka. Contact us today.",
  keywords: [
    "contact sevora lab",
    "sevora lab phone number",
    "sevora lab email",
    "hire web developers sri lanka",
    "hire next.js developers matale",
    "web development consultation sri lanka",
    "software company matale contact",
    "request website quote sri lanka",
    "get a free quote web development"
  ],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
