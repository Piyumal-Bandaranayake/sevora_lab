"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Sparkles,
} from "lucide-react";
import { BGPattern } from "@/components/ui/bg-pattern";

interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Mobile & Desktop" | "Cloud & DevOps" | "Design & Tools";
  description: string;
  badge?: string;
}

const techCategories = [
  "All",
  "Frontend",
  "Backend",
  "Mobile & Desktop",
  "Cloud & DevOps",
  "Design & Tools",
] as const;

const technologies: TechItem[] = [
  // Frontend
  {
    name: "Next.js 15",
    category: "Frontend",
    description: "Server-side rendering, App Router, and dynamic web application architecture.",
    badge: "Primary Framework",
  },
  {
    name: "React 19",
    category: "Frontend",
    description: "Component-driven UI development with modern concurrent rendering capabilities.",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    description: "Strongly typed JavaScript for scalable, robust, and maintainable codebases.",
    badge: "Core Standard",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first CSS framework for responsive, pixel-perfect custom design systems.",
  },
  {
    name: "Framer Motion",
    category: "Frontend",
    description: "Production-ready motion library for fluid web animations and interactions.",
  },

  // Backend
  {
    name: "Node.js & Express",
    category: "Backend",
    description: "High-performance JavaScript runtime for scalable server APIs and microservices.",
  },
  {
    name: "Python & FastAPI",
    category: "Backend",
    description: "Modern, fast backend framework for AI integrations and data processing pipelines.",
  },
  {
    name: "PostgreSQL & Prisma",
    category: "Backend",
    description: "Relational database systems with type-safe ORM for enterprise data integrity.",
    badge: "Database",
  },
  {
    name: "MongoDB & Redis",
    category: "Backend",
    description: "Document databases and in-memory caching layers for lightning-fast performance.",
  },
  {
    name: "GraphQL & REST APIs",
    category: "Backend",
    description: "Structured data querying and clean interface specifications for web and mobile clients.",
  },

  // Mobile & Desktop
  {
    name: "React Native & Expo",
    category: "Mobile & Desktop",
    description: "Cross-platform iOS and Android app development with native component performance.",
    badge: "Cross-Platform",
  },
  {
    name: "Flutter",
    category: "Mobile & Desktop",
    description: "Google's UI toolkit for crafting natively compiled multi-platform applications.",
  },
  {
    name: "Electron",
    category: "Mobile & Desktop",
    description: "Desktop application framework powering cross-platform Windows, Mac, and Linux apps.",
  },

  // Cloud & DevOps
  {
    name: "AWS & Vercel",
    category: "Cloud & DevOps",
    description: "Scalable cloud infrastructure, edge computing networks, and instant global deployments.",
    badge: "Cloud Host",
  },
  {
    name: "Docker & Kubernetes",
    category: "Cloud & DevOps",
    description: "Containerization and orchestration for reliable, automated release pipelines.",
  },
  {
    name: "CI/CD & GitHub Actions",
    category: "Cloud & DevOps",
    description: "Automated testing, continuous integration, and seamless zero-downtime shipping.",
  },

  // Design & Tools
  {
    name: "Figma & UI/UX Design",
    category: "Design & Tools",
    description: "Interactive wireframes, design systems, and pixel-perfect prototype creation.",
    badge: "UI/UX",
  },
  {
    name: "AI & LLM Integration",
    category: "Design & Tools",
    description: "OpenAI, Claude, and custom AI agents embedded directly into business workflows.",
    badge: "AI Powered",
  },
];

const categoryIcons = {
  Frontend: Code2,
  Backend: Database,
  "Mobile & Desktop": Smartphone,
  "Cloud & DevOps": Cloud,
  "Design & Tools": Palette,
};

export function TechSection() {
  const [activeCategory, setActiveCategory] = useState<(typeof techCategories)[number]>("All");

  const filteredTech =
    activeCategory === "All"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section className="py-24 relative overflow-hidden bg-[#020617] border-t border-white/5 isolate">
      {/* Background design pattern */}
      <BGPattern variant="grid" fill="rgba(255,255,255,0.04)" size={36} mask="fade-edges" />

      {/* Ambient glowing highlights */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[350px] bg-[#6366F1]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs md:text-sm font-semibold uppercase tracking-widest backdrop-blur-md"
          >
            <Sparkles size={14} />
            <span>Tech Stack & Tools</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight"
          >
            Powered By <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">Modern Tech</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            We use battle-tested frameworks, cloud infrastructure, and modern tooling to craft fast, scalable, and secure digital platforms.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white/[0.03] border border-white/10 rounded-2xl p-1.5 max-w-4xl">
            {techCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                    isActive ? "text-white" : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="relative z-10">{cat}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-tech-tab"
                      className="absolute inset-0 bg-[#3B82F6] rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => {
              const CategoryIcon = categoryIcons[tech.category] || Code2;
              return (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#3B82F6]/40 hover:bg-white/[0.04] transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300">
                          <CategoryIcon size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                          {tech.name}
                        </h3>
                      </div>
                      {tech.badge && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {tech.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs md:text-sm text-white/50 group-hover:text-white/70 transition-colors leading-relaxed">
                      {tech.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40">
                    <span className="font-semibold uppercase tracking-wider">{tech.category}</span>
                    <span className="text-blue-400/80 group-hover:text-blue-400 transition-colors">Enterprise Ready</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
