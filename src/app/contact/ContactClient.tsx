"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  Send
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";

export default function ContactClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Web Development");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = `Project Inquiry - ${name}`;
    const body = `Hello Sevora Lab,

I would like to start a project with you! Here are my project details:

Name: ${name}
Email: ${email}
Service Required: ${service}

Project Details:
${message}

Best regards,
${name}`;

    const mailtoUrl = `mailto:sevoralab@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default mail client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSubmitting(false);
      // Clear form inputs
      setName("");
      setEmail("");
      setMessage("");
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#020617] relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 opacity-[0.2] bg-fixed bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/service.jpg')" }}
      />
      {/* Dark overlay to blend in */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020617]/50 via-transparent to-[#020617] pointer-events-none" />

      <Header />
      
      <main className="flex-1 pt-32 pb-20 relative z-10">
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
          {/* Contact Info & Form */}
          <div className="space-y-12">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold text-white">Contact Information</h2>
              <p className="text-white/50 mx-auto max-w-md leading-relaxed">
                Reach out to us via any of these channels or submit your project request directly below.
              </p>
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl glass border-white/5 space-y-4 hover:border-[#3B82F6]/30 transition-all group">
                <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-2xl flex items-center justify-center text-[#3B82F6] shadow-lg transition-transform group-hover:scale-110">
                  <Phone size={24} />
                </div>
                <h4 className="font-bold text-white text-lg">Call Us</h4>
                <p className="text-white/60 font-medium">+94 77 575 2149</p>
              </div>
              <div className="p-8 rounded-3xl glass border-white/5 space-y-4 hover:border-[#3B82F6]/30 transition-all group">
                <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-2xl flex items-center justify-center text-[#3B82F6] shadow-lg transition-transform group-hover:scale-110">
                  <Mail size={24} />
                </div>
                <h4 className="font-bold text-white text-lg">Email Us</h4>
                <p className="text-white/60 font-medium">sevoralab@gmail.com</p>
              </div>
            </div>
 
            {/* Project Request Form */}
            <div className="p-8 md:p-12 rounded-[2.5rem] glass border-white/5 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Submit a Project Request</h3>
                <p className="text-white/50 text-sm">
                  Fill in the details below, and click send. It will open your email client to send the inquiry directly to us.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/70 text-sm font-semibold pl-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/70 text-sm font-semibold pl-2">Your Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white/70 text-sm font-semibold pl-2">What service do you need?</label>
                  <div className="relative">
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all appearance-none cursor-pointer"
                    >
                      <option value="Web Development" className="bg-[#020617] text-white">Web Development</option>
                      <option value="E-commerce Solutions" className="bg-[#020617] text-white">E-commerce Solutions</option>
                      <option value="UI/UX Design" className="bg-[#020617] text-white">UI/UX Design</option>
                      <option value="Logo & Branding" className="bg-[#020617] text-white">Logo & Branding</option>
                      <option value="Other" className="bg-[#020617] text-white">Other Inquiry</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-white/50">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white/70 text-sm font-semibold pl-2">Project Details</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project goals, features needed, timeline, etc."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all h-36 resize-none"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    disabled={isSubmitting}
                    className="min-w-[180px] group font-bold"
                  >
                    {isSubmitting ? "Opening Email..." : "Send Request"}
                    <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
