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
    image: "/images/besttravel.png",
    demoUrl: "https://besttravelsrilanka.lk",
  },
  {
    title: "MicroGreens Lanka",
    category: "Web Dev",
    image: "/images/micro.png",
    demoUrl: "https://microgreenslanka.lk",
  },
  {
    title: "Radha Lanka Tea",
    category: "Web Dev",
    image: "/images/radha.png",
    demoUrl: "https://radhalankatea.com",
  },
  {
    title: "Christian Marage Preopsal",
    category: "Web Dev",
    image: "/images/marage.png",
    demoUrl: "https://christianmarriageproposals.com",
  },
  {
    title: "Gate Automation",
    category: "Web Dev",
    image: "/images/gate.png",
    demoUrl: "https://www.gateautomationuk.co.uk/",
  },
  {
    title: "Pet Nexues",
    category: "Web Dev",
    image: "/images/petNet.png",
    demoUrl: "https://pet-nexues.vercel.app/",
  },
  // ============================
  // Logo & Branding Projects
  // ============================
  {
    category: "Logo",
    image: "/logos/1_2.jpg",
  },
  {
    category: "Logo",
    image: "/logos/10_logo-01.jpg",
  },
  {
    category: "Logo",
    image: "/logos/10_logo-02.jpg",
  },
  {
    category: "Logo",
    image: "/logos/10_logo-08.jpg",
  },
  {
    category: "Logo",
    image: "/logos/10_logo-09.jpg",
  },
  {
    category: "Logo",
    image: "/logos/123-01.jpg",
  },
];
