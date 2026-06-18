"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  image: string;
  features?: string[];
  className?: string;
}

export function ServiceCard({ title, description, Icon, image, features, className }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        "glass p-6 rounded-3xl flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-accent/40 h-full",
        className
      )}
    >
      {/* Image / Placeholder Space */}
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-slate-900 via-blue-950/20 to-slate-900 border border-white/5 group-hover:border-accent/30 transition-all duration-300">
        {/* Visual background placeholder grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px]" />
        
        {/* Interactive placeholder indicator */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity">
          <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Image Space</span>
        </div>

        {/* The actual image */}
        <img
          src={image}
          alt={
            title === "Website Design" ? "Modern responsive UI UX website design mockup for Sri Lankan startups" :
            title === "Web Development" ? "High performance React Next.js custom web development code editor interface" :
            title === "SEO Optimization" ? "Technical SEO audit checklist and organic ranking performance dashboard" :
            title === "Logo Design" ? "Custom brand identity and professional logo design concepts in Colombo" :
            title === "Videography & Dronagraphy" ? "Cinematic aerial drone videography and 4K commercial production gear" :
            title === "Social Media Post Design" ? "Creative social media post design templates and visual campaign assets" :
            title
          }
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-0"
          onError={(e) => {
            e.currentTarget.style.opacity = '0';
          }}
        />

        {/* Floating Service Icon Badge */}
        <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md text-accent border border-white/10 shadow-lg z-10 transition-transform duration-300 group-hover:scale-105">
          <Icon size={24} />
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mt-2 mb-2 tracking-tight">{title}</h3>
      <p className="text-white/60 leading-relaxed text-sm font-medium mb-5">{description}</p>

      {/* Small Keywords / Features tags */}
      {features && features.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {features.map((feature, idx) => (
            <span
              key={idx}
              className="text-[10px] font-semibold text-accent bg-accent/5 border border-accent/15 rounded-full px-2.5 py-1 tracking-wide"
            >
              {feature}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}



