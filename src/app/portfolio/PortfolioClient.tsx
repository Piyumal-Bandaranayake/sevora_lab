"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/Button";
import { projects, categories } from "@/data/portfolio";
import { BGPattern } from "@/components/ui/bg-pattern";

export default function PortfolioClient() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter.toLowerCase() === "all" 
    ? projects 
    : projects.filter(p => p.category.trim().toLowerCase() === filter.trim().toLowerCase());

  return (
    <div className="flex flex-col min-h-screen bg-[#071A2B] relative overflow-hidden isolate">
      {/* Background design: grid */}
      <BGPattern variant="grid" fill="rgba(255,255,255,0.06)" size={48} mask="fade-edges" />
      {/* Dark overlay to blend in */}
      <div className="absolute inset-0 z-[-2] bg-gradient-to-b from-[#071A2B]/50 via-transparent to-[#071A2B] pointer-events-none" />

      <Header />
      
      <main className="flex-1 pt-32 pb-20 relative z-10">
        <section className="container mx-auto px-6 mb-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
              Our <span className="text-[#1677FF] underline decoration-4 underline-offset-8">Digital Legacy</span>
            </h1>
            <p className="text-xl text-[#EAF4FF]/70 leading-relaxed">
              Explore our portfolio of cutting-edge web applications and digital experiences crafted for top-tier brands.
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
                  filter.toLowerCase() === cat.toLowerCase() 
                    ? "bg-[#1677FF] text-white shadow-[0_0_20px_rgba(22,119,255,0.25)]" 
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
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.image} 
                  {...project} 
                />
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-t from-[#0B2742] to-[#071A2B] py-24 rounded-[3rem] container mx-auto mb-24 border border-white/5 shadow-2xl relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#1677FF]/5 blur-[120px] rounded-full" />
          <div className="text-center text-white px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Have a similar project in mind?</h2>
            <p className="text-[#EAF4FF]/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
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
