"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Loader2, 
  CheckCircle2,
  Clock,
  MessageSquare
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    console.log("Form Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

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

        <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Contact Information</h2>
              <p className="text-white/50 max-w-md leading-relaxed">
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

            <div className="p-8 rounded-[2.5rem] glass border-white/5 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#3B82F6] shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-white mb-1">Our Location</h4>
                  <p className="text-white/60">Singapore, Tech Hub Central, Block 7, Level 4</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-[#3B82F6] shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-white mb-1">Business Hours</h4>
                  <p className="text-white/60">Mon — Fri: 9:00 AM - 6:00 PM <br /> Sat: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
              {/* Map Placeholder */}
              <div className="w-full h-64 bg-white/[0.02] border border-white/5 rounded-2xl relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center text-white/10 font-medium transition-colors group-hover:text-[#3B82F6]/30">
                  Google Maps Embed Placeholder
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-12 rounded-[3.5rem] shadow-2xl border-white/5">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 primary-gradient rounded-full flex items-center justify-center text-white shadow-lg">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/40 block ml-1 uppercase tracking-wider">Full Name</label>
                <input
                  {...register("name")}
                  className={`w-full px-6 py-4 rounded-2xl bg-white/5 border outline-none transition-all text-white placeholder:text-white/5 ${
                    errors.name ? "border-red-500" : "border-white/10 focus:border-[#3B82F6] focus:bg-white/10"
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-xs text-red-400 ml-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/40 block ml-1 uppercase tracking-wider">Email Address</label>
                <input
                  {...register("email")}
                  className={`w-full px-6 py-4 rounded-2xl bg-white/5 border outline-none transition-all text-white placeholder:text-white/5 ${
                    errors.email ? "border-red-500" : "border-white/10 focus:border-[#3B82F6] focus:bg-white/10"
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-xs text-red-400 ml-1">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/40 block ml-1 uppercase tracking-wider">Required Service</label>
                <select
                  {...register("service")}
                  className={`w-full px-6 py-4 rounded-2xl bg-white/5 border outline-none transition-all appearance-none text-white ${
                    errors.service ? "border-red-500" : "border-white/10 focus:border-[#3B82F6] focus:bg-white/10"
                  }`}
                >
                  <option value="" className="bg-[#020617]">Select a service</option>
                  <option value="web-design" className="bg-[#020617]">Website Design</option>
                  <option value="web-dev" className="bg-[#020617]">Web Development</option>
                  <option value="ecommerce" className="bg-[#020617]">E-commerce Solution</option>
                  <option value="maintenance" className="bg-[#020617]">Maintenance & Support</option>
                </select>
                {errors.service && <p className="text-xs text-red-400 ml-1">{errors.service.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white/40 block ml-1 uppercase tracking-wider">Message Details</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className={`w-full px-6 py-4 rounded-2xl bg-white/5 border outline-none transition-all resize-none text-white placeholder:text-white/5 ${
                    errors.message ? "border-red-500" : "border-white/10 focus:border-[#3B82F6] focus:bg-white/10"
                  }`}
                  placeholder="Tell us about your project goals..."
                />
                {errors.message && <p className="text-xs text-red-400 ml-1">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 text-lg"
                variant="accent"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : isSuccess ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={24} /> Proposal Sent!
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send size={20} /> Send Proposal
                  </div>
                )}
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
