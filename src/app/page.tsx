"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Code2, 
  Layout, 
  Smartphone, 
  BarChart3, 
  Globe, 
  Zap,
  ArrowRight,
  CheckCircle2,
  Users,
  Trophy,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";

const stats = [
  { label: "Successful Projects", value: "150+", icon: Trophy },
  { label: "Happy Clients", value: "80+", icon: Users },
  { label: "Years Experience", value: "10+", icon: Calendar },
];

const servicesTeaser = [
  {
    title: "Website Design",
    description: "Visually stunning and user-centric designs that capture your brand essence and engage visitors.",
    Icon: Layout,
  },
  {
    title: "Web Development",
    description: "High-performance, scalable web applications built with the latest technologies for maximum speed.",
    Icon: Code2,
  },
  {
    title: "Mobile Solutions",
    description: "Fully responsive designs that provide an optimal viewing experience across all mobile devices.",
    Icon: Smartphone,
  },
];

const projects = [
  {
    title: "CafeX - Responsive Site",
    category: "Design & Development",
    image: "/project-1.png",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "TechCorp - E-commerce",
    category: "E-commerce",
    image: "/project-2.png",
    tags: ["React", "Custom API", "Stripe"],
  },
  {
    title: "ClinicPro - Booking",
    category: "SaaS",
    image: "/project-1.png",
    tags: ["Supabase", "TypeScript", "Dashboard"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <Image
            src="/hero-bg.png"
            alt="Hero Background"
            fill
            className="object-cover opacity-25"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] font-bold text-sm tracking-wide border border-[#3B82F6]/20">
                <Globe size={18} />
                <span>Modern Web Solutions for Singapore Businesses</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-tight">
                Empowering Digital <span className="text-[#3B82F6] underline decoration-4 underline-offset-8">Transformation</span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="accent">
                  Start Project <ArrowRight className="ml-2" />
                </Button>
                <Button size="lg" variant="outline">
                  View Our Work
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Subtle Glows */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-800/10 rounded-full blur-[120px] -z-10" />
        </section>

        {/* Stats Section */}
        <section className="py-20 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="space-y-2 group"
                >
                  <div className="flex justify-center text-[#3B82F6] mb-4 transition-transform group-hover:scale-110">
                    <stat.icon size={40} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white">{stat.value}</div>
                  <div className="text-[#3B82F6]/60 font-medium uppercase tracking-widest text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Teaser */}
        <section className="py-24 container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-[#3B82F6] font-bold uppercase tracking-widest text-sm">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Tailored Digital Solutions</h3>
            <p className="text-lg text-white/60">
              We specialize in creating bespoke web experiences that drive growth and deliver results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesTeaser.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="py-24 bg-[#0A1128]/40 border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="space-y-4">
                <h2 className="text-[#3B82F6] font-bold uppercase tracking-widest text-sm">Recent Work</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-white">Success Stories</h3>
              </div>
              <Button variant="outline">View All Projects</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[#3B82F6]/5 rounded-full blur-[150px] -z-10" />
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0A1128] to-[#020617] border border-white/10 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
            >
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
