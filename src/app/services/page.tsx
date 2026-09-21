"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExpertiseCard } from "@/components/ExpertiseCard";
import { services } from "@/data/services";
import { BGPattern } from "@/components/ui/bg-pattern";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#071A2B] text-white relative overflow-hidden isolate">
      <Header />

      <main className="flex-1 pt-32 pb-24">
        {/* --- Hero Section --- */}
        <section className="container mx-auto px-6 mb-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1677FF]/10 border border-[#1677FF]/20 text-[#1677FF] text-xs md:text-sm font-semibold uppercase tracking-widest backdrop-blur-md mb-6"
          >
            <Sparkles size={14} className="animate-spin-slow" />
            <span>Our Expertise & Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-tight text-white mb-6"
          >
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677FF] via-[#4DA3FF] to-[#B9E2FF]">Digital Products</span> That Scale
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#EAF4FF]/70 max-w-2xl mx-auto leading-relaxed"
          >
            We specialize in creating bespoke web experiences, high-performance applications, and brand assets that drive exponential growth.
          </motion.p>
        </section>

        {/* --- Main Services Grid Section --- */}
        <section id="services" className="py-16 relative overflow-hidden isolate">
          <BGPattern variant="dots" fill="rgba(255,255,255,0.08)" size={32} mask="fade-edges" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 items-stretch mb-24">
              {services.map((service, index) => {
                const Icon = service.Icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 md:p-10 rounded-3xl bg-[#0B2742]/50 border border-white/10 backdrop-blur-md hover:border-[#1677FF]/40 transition-all flex flex-col justify-between group shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#1677FF] group-hover:scale-110 group-hover:bg-[#1677FF]/20 transition-all shadow-md">
                          <Icon size={28} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#1677FF] bg-[#1677FF]/10 px-3 py-1 rounded-full border border-[#1677FF]/20">
                          0{index + 1} Service
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#B9E2FF] transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-base text-[#EAF4FF]/70 leading-relaxed mb-8">
                        {service.description}
                      </p>

                      {service.features && (
                        <div className="space-y-3 mb-8 pt-4 border-t border-white/5">
                          {service.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-3 text-sm text-white/80">
                              <CheckCircle2 size={16} className="text-[#1677FF] flex-shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <Link href="/contact" className="pt-4">
                      <Button variant="outline" className="w-full justify-between group/btn border-white/10 hover:border-[#1677FF]/50">
                        <span>Request Service</span>
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* --- CTA Section --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 md:p-14 rounded-3xl bg-gradient-to-r from-[#0B2742] via-[#071A2B] to-[#0B2742] border border-[#1677FF]/20 text-center space-y-6 shadow-2xl relative overflow-hidden"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white">Need a Custom Solution tailored for your business?</h3>
              <p className="text-base md:text-lg text-[#EAF4FF]/70 max-w-xl mx-auto">
                Get in touch with our engineering team for a free consultation and project scope breakdown.
              </p>
              <Link href="/contact" className="inline-block pt-2">
                <Button size="lg" variant="accent" className="font-bold px-8 group">
                  Book Free Consultation
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
