"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Trophy,
  Calendar,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExpertiseCard } from "@/components/ExpertiseCard";
import { ProjectCard } from "@/components/ProjectCard";
import { services } from "@/data/services";
import { projects } from "@/data/portfolio";
import { BGPattern } from "@/components/ui/bg-pattern";

const LightRays = dynamic(() => import("@/components/LightRays"), {
  ssr: false,
});

const stats = [
  { label: "Successful Projects", value: "10+", icon: Trophy },
  { label: "Happy Clients", value: "10+", icon: Users },
  { label: "Years Experience", value: "2+", icon: Calendar },
];

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: delay,
    },
  }),
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 16,
    },
  },
};

export default function HomeClient() {
  const [isMounted, setIsMounted] = useState(false);
  const [animationDelay, setAnimationDelay] = useState(4.2);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      const hasRun = sessionStorage.getItem("preloader-run");
      if (hasRun) {
        setAnimationDelay(0.1);
      }
    }
  }, []);

  // Portfolio slideshow states
  const [activeCategory, setActiveCategory] = useState<"All" | "Web Dev" | "Logo">("All");
  const [shuffledProjects, setShuffledProjects] = useState<typeof projects>([]);



  // Shuffle projects on mount to mix Web Dev and Logo randomly
  useEffect(() => {
    const displayProjects = projects.filter(
      (p) => p.category === "Web Dev" || p.category === "Logo"
    );
    // Fisher-Yates or simple random sorting
    const shuffled = [...displayProjects].sort(() => Math.random() - 0.5);
    setShuffledProjects(shuffled);
  }, []);

  // Filter projects based on the active tab, using the shuffled list
  const filteredProjects = shuffledProjects.filter(p => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Web Dev") return p.category === "Web Dev";
    if (activeCategory === "Logo") return p.category === "Logo";
    return true;
  });

  // Reset index when changing category
  const handleCategoryChange = (category: "All" | "Web Dev" | "Logo") => {
    setActiveCategory(category);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#071A2B]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#071A2B] pt-24 pb-16">

          {/* WebGL Light Rays background effect */}
          <LightRays
            raysOrigin="top-center"
            raysColor="#1677FF"
            raysSpeed={1.2}
            lightSpread={1.2}
            rayLength={2.5}
            pulsating={true}
            followMouse={true}
            mouseInfluence={0.15}
            distortion={0.1}
          />

          {/* Background glow effects */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1677FF]/6 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#4DA3FF]/5 rounded-full blur-[120px]" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">

              {/* Text Content */}
              <motion.div
                variants={heroContainerVariants}
                custom={animationDelay}
                initial="hidden"
                animate={isMounted ? "visible" : "hidden"}
                className="space-y-6 text-center"
              >
                <motion.h1 
                  variants={heroItemVariants}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                >
                  Sevora
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677FF] to-[#B9E2FF]"> Lab</span>
                </motion.h1>

                <motion.p 
                  variants={heroItemVariants}
                  className="text-lg md:text-xl text-[#EAF4FF]/70 max-w-xl mx-auto leading-relaxed"
                >
                  We craft high-performance web applications and stunning digital experiences that elevate your brand and drive real results.
                </motion.p>

                <motion.div 
                  variants={heroItemVariants}
                  className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
                >
                  <Link href="/contact">
                    <Button size="lg" variant="accent" className="min-w-[180px] group">
                      Start Project
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button size="lg" variant="outline" className="min-w-[180px]">
                      View Work
                    </Button>
                  </Link>
                </motion.div>

                {/* Quick stats row */}
                <motion.div 
                  variants={heroItemVariants}
                  className="flex gap-8 md:gap-12 justify-center pt-6"
                >
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-white/40 uppercase tracking-wider mt-1">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

            </div>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none text-white/40"
          >
            <ChevronDown className="w-6 h-6 animate-bounce text-[#1677FF]" />
          </motion.div>
        </section>


        {/* Our Expertise Section */}
        <section className="py-24 relative overflow-hidden bg-[#071A2B] isolate">
          {/* Simple Background Design: Dot Matrix Pattern */}
           <BGPattern variant="dots" fill="rgba(255,255,255,0.08)" size={32} mask="fade-edges" />

          {/* Overlays */}
          <div className="absolute inset-0 z-[-2] bg-gradient-to-b from-[#071A2B] via-transparent to-[#071A2B] pointer-events-none" />
          <div className="absolute inset-0 z-[-2] bg-[#071A2B]/50 pointer-events-none" />

          {/* Ambient light glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-[#1677FF]/6 rounded-full blur-[150px] pointer-events-none z-0" />

          <div className="container mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <span className="text-[#1677FF] font-bold uppercase tracking-widest text-xs md:text-sm block animate-pulse">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677FF] via-[#4DA3FF] to-[#B9E2FF]">Expertise</span>
              </h2>
              <p className="text-base md:text-lg text-[#EAF4FF]/70 max-w-xl mx-auto">
                We specialize in creating bespoke web experiences and digital assets that drive growth and deliver outstanding results.
              </p>
            </div>

            {/* Grid Layout containing cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {services.map((service, index) => (
                <ExpertiseCard key={index} index={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="py-24 bg-[#0B2742]/40 border-y border-white/5 relative overflow-hidden isolate">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#1677FF]/5 rounded-full blur-[120px] pointer-events-none" />
          
          {/* Simple Background Design: Grid Pattern */}
          <BGPattern variant="grid" fill="rgba(255,255,255,0.06)" size={48} mask="fade-edges" />

          {/* Custom style for smooth infinite marquee */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marquee-portfolio {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-portfolio {
              animation: marquee-portfolio var(--marquee-duration, 25s) linear infinite;
            }
            .animate-marquee-portfolio:hover {
              animation-play-state: paused;
            }
          `}} />

          <div className="container mx-auto px-6 relative z-10">
            {/* Header: Title and controls */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              <div className="space-y-4">
                <span className="text-[#1677FF] font-bold uppercase tracking-widest text-xs block">Featured Projects</span>
                <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Look Our work</h3>
              </div>

              <div className="flex flex-wrap items-center gap-6 lg:gap-8">
                {/* Category Filter Tabs */}
                <div className="flex bg-white/[0.03] border border-white/5 rounded-full p-1 relative">
                  {(["All", "Web Dev", "Logo"] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className="relative px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all z-10 w-24 md:w-28 text-center"
                    >
                      <span className="relative z-10 transition-colors duration-300 text-white">
                        {cat === "Logo" ? "Logos" : cat === "Web Dev" ? "Web Dev" : "All Work"}
                      </span>
                      {activeCategory === cat && (
                        <motion.div
                          layoutId="active-portfolio-tab"
                          className="absolute inset-0 bg-[#1677FF] rounded-full shadow-[0_0_20px_rgba(22,119,255,0.25)]"
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Slideshow Carousel Viewport */}
            <div className="w-full overflow-hidden py-4 select-none relative">
              {/* Fade overlays at ends for a premium look */}
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#071A2B] via-[#071A2B]/40 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#071A2B] via-[#071A2B]/40 to-transparent z-10 pointer-events-none" />

              <div 
                className="flex gap-6 w-max animate-marquee-portfolio"
                style={{ "--marquee-duration": `${filteredProjects.length * 3.5}s` } as React.CSSProperties}
              >
                {/* Render the projects twice to support seamless looping */}
                {[...filteredProjects, ...filteredProjects].map((project, index) => (
                  <div
                    key={index}
                    className="w-[280px] sm:w-[360px] md:w-[420px] shrink-0"
                  >
                    <ProjectCard {...project} fullImage />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-16">
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="group min-w-[200px]">
                  View All Work
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden isolate">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0B2742] to-[#071A2B] border border-white/10 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
            >
              {/* Simple Background Design: Diagonal Lines Pattern */}
              <BGPattern variant="diagonal-stripes" fill="rgba(255,255,255,0.05)" size={24} mask="fade-edges" />

              {/* Overlays inside the box */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B2742] via-transparent to-[#071A2B]" />
                <div className="absolute inset-0 bg-[#071A2B]/40" />
              </div>

              <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">Ready to build something <br /> extraordinary?</h2>
                <p className="text-xl text-[#EAF4FF]/70">
                  Let's discuss your next big idea and bring it to life with precision engineering.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link href="/contact">
                    <Button size="lg" variant="accent" className="min-w-[200px]">
                      Get Free Quote
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="min-w-[200px]">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1677FF]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4DA3FF]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px]" />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
