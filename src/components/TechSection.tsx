"use client";

import { motion } from "framer-motion";

const technologies = [
  {
    name: "Next.js",
    icon: <img src="/icon/Next.js.svg" alt="Next.js" className="w-12 h-12 object-contain brightness-0 invert" />,
    color: "from-white/10 to-white/5",
    glow: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
  },
  {
    name: "React",
    icon: <img src="/icon/React.svg" alt="React" className="w-12 h-12 object-contain" />,
    color: "from-[#61DAFB]/10 to-[#61DAFB]/5",
    glow: "group-hover:shadow-[0_0_30px_rgba(97,218,251,0.2)]"
  },
  {
    name: "Tailwind CSS",
    icon: <img src="/icon/Tailwind CSS.svg" alt="Tailwind CSS" className="w-12 h-12 object-contain" />,
    color: "from-[#38BDF8]/10 to-[#38BDF8]/5",
    glow: "group-hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
  },
  {
    name: "Node.js",
    icon: <img src="/icon/Node.js.svg" alt="Node.js" className="w-12 h-12 object-contain" />,
    color: "from-[#339933]/10 to-[#339933]/5",
    glow: "group-hover:shadow-[0_0_30px_rgba(51,153,51,0.2)]"
  },
  {
    name: "PHP",
    icon: <img src="/icon/PHP.svg" alt="PHP" className="w-12 h-12 object-contain" />,
    color: "from-[#777BB4]/10 to-[#777BB4]/5",
    glow: "group-hover:shadow-[0_0_30px_rgba(119,123,180,0.2)]"
  },
  {
    name: "MySQL",
    icon: <img src="/icon/MySQL.svg" alt="MySQL" className="w-12 h-12 object-contain" />,
    color: "from-[#00758F]/10 to-[#00758F]/5",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,117,143,0.2)]"
  },
  {
    name: "Photoshop",
    icon: <img src="/icon/Adobe Photoshop.svg" alt="Photoshop" className="w-12 h-12 object-contain" />,
    color: "from-[#31A8FF]/10 to-[#31A8FF]/5",
    glow: "group-hover:shadow-[0_0_30px_rgba(49,168,255,0.2)]"
  },
  {
    name: "Illustrator",
    icon: <img src="/icon/Adobe Illustrator.svg" alt="Illustrator" className="w-12 h-12 object-contain" />,
    color: "from-[#FF9A00]/10 to-[#FF9A00]/5",
    glow: "group-hover:shadow-[0_0_30px_rgba(255,154,0,0.2)]"
  },
  {
    name: "Figma",
    icon: <img src="/icon/Figma.svg" alt="Figma" className="w-12 h-12 object-contain" />,
    color: "from-[#FF9A00]/10 to-[#FF9A00]/5",
    glow: "group-hover:shadow-[0_0_30px_rgba(255,154,0,0.2)]"
  },
  {
    name: "Supabase",
    icon: (
      <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <path d="M104.3 61.6L55.4 12.7c-2.3-2.3-6.1-2.3-8.4 0L9.3 50.4c-2.3 2.3-2.3 6.1 0 8.4l48.9 48.9c2.3 2.3 6.1 2.3 8.4 0l37.7-37.7c2.3-2.3 2.3-6.1 0-8.4z" fill="#3ECF8E" />
        <path d="M64 45.3L42.7 66.7l21.3 21.3 21.3-21.3L64 45.3z" fill="white" />
      </svg>
    ),
    color: "from-[#3ECF8E]/10 to-[#3ECF8E]/5",
    glow: "group-hover:shadow-[0_0_30px_rgba(62,207,142,0.2)]"
  }
];

export const TechSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-blue-500/5 rounded-full blur-[180px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#3B82F6] font-bold uppercase tracking-widest text-sm"
          >
            Our Tech Stack
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Powered by Modern Technologies
          </motion.h3>
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br ${tech.color} border border-white/5 flex flex-col items-center justify-center gap-4 transition-all duration-300 ${tech.glow}`}
            >
              <div className="relative z-10 filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                {tech.name}
              </span>

              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-3xl bg-white/0 group-hover:bg-white/[0.02] transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
