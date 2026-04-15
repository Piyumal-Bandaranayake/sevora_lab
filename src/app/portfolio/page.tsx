"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/Button";

const categories = ["All", "Design", "Development", "E-commerce"];

const projects = [
  {
    title: "CafeX - Responsive Site",
    category: "Design",
    image: "/project-1.png",
    tags: ["React", "Tailwind", "Next.js"],
  },
  {
    title: "TechCorp - E-commerce",
    category: "E-commerce",
    image: "/project-2.png",
    tags: ["Shopify", "Custom API", "Node.js"],
  },
  {
    title: "ClinicPro - Booking System",
    category: "Development",
    image: "/project-1.png",
    tags: ["Next.js", "Supabase", "Zod"],
  },
  {
    title: "Luxury Homes - Property",
    category: "Design",
    image: "/project-2.png",
    tags: ["Framer", "UI/UX", "WebGL"],
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Header />
      
      <main className="flex-1 pt-32 pb-20">
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
              Our <span className="text-[#3B82F6] underline decoration-4 underline-offset-8">Digital Legacy</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Explore our portfolio of cutting-edge web applications and digital experiences crafted for top-tier Singaporean brands.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="container mx-auto px-6 mb-16">
          <div className="flex flex-wrap gap-4 items-center border-b pb-8 border-white/5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? "bg-[#3B82F6] text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]" 
                    : "glass text-white/50 hover:bg-white/5 border-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.title} 
                  {...project} 
                  onViewDetails={() => alert("Case study coming soon!")}
                />
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-t from-[#0A1128] to-[#020617] py-24 rounded-[3rem] container mx-auto mb-24 border border-white/5 shadow-2xll relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#3B82F6]/5 blur-[120px] rounded-full" />
          <div className="text-center text-white px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Have a similar project in mind?</h2>
            <p className="text-white/50 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              We're always excited to take on new challenges and build something that pushes the boundaries of the possible.
            </p>
            <Button size="lg" variant="accent">
              Let's Talk Strategy
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
