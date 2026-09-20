"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "primary-gradient text-white shadow-lg hover:shadow-[#1677FF]/30",
      secondary: "bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-[#4DA3FF]/40",
      outline: "border-2 border-[#1677FF] text-[#1677FF] hover:bg-[#1677FF] hover:text-white hover:border-[#1677FF] transition-all shadow-[0_0_15px_rgba(22,119,255,0.15)]",
      ghost: "text-white/70 hover:bg-white/5 hover:text-white",
      accent: "bg-[#1677FF] text-white hover:bg-[#4DA3FF] shadow-[0_0_20px_rgba(22,119,255,0.25)] font-bold",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base font-medium",
      lg: "px-8 py-4 text-lg font-semibold",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#1677FF] focus:ring-offset-2 focus:ring-offset-[#071A2B] disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
