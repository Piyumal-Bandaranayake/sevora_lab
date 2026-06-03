import ContactClient from "./ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote",
  description: "Get in touch with Sevora Lab. Discuss your next project, request a free quote, or consult about our software development, design, and branding solutions in Sri Lanka.",
  keywords: [
    "contact sevora lab",
    "hire web developers sri lanka",
    "hire next.js developers colombo",
    "web development consultation",
    "software company colombo contact"
  ],
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
