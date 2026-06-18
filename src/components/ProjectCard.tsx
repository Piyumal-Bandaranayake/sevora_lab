"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, X, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title?: string;
  category: string;
  image: string;
  demoUrl?: string;
  className?: string;
  fullImage?: boolean;
  alt?: string;
}

export function ProjectCard({ title, category, image, demoUrl, className, fullImage = false, alt }: ProjectCardProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const isLogo = category === "Logo";

  const handleCardClick = () => {
    if (isLogo) {
      setIsZoomed(true);
    } else if (demoUrl && fullImage) {
      window.open(demoUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={handleCardClick}
        className={cn(
          "group relative overflow-hidden rounded-3xl glass shadow-lg transition-all border border-white/5 hover:border-[#3B82F6]/40",
          (isLogo || (demoUrl && fullImage)) ? "cursor-pointer" : "cursor-default",
          fullImage ? "w-full h-full" : "",
          className
        )}
      >
        {fullImage ? (
          <div className="relative w-full h-full overflow-hidden aspect-[4/3] md:aspect-[16/10]">
            <Image
              src={image}
              alt={alt || title || `${category} Project`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent opacity-90 transition-opacity duration-300" />

            {/* Content info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end gap-1.5 z-10">
              <div className="flex items-center gap-2">
                <span className="text-[#3B82F6] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-[#3B82F6]/10 rounded-full border border-[#3B82F6]/20 backdrop-blur-sm">
                  {category}
                </span>
                {demoUrl && (
                  <span className="text-white/40 text-[10px] font-medium tracking-wide flex items-center gap-1">
                    <ExternalLink size={10} /> Live Link
                  </span>
                )}
              </div>
              {title && (
                <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-[#3B82F6] transition-colors duration-300 drop-shadow-md">
                  {title}
                </h3>
              )}
            </div>

            {/* Hover actions */}
            <div className="absolute inset-0 bg-[#020617]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
              {isLogo ? (
                <div className="flex flex-col items-center gap-2 text-white bg-slate-950/80 border border-white/10 px-6 py-3 rounded-full backdrop-blur-md shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 size={20} className="text-[#3B82F6] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest">Click to Zoom</span>
                </div>
              ) : demoUrl ? (
                <div className="flex items-center gap-2 text-white font-bold bg-[#3B82F6] hover:bg-[#2563EB] px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)] scale-90 group-hover:scale-100 transition-transform duration-300">
                  <ExternalLink size={16} />
                  Live Demo
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <>
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={image}
                alt={alt || title || `${category} Project`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay logic */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {isLogo ? (
                  <div className="flex flex-col items-center gap-2 text-white">
                    <Maximize2 size={32} className="animate-pulse" />
                    <span className="text-sm font-bold uppercase tracking-widest">Click to Zoom</span>
                  </div>
                ) : demoUrl ? (
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-white font-bold bg-[#3B82F6] hover:bg-[#2563EB] px-8 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>

            {!isLogo && (
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-widest px-3 py-1 bg-[#3B82F6]/10 rounded-full border border-[#3B82F6]/20">
                    {category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#3B82F6] transition-colors">{title}</h3>
              </div>
            )}
          </>
        )}
      </motion.div>

      {/* Zoom Modal for Logos */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-20"
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X size={40} />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full h-full max-w-5xl max-h-[80vh]"
            >
              <Image
                src={image}
                alt={alt || title || `${category} Project`}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
                priority
              />
              <div className="absolute -bottom-12 left-0 right-0 text-center">
                {title && <h2 className="text-2xl font-bold text-white">{title}</h2>}
                <p className={cn(
                  "text-white/40 uppercase tracking-widest text-sm",
                  title ? "mt-2" : "mt-0"
                )}>
                  {category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
