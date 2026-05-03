"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Zap,
  ArrowRight,
  Users,
  Trophy,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { services } from "@/data/services";
import { projects } from "@/data/portfolio";
import { TechSection } from "@/components/TechSection";

const Robot3D = dynamic(() => import("@/components/Robot3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] md:h-[550px] lg:h-[600px] flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-[#3B82F6] border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const stats = [
  { label: "Successful Projects", value: "10+", icon: Trophy },
  { label: "Happy Clients", value: "10+", icon: Users },
  { label: "Years Experience", value: "2+", icon: Calendar },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#020617] py-20">
          {/* Background glow effects */}
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#6366F1]/5 rounded-full blur-[100px]" />

          {/* White spotlight behind the robot */}
          <div
            className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.07] pointer-events-none"
            style={{
              background: "radial-gradient(circle, #ffffff 0%, #ffffff 20%, transparent 70%)",
            }}
          />
          <div
            className="absolute top-[40%] right-[20%] -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-[0.04] pointer-events-none blur-[40px]"
            style={{
              background: "radial-gradient(circle, #ffffff 0%, transparent 60%)",
            }}
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left Side – Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="space-y-6 text-center lg:text-left order-2 lg:order-1"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-sm font-medium">
                  <Zap size={14} />
                  Building Digital Experiences
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Sevora
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#6366F1]"> Lab</span>
                </h1>

                <p className="text-lg md:text-xl text-white/60 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  We craft high-performance web applications and stunning digital experiences that elevate your brand and drive real results.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                  <Button size="lg" variant="accent" className="min-w-[180px] group">
                    Start Project
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="min-w-[180px]">
                    View Work
                  </Button>
                </div>

                {/* Quick stats row */}
                <div className="flex gap-8 justify-center lg:justify-start pt-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center lg:text-left">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Side – 3D Robot */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <Robot3D />
              </motion.div>

            </div>
          </div>
        </section>


        {/* Services Teaser */}
        <section className="py-24 relative overflow-hidden bg-[#020617]">
          {/* Background image with fixed attachment */}
          <div 
            className="absolute inset-0 z-0 opacity-[0.3] bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/service.jpg')" }}
          />
          
          {/* Overlays */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
            <div className="absolute inset-0 bg-[#020617]/60" />
          </div>

          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[#3B82F6]/10 rounded-full blur-[180px] z-0" />
          
          {/* Large background text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0 opacity-[0.08] rotate-[-10deg]">
            <span 
              className="text-[12rem] md:text-[20rem] font-black leading-none tracking-tighter uppercase whitespace-nowrap" 
              style={{ 
                WebkitTextStroke: '2px white',
                color: 'transparent'
              }}
            >
              Services
            </span>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-[#3B82F6] font-bold uppercase tracking-widest text-sm">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white">Tailored Digital Solutions</h3>
              <p className="text-lg text-white/60">
                We specialize in creating bespoke web experiences that drive growth and deliver results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <TechSection />

        {/* Portfolio Preview */}
        <section className="py-24 bg-[#0A1128]/40 border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-5xl md:text-7xl font-bold text-white">Look Our work</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {projects.slice(0, 3).map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
            
            <div className="flex justify-center">
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
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0A1128] to-[#020617] border border-white/10 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
            >
              {/* Background image with fixed attachment inside the box */}
              <div 
                className="absolute inset-0 z-0 opacity-[0.4] bg-fixed bg-cover bg-center"
                style={{ backgroundImage: "url('/cta-bg.png')" }}
              />
              
              {/* Overlays inside the box */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-transparent to-[#020617]" />
                <div className="absolute inset-0 bg-[#020617]/40" />
              </div>

              <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">Ready to build something <br /> extraordinary?</h2>
                <p className="text-xl text-white/60">
                  Let's discuss your next big idea and bring it to life with precision engineering.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" variant="accent" className="min-w-[200px]">
                    Get Free Quote
                  </Button>
                  <Button size="lg" variant="outline" className="min-w-[200px]">
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px]" />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
