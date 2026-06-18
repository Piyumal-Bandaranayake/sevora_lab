export interface PortfolioProject {
  title?: string;
  category: string;
  image: string;
  demoUrl?: string;
  alt?: string;
}

export const categories = ["Web Dev", "Logo", "Poster", "Videography"];

export const projects: PortfolioProject[] = [
  {
    title: "best Travel Sri Lanka",
    category: "Web Dev",
    image: "/images/besttravel.webp",
    demoUrl: "https://besttravelsrilanka.lk",
    alt: "Tour and travel website design portfolio case study for Sri Lankan tourism company",
  },
  {
    title: "MicroGreens Lanka",
    category: "Web Dev",
    image: "/images/micro.webp",
    demoUrl: "https://microgreenslanka.lk",
    alt: "E-commerce agriculture website development for local green products",
  },
  {
    title: "Radha Lanka Tea",
    category: "Web Dev",
    image: "/images/radha.webp",
    demoUrl: "https://radhalankatea.com",
    alt: "Corporate profile website and logo branding project for local Ceylon tea business",
  },
  {
    title: "Christian Marage Preopsal",
    category: "Web Dev",
    image: "/images/marage.webp",
    demoUrl: "https://christianmarriageproposals.com",
    alt: "Matrimonial portal website design and development with user registration system",
  },
  {
    title: "Gate Automation",
    category: "Web Dev",
    image: "/images/gate.webp",
    demoUrl: "https://www.gateautomationuk.co.uk/",
    alt: "Service booking website design for automated gates security business",
  },
  {
    title: "Pet Nexues",
    category: "Web Dev",
    image: "/images/petNet.webp",
    demoUrl: "https://pet-nexues.vercel.app/",
    alt: "Online pet community web application development with responsive features",
  },
  // ============================
  // Logo & Branding Projects
  // ============================
  {
    category: "Logo",
    image: "/logos/1_2.webp",
    alt: "Custom business logo design symbol designed by Sevora Lab",
  },
  {
    category: "Logo",
    image: "/logos/10_logo-01.webp",
    alt: "Creative company brand identity and logo concept in Sri Lanka",
  },
  {
    category: "Logo",
    image: "/logos/10_logo-02.webp",
    alt: "Minimalist vector business logo design by Colombo design studio",
  },
  {
    category: "Logo",
    image: "/logos/10_logo-08.webp",
    alt: "Modern branding logo design sample for local startups",
  },
  {
    category: "Logo",
    image: "/logos/10_logo-09.webp",
    alt: "Creative professional typography logo design artwork",
  },
  {
    category: "Logo",
    image: "/logos/123-01.webp",
    alt: "Unique abstract brand mark and logo design concept",
  },
];
