"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-[#020617]/90 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.5)] border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className={cn(
        "w-full max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between transition-all duration-300",
        scrolled ? "py-3 md:py-3.5" : "py-4 md:py-5"
      )}>
        {/* Left: Logo */}
        <div className="flex-1 flex items-center justify-start">
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
              Sevora<span className="text-[#3B82F6]">Lab</span>
            </span>
          </Link>
        </div>

        {/* Center: Desktop Nav Links */}
        <div className="hidden md:flex items-center justify-center gap-1 lg:gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative py-2 px-4 rounded-full",
                  isActive ? "text-[#3B82F6] font-semibold" : "text-white/80 hover:text-[#3B82F6]"
                )}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#3B82F6] shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right: CTA Button & Mobile Toggle */}
        <div className="flex-1 flex items-center justify-end">
          <div className="hidden md:block">
            <Link href="/contact">
              <Button variant="accent" size="sm" className="group relative overflow-hidden bg-[#3B82F6] hover:bg-[#2563EB]">
                <span className="relative z-10 flex items-center gap-1">
                  Start Project
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute left-0 top-full w-full bg-[#020617]/95 backdrop-blur-lg shadow-2xl px-6 py-8 flex flex-col gap-6 transition-all duration-300 rounded-b-2xl border-b border-white/10"
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
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="accent" className="w-full bg-[#3B82F6] hover:bg-[#2563EB]">
                Start Project
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
