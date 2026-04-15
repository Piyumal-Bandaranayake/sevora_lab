"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  tags: string[];
  description?: string;
  className?: string;
  onViewDetails?: () => void;
}

export function ProjectCard({ title, category, image, tags, className, onViewDetails }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl glass shadow-lg transition-all hover:border-accent/40",
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#012A4A]/90 via-[#012A4A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
          <button
            onClick={onViewDetails}
            className="flex items-center gap-2 text-[#012A4A] font-bold bg-accent px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
          >
            <ExternalLink size={18} />
            View Case Study
          </button>
        </div>
      </div>
      <div className="p-6">
        <span className="text-accent text-xs font-bold uppercase tracking-widest">{category}</span>
        <h3 className="text-xl font-bold mt-2 text-white">{title}</h3>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-1 rounded bg-white/5 text-accent font-bold border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
