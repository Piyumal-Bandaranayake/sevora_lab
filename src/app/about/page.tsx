"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { 
  Lightbulb, 
  Zap, 
  ShieldCheck, 
  Target, 
  Eye, 
  Cpu, 
  Globe2, 
  ArrowRight,
  Code2
} from "lucide-react";

const values = [
  {
    title: "Innovation First",
    description: "We don't just follow trends; we set them. By leveraging cutting-edge technologies like Three.js and AI, we build future-proof solutions.",
    icon: Cpu,
  },
  {
    title: "Precision Speed",
    description: "In the digital world, every millisecond counts. Our engineering focuses on extreme performance and core web vitals optimization.",
    icon: Zap,
  },
  {
    title: "Unwavering Trust",
    description: "We build long-term partnerships through transparency, secure codebases, and reliable systems that grow with your business.",
    icon: ShieldCheck,
  },
];





export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-white">
      <Header />
      
      <main className="flex-1 pt-32 pb-20">

        {/* --- Mission & Vision Section --- */}
        <section className="container mx-auto px-6 mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.03] border border-white/5 p-12 rounded-[3rem] relative overflow-hidden group hover:border-[#3B82F6]/30 transition-colors"
            >
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#3B82F6]/5 rounded-full blur-3xl" />
              <Target className="text-[#3B82F6] mb-6" size={48} />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-white/50 leading-relaxed">
                To empower enterprises by building secure, scalable, and visually stunning web applications that don't just exist online—they dominate their respective industries. We bridge the gap between technical complexity and intuitive user experiences.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.03] border border-white/5 p-12 rounded-[3rem] relative overflow-hidden group hover:border-[#6366F1]/30 transition-colors"
            >
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#6366F1]/5 rounded-full blur-3xl" />
              <Eye className="text-[#6366F1] mb-6" size={48} />
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-white/50 leading-relaxed">
                To be the global benchmark for boutique technology agencies, recognized for our ability to turn radical ideas into functional masterpieces. We envision a web where every interaction is fast, beautiful, and meaningful.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- Why Sevora Lab? --- */}
        <section className="bg-white/[0.02] py-32 mb-40 border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Engineered for Excellence</h2>
              <p className="text-lg text-white/50">Our core values drive every pixel we place and every line of code we write.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map((v, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-[2.5rem] bg-[#020617] border border-white/5 hover:border-[#3B82F6]/40 transition-all group"
                >
                  <div className="w-16 h-16 bg-[#3B82F6]/10 rounded-2xl flex items-center justify-center text-[#3B82F6] mb-8 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                    <v.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                  <p className="text-white/40 leading-relaxed">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Global Approach (Sri Lanka to Singapore) --- */}
        <section className="container mx-auto px-6 mb-40">
          <div className="relative rounded-[4rem] overflow-hidden bg-gradient-to-br from-[#0A1128] to-[#020617] p-12 md:p-24 border border-white/10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[150px]" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-sm font-semibold">
                  <Globe2 size={16} />
                  Global Standards, Local Expertise
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">Bridging Excellence <br /> Across Borders</h2>
                <p className="text-lg text-white/60 leading-relaxed">
                  Headquartered in the vibrant tech landscape of Sri Lanka, Sevora Lab leverages a talent pool of elite engineers to serve the highly competitive Singapore market. This unique synergy allows us to offer premium quality at an optimized efficiency.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-white/80">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">✓</div>
                    <span>Adhering to Singapore's high security & quality standards</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/80">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">✓</div>
                    <span>Real-time collaboration across time zones</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/80">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">✓</div>
                    <span>Multidisciplinary team of developers, designers, and strategists</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-white/[0.03] rounded-full border border-white/10 flex items-center justify-center relative">
                  <div className="w-3/4 h-3/4 bg-[#3B82F6]/5 rounded-full blur-[80px] absolute animate-pulse" />
                  <div className="text-center space-y-2 relative">
                     <Globe2 size={80} className="text-[#3B82F6] mx-auto mb-4 opacity-20" />
                     <div className="text-4xl font-bold">15+</div>
                     <div className="text-white/40 uppercase tracking-widest text-sm">Dedicated Specialists</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
