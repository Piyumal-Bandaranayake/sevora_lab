"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    name: "Next.js",
    icon: <img src="/icon/Next.js.svg" alt="Next.js" className="w-12 h-12 object-contain brightness-0 invert" />,
    glowColor: "rgba(255, 255, 255, 0.18)"
  },
  {
    name: "React",
    icon: <img src="/icon/React.svg" alt="React" className="w-12 h-12 object-contain" />,
    glowColor: "rgba(97, 218, 251, 0.25)"
  },
  {
    name: "Tailwind CSS",
    icon: <img src="/icon/Tailwind CSS.svg" alt="Tailwind CSS" className="w-12 h-12 object-contain" />,
    glowColor: "rgba(56, 189, 248, 0.25)"
  },
  {
    name: "Node.js",
    icon: <img src="/icon/Node.js.svg" alt="Node.js" className="w-12 h-12 object-contain" />,
    glowColor: "rgba(51, 153, 51, 0.25)"
  },
  {
    name: "PHP",
    icon: <img src="/icon/PHP.svg" alt="PHP" className="w-12 h-12 object-contain" />,
    glowColor: "rgba(119, 123, 180, 0.25)"
  },
  {
    name: "MySQL",
    icon: <img src="/icon/MySQL.svg" alt="MySQL" className="w-12 h-12 object-contain" />,
    glowColor: "rgba(0, 117, 143, 0.25)"
  },
  {
    name: "Photoshop",
    icon: <img src="/icon/Adobe Photoshop.svg" alt="Photoshop" className="w-12 h-12 object-contain" />,
    glowColor: "rgba(49, 168, 255, 0.25)"
  },
  {
    name: "Illustrator",
    icon: <img src="/icon/Adobe Illustrator.svg" alt="Illustrator" className="w-12 h-12 object-contain" />,
    glowColor: "rgba(255, 154, 0, 0.25)"
  },
  {
    name: "Figma",
    icon: <img src="/icon/Figma.svg" alt="Figma" className="w-12 h-12 object-contain" />,
    glowColor: "rgba(242, 78, 30, 0.25)"
  },
  {
    name: "Supabase",
    icon: (
      <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M104.3 61.6L55.4 12.7c-2.3-2.3-6.1-2.3-8.4 0L9.3 50.4c-2.3 2.3-2.3 6.1 0 8.4l48.9 48.9c2.3 2.3 6.1 2.3 8.4 0l37.7-37.7c2.3-2.3 2.3-6.1 0-8.4z" fill="#3ECF8E" />
        <path d="M64 45.3L42.7 66.7l21.3 21.3 21.3-21.3L64 45.3z" fill="white" />
      </svg>
    ),
    glowColor: "rgba(62, 207, 142, 0.25)"
  }
];

export const TechSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#020617]/50">
      {/* Background decoration — contained within this section via overflow-hidden */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-blue-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#3B82F6] font-bold uppercase tracking-widest text-sm"
          >
            Our Tech Stack
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Powered by Modern Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60"
          >
            We use the best tools in the industry to build fast, secure, and scalable digital solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              whileHover={{ scale: 1.15, y: -4 }}
              className="group relative p-6 flex flex-col items-center justify-center gap-3 cursor-pointer"
            >
              {/* Background ambient radial glow on hover */}
              <div 
                className="absolute w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 blur-[28px] transition-all duration-500 pointer-events-none -z-10"
                style={{
                  background: `radial-gradient(circle, ${tech.glowColor} 0%, transparent 70%)`
                }}
              />

              <div className="relative z-10 filter drop-shadow-md transition-all duration-300 group-hover:scale-105 group-hover:rotate-[2deg]">
                {tech.icon}
              </div>
              
              <span className="text-sm font-medium text-white/30 group-hover:text-white transition-colors duration-300 relative z-10">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
