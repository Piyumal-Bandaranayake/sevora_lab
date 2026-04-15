"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  className?: string;
}

export function ServiceCard({ title, description, Icon, className }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={cn(
        "glass p-8 rounded-3xl flex flex-col items-start gap-4 transition-all hover:shadow-2xl hover:border-accent/40",
        className
      )}
    >
      <div className="p-4 rounded-2xl bg-white/5 text-accent shadow-inner">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-white mt-2">{title}</h3>
      <p className="text-foreground/80 leading-relaxed">{description}</p>
      <Link
        href="/services"
        className="flex items-center gap-2 text-sm font-bold text-accent group mt-4 transition-colors hover:text-white"
      >
        Learn More
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
