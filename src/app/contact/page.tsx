import ContactClient from "./ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote",
  description: "Get in touch with Sevora Lab. Discuss your next project, request a free quote, or consult about our software development, design, and branding solutions in Sri Lanka.",
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
