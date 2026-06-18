export interface PortfolioProject {
  title?: string;
  category: string;
  image: string;
  demoUrl?: string;
}

export const categories = ["Web Dev", "Logo", "Poster", "Videography"];

export const projects: PortfolioProject[] = [
  {
    title: "best Travel Sri Lanka",
    category: "Web Dev",
    image: "/images/besttravel.webp",
    demoUrl: "https://besttravelsrilanka.lk",
  },
  {
    title: "MicroGreens Lanka",
    category: "Web Dev",
    image: "/images/micro.webp",
    demoUrl: "https://microgreenslanka.lk",
  },
  {
    title: "Radha Lanka Tea",
    category: "Web Dev",
    image: "/images/radha.webp",
    demoUrl: "https://radhalankatea.com",
  },
  {
    title: "Christian Marage Preopsal",
    category: "Web Dev",
    image: "/images/marage.webp",
    demoUrl: "https://christianmarriageproposals.com",
  },
  {
    title: "Gate Automation",
    category: "Web Dev",
    image: "/images/gate.webp",
    demoUrl: "https://www.gateautomationuk.co.uk/",
  },
  {
    title: "Pet Nexues",
    category: "Web Dev",
    image: "/images/petNet.webp",
    demoUrl: "https://pet-nexues.vercel.app/",
  },
  // ============================
  // Logo & Branding Projects
  // ============================
  {
    category: "Logo",
    image: "/logos/1_2.webp",
  },
  {
    category: "Logo",
    image: "/logos/10_logo-01.webp",
  },
  {
    category: "Logo",
    image: "/logos/10_logo-02.webp",
  },
  {
    category: "Logo",
    image: "/logos/10_logo-08.webp",
  },
  {
    category: "Logo",
    image: "/logos/10_logo-09.webp",
  },
  {
    category: "Logo",
    image: "/logos/123-01.webp",
  },
];
