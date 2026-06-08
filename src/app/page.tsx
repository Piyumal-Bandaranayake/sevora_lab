import HomeClient from "./HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Sevora Lab",
    "image": "https://www.sevoralab.studio/og-image.png",
    "@id": "https://www.sevoralab.studio/#organization",
    "url": "https://www.sevoralab.studio",
    "telephone": "+94 77 575 2149",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Matale",
      "addressCountry": "LK"
    },
    "description": "Sevora Lab is a premier software development and digital design studio in Sri Lanka specializing in high-performance websites, custom web apps, and creative branding solutions.",
    "sameAs": [
      "https://www.instagram.com/sevoralab",
      "https://www.linkedin.com/company/sevora-lab"
    ],
    "priceRange": "$$"
  };

  return (
    <>
      {/* JSON-LD structured data for SEO — rendered server-side only */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
