"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out",
        scrolled
          ? "top-4 w-[calc(100%-2rem)] max-w-5xl bg-[#020617]/85 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.5)] border border-white/10 rounded-full"
          : "top-0 w-full max-w-none bg-transparent border-b border-transparent"
      )}
    >
      <nav className={cn(
        "container mx-auto px-6 flex items-center justify-between transition-all duration-300",
        scrolled ? "py-2.5" : "py-4"
      )}>
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/images/Clogo.png"
            alt="Sevora Lab Logo"
            className={cn(
              "w-auto object-contain transition-all duration-300 group-hover:scale-105",
              scrolled ? "h-6 md:h-7" : "h-8 md:h-9"
            )}
          />
          <span className={cn(
            "font-bold tracking-tighter text-white transition-all duration-300",
            scrolled ? "text-xl" : "text-2xl"
          )}>
            Sevora<span className="text-accent">Lab</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div 
          className="hidden md:flex items-center gap-6"
          onMouseLeave={() => setHoveredPath(null)}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredPath(link.href)}
              className={cn(
                "text-sm font-medium transition-all duration-300 relative py-2 px-4 rounded-full",
                pathname === link.href ? "text-accent font-semibold" : "text-white/80 hover:text-white"
              )}
            >
              <span className="relative z-10">{link.name}</span>
              {hoveredPath === link.href && (
                <motion.div
                  layoutId="hover-pill"
                  className="absolute inset-0 bg-white/[0.04] border border-white/5 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link href="/contact" className="ml-2">
            <Button variant="accent" size="sm" className="group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-1">
                Start Project
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-[#6366F1] to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>


      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn(
              "md:hidden absolute left-0 w-full bg-[#020617]/95 backdrop-blur-lg shadow-2xl px-6 py-8 flex flex-col gap-6 transition-all duration-300",
              scrolled
                ? "top-[calc(100%+0.5rem)] rounded-3xl border border-white/10"
                : "top-full rounded-b-3xl border-b border-white/10"
            )}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium",
                  pathname === link.href ? "text-[#3B82F6]" : "text-white/80 transition-colors hover:text-[#3B82F6]"
                )}
              >

                {link.name}
              </Link>
            ))}
            <Button variant="accent" className="w-full">
              Start Project
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
