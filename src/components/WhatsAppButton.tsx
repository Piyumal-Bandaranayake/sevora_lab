"use client";

import { motion } from "framer-motion";

export function WhatsAppButton() {
  // Primary contact number: +94 77 575 2149
  const phoneNumber = "94775752149";
  const message = "Hi Sevora Lab, I'd like to inquire about your services.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
      className="fixed bottom-6 right-6 z-50 pointer-events-auto"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all hover:scale-110 active:scale-95 group"
        aria-label="Chat on WhatsApp"
      >
        {/* Ripple effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        {/* Custom SVG WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 transition-transform duration-300 group-hover:rotate-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* White Speech Bubble */}
          <path
            fill="white"
            d="M12 2C6.48 2 2 6.48 2 12c0 1.87.52 3.61 1.41 5.12L2 22l5.05-.98c1.47.82 3.16 1.28 4.95 1.28 5.52 0 10-4.48 10-10S17.52 2 12 2z"
          />
          {/* Green Phone Handset */}
          <path
            fill="#25D366"
            d="M15.9 16.17c-.24.68-1.18 1.25-1.92 1.38-.5.1-1.14.18-3.23-.7-2.67-1.12-4.39-3.84-4.52-4.02-.13-.18-1.09-1.45-1.09-2.76 0-1.31.68-1.95.92-2.22.24-.27.54-.34.72-.34.18 0 .36 0 .52.01.17.01.4.01.61.5.24.57.82 2.01.89 2.16.07.15.12.33.02.53-.1.2-.15.3-.3.48-.15.18-.31.4-.44.54-.15.15-.31.32-.13.63.18.31.8 1.31 1.71 2.12.91.81 1.68 1.06 1.99 1.19.31.13.49.11.67-.09.18-.2.8-1.02.89-1.22.09-.2.27-.17.52-.08.25.09 1.61.76 1.89.9.27.14.45.2.52.32.07.12.07.69-.17 1.37z"
          />
        </svg>

        {/* Hover Tooltip */}
        <span className="absolute right-16 scale-0 rounded-xl bg-slate-950 px-3.5 py-2 text-xs font-semibold text-white shadow-2xl transition-all duration-300 origin-right group-hover:scale-100 whitespace-nowrap border border-white/10">
          Chat on WhatsApp
        </span>
      </a>
    </motion.div>
  );
}
