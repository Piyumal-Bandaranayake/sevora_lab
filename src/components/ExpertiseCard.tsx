"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpertiseCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  features?: string[];
  index: number;
  image?: string;
  className?: string;
}

export function ExpertiseCard({
  title,
  description,
  Icon,
  features,
  index,
  image,
  className,
}: ExpertiseCardProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative flex flex-col justify-between rounded-3xl border border-white/5 bg-[#0B2742]/60 hover:bg-[#0B2742]/80 p-8 transition-all duration-500 hover:border-[#1677FF]/30 hover:shadow-[0_0_50px_-12px_rgba(22,119,255,0.25)] overflow-hidden h-full",
        className
      )}
    >
      {/* Ambient hover glow */}
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#1677FF]/5 blur-[50px] transition-all duration-700 group-hover:scale-150 group-hover:bg-[#1677FF]/15" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Top Bar: Icon and Index Number */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1677FF]/10 text-[#4DA3FF] border border-[#1677FF]/20 group-hover:bg-[#1677FF]/20 group-hover:border-[#4DA3FF]/30 group-hover:text-white transition-all duration-300">
              <Icon size={26} />
            </div>
            <span className="font-mono text-4xl font-black text-white/5 tracking-wider group-hover:text-[#1677FF]/15 transition-colors duration-500 select-none">
              0{index + 1}
            </span>
          </div>

          {/* Title & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#B9E2FF] transition-all duration-300">
              {title}
            </h3>
            <p className="text-sm md:text-base text-[#EAF4FF]/70 leading-relaxed font-medium">
              {description}
            </p>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
