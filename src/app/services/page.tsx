import ServicesClient from "./ServicesClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Web Design, Development & SEO Sri Lanka",
  description: "Explore Sevora Lab's professional web development, UI/UX design, custom e-commerce stores, brand logo design, and SEO services based in Sri Lanka.",
  keywords: [
    "web development services sri lanka",
    "custom web app development matale",
    "logo designers matale",
    "professional drone videography sri lanka",
    "social media post design services",
    "seo services sri lanka",
    "creative branding services sri lanka",
    "ui ux design services matale",
    "website redesign services sri lanka",
    "nextjs development company",
    "ecommerce website development sri lanka",
    "professional photography services sri lanka"
  ],
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does a typical project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most projects take between 4 to 8 weeks depending on complexity."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer post-launch support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide various maintenance plans to keep your site updated and secure."
        }
      },
      {
        "@type": "Question",
        "name": "Can you redesign my existing website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We specialize in modernizing outdated websites for better performance."
        }
      },
      {
        "@type": "Question",
        "name": "Is your code SEO-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we implement advanced SEO best practices in every line of code we write."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicesClient />
    </>
  );
}
