"use client";

import { motion } from "framer-motion";
import { LucideIcon, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ExpertiseCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  features?: string[];
  index: number;
  className?: string;
}

export function ExpertiseCard({
  title,
  description,
  Icon,
  index,
  className,
}: ExpertiseCardProps) {
  return (
    <div
      className={cn(
        "group relative w-full h-full flex flex-col justify-between overflow-visible p-4",
        className
      )}
    >
      {/* Giant Outline Number bleeding to the right */}
      <div 
        className="absolute -right-20 md:-right-32 top-1/2 -translate-y-1/2 select-none pointer-events-none font-black text-[16rem] md:text-[22rem] leading-none transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-105"
        style={{ 
          WebkitTextStroke: "2px rgba(59, 130, 246, 0.25)", 
          color: "transparent"
        }}
      >
        0{index + 1}
      </div>

      {/* Ambient hover glow */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/5 blur-[60px] transition-all duration-700 group-hover:scale-150 group-hover:bg-blue-500/15" />

      <div className="relative z-10 flex flex-col h-full justify-between max-w-xl">
        <div className="space-y-8">
          {/* Subtle Icon Indicator */}
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/5 text-blue-400/80 border border-blue-500/10">
            <Icon size={26} />
          </div>

          {/* Title & Description */}
          <div className="space-y-4">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-300">
              {title}
            </h3>
            <p className="text-base md:text-lg lg:text-xl text-white/50 leading-relaxed font-medium">
              {description}
            </p>
          </div>
        </div>

        {/* Link / CTA */}
        <div className="pt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 group/link transition-colors hover:text-white"
          >
            Explore service
            <ArrowRight
              size={16}
              className="transform transition-transform duration-300 group-hover/link:translate-x-1.5"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
