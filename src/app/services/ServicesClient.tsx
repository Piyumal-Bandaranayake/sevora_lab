"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import { BGPattern } from "@/components/ui/bg-pattern";

const faqs = [
  { q: "How long does a typical project take?", a: "Most projects take between 4 to 8 weeks depending on complexity." },
  { q: "Do you offer post-launch support?", a: "Yes, we provide various maintenance plans to keep your site updated and secure." },
  { q: "Can you redesign my existing website?", a: "Absolutely! We specialize in modernizing outdated websites for better performance." },
  { q: "Is your code SEO-friendly?", a: "Yes, we implement advanced SEO best practices in every line of code we write." },
];

export default function ServicesClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-[#020617] relative overflow-hidden isolate">
      {/* Background design: grid */}
      <BGPattern variant="grid" fill="rgba(255,255,255,0.06)" size={48} mask="fade-edges" />
      {/* Dark overlay to blend in */}
      <div className="absolute inset-0 z-[-2] bg-gradient-to-b from-[#020617]/50 via-transparent to-[#020617] pointer-events-none" />

      <Header />
      
      <main className="flex-1 pt-32 pb-20 relative z-10">
        <section className="container mx-auto px-6 mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8"
          >
            Tailored <span className="text-[#3B82F6] underline decoration-4 underline-offset-8">Web Solutions</span>
          </motion.h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive suite of digital services designed to elevate your brand and exceed your business objectives.
          </p>
        </section>

        {/* Services Grid */}
        <section className="container mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/5 rounded-2xl overflow-hidden glass transition-all hover:border-[#3B82F6]/20">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-lg text-white">{faq.q}</span>
                  <ChevronDown className={`text-[#3B82F6] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-white/60 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
