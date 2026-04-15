"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/Button";
import { Layout, Code2, Smartphone, Settings, Check, ChevronDown } from "lucide-react";

const services = [
  {
    title: "Website Design",
    description: "Creating visually stunning, high-converting designs tailored to your brand identification.",
    Icon: Layout,
  },
  {
    title: "Custom Development",
    description: "Building scalable, robust web applications using cutting-edge technologies like Next.js and React.",
    Icon: Code2,
  },
  {
    title: "Mobile Optimization",
    description: "Ensuring your digital presence is flawless across all devices, from smartphones to tablets.",
    Icon: Smartphone,
  },
  {
    title: "Support & Maintenance",
    description: "Continuous monitoring, security updates, and performance tuning to keep your site running smoothly.",
    Icon: Settings,
  },
];

const pricing = [
  {
    name: "Basic",
    price: "$999",
    description: "Ideal for small businesses starting their digital journey.",
    features: ["5 Page Website", "Responsive Design", "Basic SEO", "Contact Form", "1 Month Support"],
  },
  {
    name: "Professional",
    price: "$2,999",
    description: "Growing businesses needing a more powerful web presence.",
    features: ["10 Page Website", "Custom Animations", "Advanced SEO", "CMS Integration", "3 Months Support"],
    popular: true,
  },
  {
    name: "Premium",
    price: "$4,999",
    description: "Enterprises requiring high-end technical solutions.",
    features: ["Unlimited Pages", "E-commerce Ready", "Full Tech Suite", "Priority Support", "12 Months Maintenance"],
  },
];

const faqs = [
  { q: "How long does a typical project take?", a: "Most projects take between 4 to 8 weeks depending on complexity." },
  { q: "Do you offer post-launch support?", a: "Yes, we provide various maintenance plans to keep your site updated and secure." },
  { q: "Can you redesign my existing website?", a: "Absolutely! We specialize in modernizing outdated websites for better performance." },
  { q: "Is your code SEO-friendly?", a: "Yes, we implement advanced SEO best practices in every line of code we write." },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Header />
      
      <main className="flex-1 pt-32 pb-20">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </section>

        {/* Pricing Table */}
        <section className="bg-white/[0.02] py-24 mb-24 border-y border-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              {pricing.map((p, i) => (
                <div 
                  key={i} 
                  className={`p-10 rounded-[2.5rem] glass transition-all duration-300 relative ${p.popular ? 'border-[#3B82F6] shadow-[0_0_30px_rgba(59,130,246,0.15)] ring-2 ring-[#3B82F6]/20 scale-105 z-10' : 'border-white/5 hover:border-white/20'}`}
                >
                  {p.popular && (
                    <span className="absolute top-0 right-10 -translate-y-1/2 bg-[#3B82F6] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{p.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-bold text-[#3B82F6]">{p.price}</span>
                    <span className="text-white/40 text-sm">/ project</span>
                  </div>
                  <p className="text-white/60 mb-8 border-b border-white/10 pb-8 leading-relaxed">{p.description}</p>
                  <ul className="space-y-4 mb-10">
                    {p.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-white/80">
                        <Check size={18} className="text-[#3B82F6]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button variant={p.popular ? "accent" : "outline"} className="w-full">
                    Choose {p.name}
                  </Button>
                </div>
              ))}
            </div>
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
