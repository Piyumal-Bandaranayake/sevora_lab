"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Header />
      
      <main className="flex-1 pt-32 pb-20">
        <section className="container mx-auto px-6 mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8"
          >
            Let's Start a <span className="text-[#3B82F6] underline decoration-4 underline-offset-8">Conversation</span>
          </motion.h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Ready to elevate your digital presence? We're here to help you navigate the future of the web.
          </p>
        </section>

        <section className="container mx-auto px-6 max-w-4xl mb-24">
          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold text-white">Contact Information</h2>
              <p className="text-white/50 mx-auto max-w-md leading-relaxed">
                Reach out to us via any of these channels. We're always happy to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl glass border-white/5 space-y-4 hover:border-[#3B82F6]/30 transition-all group">
                <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-2xl flex items-center justify-center text-[#3B82F6] shadow-lg transition-transform group-hover:scale-110">
                  <Phone size={24} />
                </div>
                <h4 className="font-bold text-white text-lg">Call Us</h4>
                <p className="text-white/60 font-medium">+65 8000 1234</p>
              </div>
              <div className="p-8 rounded-3xl glass border-white/5 space-y-4 hover:border-[#3B82F6]/30 transition-all group">
                <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-2xl flex items-center justify-center text-[#3B82F6] shadow-lg transition-transform group-hover:scale-110">
                  <Mail size={24} />
                </div>
                <h4 className="font-bold text-white text-lg">Email Us</h4>
                <p className="text-white/60 font-medium">hello@sevoralab.com</p>
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] glass border-white/5 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#3B82F6] shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-white mb-1 text-lg">Our Location</h4>
                    <p className="text-white/60 leading-relaxed italic">Singapore, Tech Hub Central, Block 7, Level 4</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-[#3B82F6] shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-white mb-1 text-lg">Business Hours</h4>
                    <p className="text-white/60 leading-relaxed italic">Mon — Fri: 9:00 AM - 6:00 PM <br /> Sat: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="w-full h-80 bg-white/[0.02] border border-white/5 rounded-[2rem] relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center text-white/10 font-medium transition-colors group-hover:text-[#3B82F6]/30">
                  Google Maps Embed Placeholder
                </div>
                {/* Optional subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
