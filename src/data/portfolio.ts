export interface PortfolioProject {
  title: string;
  category: string;
  image: string;
  tags: string[];
  demoUrl?: string;
}

export const categories = ["All", "Web Dev", "Logo", "Poster", "Videography"];

export const projects: PortfolioProject[] = [
  {
    title: "CafeX - Responsive Site",
    category: "Web Dev",
    image: "/project-1.png",
    tags: ["React", "Tailwind", "Next.js"],
    demoUrl: "https://demo.cafex.com",
  },
  {
    title: "TechCorp - Brand Identity",
    category: "Logo",
    image: "/project-2.png",
    tags: ["Vector", "Minimalist", "Typography"],
  },
  {
    title: "ClinicPro - Campaign Poster",
    category: "Poster",
    image: "/project-1.png",
    tags: ["Print", "Visual Art", "Marketing"],
    demoUrl: "https://demo.clinicpro.com",
  },
  {
    title: "Luxury Homes - Drone Footage",
    category: "Videography",
    image: "/project-2.png",
    tags: ["4K", "Aerial", "Cinematic"],
    demoUrl: "https://vimeo.com/demo",
  },
];
