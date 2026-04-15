"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { Lightbulb, Zap, ShieldCheck, Rocket } from "lucide-react";

const values = [
  {
    title: "Innovation",
    description: "We constantly explore new technologies to provide cutting-edge solutions.",
    icon: Lightbulb,
  },
  {
    title: "Speed",
    description: "We optimize every line of code to ensure your website loads in a flash.",
    icon: Zap,
  },
  {
    title: "Reliability",
    description: "We build robust systems that you can depend on, day and night.",
    icon: ShieldCheck,
  },
];

const team = [
  { name: "Piyumal Bandara", role: "Founder & Lead Developer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Piyumal" },
  { name: "Sarah Lim", role: "Creative Director", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
  { name: "Chen Wei", role: "Full Stack Engineer", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chen" },
];

const timeline = [
  { year: "2020", event: "Sevora Lab was founded with a vision to redefine digital solutions." },
  { year: "2021", event: "Expanded our operations to serve the Singapore market." },
  { year: "2023", event: "Recognized as a leading web agency for high-performance apps." },
  { year: "2024", event: "Launched our 150th successful project." },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Header />
      
      <main className="flex-1 pt-32 mb-20">
        {/* About Hero */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-4xl space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
            >
              We weave code into <br />
              <span className="text-[#3B82F6] underline decoration-4 underline-offset-8">beautiful, fast websites.</span>
            </motion.h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
              At Sevora Lab, we believe that a website is more than just code. It's the digital heartbeat of your business. Our mission is to empower Singaporean businesses with premium engineering from Sri Lanka.
            </p>
          </div>
        </section>

        {/* Values Grid */}
        <section className="bg-white/[0.02] py-24 mb-24 border-y border-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Core Values</h2>
              <div className="h-1.5 w-24 bg-[#3B82F6] mx-auto rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map((v, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl glass border-white/5 text-center transition-all hover:border-[#3B82F6]/30 group"
                >
                  <div className="w-16 h-16 bg-[#3B82F6]/10 rounded-2xl flex items-center justify-center text-[#3B82F6] mx-auto mb-6 shadow-lg transition-transform group-hover:scale-110">
                    <v.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{v.title}</h3>
                  <p className="text-white/60 leading-relaxed">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Experts</h2>
            <p className="text-white/50 leading-relaxed">Meet the creative minds behind Sevora Lab.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((t, i) => (
              <div key={i} className="group text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-offset-4 ring-[#3B82F6]/10 transition-all duration-300 group-hover:ring-[#3B82F6]/50 group-hover:scale-105 bg-[#020617]">
                  <Image src={t.image} alt={t.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h4 className="text-xl font-bold text-white">{t.name}</h4>
                <p className="text-[#3B82F6] font-medium mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-gradient-to-br from-[#0A1128] to-[#020617] text-white py-24 rounded-[3rem] container mx-auto mb-24 border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-[100px] -z-0" />
          <div className="px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">Our Journey</h2>
            <div className="max-w-4xl mx-auto border-l-2 border-[#3B82F6]/20 pl-8 space-y-12">
              {timeline.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-[#3B82F6] ring-8 ring-[#0A1128]" />
                  <span className="text-[#3B82F6] font-bold text-xl tracking-wider">{item.year}</span>
                  <p className="text-white/70 text-lg mt-2 leading-relaxed">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
