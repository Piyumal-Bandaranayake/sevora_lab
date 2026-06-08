"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable body scrolling during loading
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 10000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020617] select-none pointer-events-auto"
        >
          {/* Background decoration */}
          <div className="absolute w-[450px] h-[450px] bg-[#3B82F6]/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="flex flex-col items-center space-y-8 z-10">
            {/* Logo container with float and zoom entrance animations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -12, 0]
              }}
              transition={{
                opacity: { duration: 0.8, ease: "easeOut" },
                scale: { duration: 0.8, ease: "easeOut" },
                y: { 
                  repeat: Infinity, 
                  duration: 2.4, 
                  ease: "easeInOut" 
                }
              }}
              className="relative w-44 h-44 md:w-52 md:h-52 flex items-center justify-center"
            >
              <img
                src="/images/Clogo.png"
                alt="Sevora Lab Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]"
              />
            </motion.div>

            {/* Company Name below logo */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white">
                Sevora<span className="text-[#3B82F6]">Lab</span>
              </h2>
              <p className="text-xs md:text-sm text-white/40 uppercase tracking-[0.3em] mt-3 font-semibold">
                Digital Experiences
              </p>
            </motion.div>

            {/* Loading progress bar indicator */}
            <div className="w-56 h-[3px] bg-white/5 rounded-full overflow-hidden relative mt-4">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.6, 
                  ease: "easeInOut" 
                }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
