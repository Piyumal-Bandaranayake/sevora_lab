"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Lightbulb, Palette, Code2, Rocket, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BGPattern } from "@/components/ui/bg-pattern";

const processSteps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Discovery & Strategy",
    subtitle: "Idea Blueprinting",
    description: "We translate your raw vision into a clear product blueprint, analyzing market fit, user needs, and key technical requirements.",
    color: "#1677FF",
    glow: "rgba(22, 119, 255, 0.25)",
  },
  {
    number: "02",
    icon: Palette,
    title: "UX/UI Architecture",
    subtitle: "Visual Excellence",
    description: "Our designers build high-fidelity interactive prototypes focused on intuitive user journeys and high conversion.",
    color: "#4DA3FF",
    glow: "rgba(77, 163, 255, 0.25)",
  },
  {
    number: "03",
    icon: Code2,
    title: "Agile Development",
    subtitle: "Precision Engineering",
    description: "We turn designs into ultra-fast, responsive web applications using Next.js, modern APIs, and clean scalable codebases.",
    color: "#3B82F6",
    glow: "rgba(59, 130, 246, 0.25)",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Growth",
    subtitle: "Deployment & Beyond",
    description: "We optimize Core Web Vitals, implement automated CI/CD pipelines, and support your product as it scales globally.",
    color: "#B9E2FF",
    glow: "rgba(185, 226, 255, 0.25)",
  },
];

export function IdeaToProductSection() {
  return (
    <section className="py-28 relative overflow-hidden bg-[#071A2B] border-t border-white/5 isolate">
      {/* Background Grid Pattern */}
      <BGPattern variant="grid" fill="rgba(255,255,255,0.05)" size={40} mask="fade-edges" />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#1677FF]/8 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#4DA3FF]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1677FF]/10 border border-[#1677FF]/20 text-[#1677FF] text-xs md:text-sm font-semibold uppercase tracking-widest backdrop-blur-md"
          >
            <Sparkles size={14} className="animate-spin-slow" />
            <span>Idea to Product Pipeline</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight"
          >
            Turn Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1677FF] via-[#4DA3FF] to-[#B9E2FF]">Idea</span> Into A Digital Product
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-[#EAF4FF]/70 max-w-2xl mx-auto leading-relaxed"
          >
            From initial spark to fully deployed digital ecosystem, we partner with founders and enterprises to build market-defining software products.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-3xl bg-[#0B2742]/50 border border-white/10 backdrop-blur-md hover:border-[#1677FF]/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                {/* Subtle card glow on hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
                  style={{
                    background: `radial-gradient(circle at top right, ${step.glow} 0%, transparent 70%)`
                  }}
                />

                <div>
                  {/* Top bar with Step Number and Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-black text-white/20 group-hover:text-[#1677FF] transition-colors duration-300 tracking-tighter">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#1677FF]/20 group-hover:text-[#1677FF] group-hover:border-[#1677FF]/30 transition-all duration-300 shadow-md">
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Step Title & Description */}
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1677FF] mb-1 block">
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#B9E2FF] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#EAF4FF]/60 leading-relaxed group-hover:text-[#EAF4FF]/80 transition-colors">
                    {step.description}
                  </p>
                </div>

                {/* Bottom line detail */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/30 group-hover:text-white/60 transition-colors">
                  <span>Step {idx + 1} of 4</span>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-[#1677FF]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-[#0B2742] via-[#071A2B] to-[#0B2742] border border-[#1677FF]/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1677FF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-1 text-center md:text-left z-10">
            <h4 className="text-xl md:text-2xl font-bold text-white">Have a product idea waiting to be built?</h4>
            <p className="text-sm md:text-base text-[#EAF4FF]/70">Let's discuss your timeline, technical scope, and prototype plan.</p>
          </div>

          <Link href="/contact" className="z-10 flex-shrink-0">
            <Button size="lg" variant="accent" className="font-bold px-8 group shadow-[0_0_25px_rgba(22,119,255,0.3)]">
              Convert Your Idea Now
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
