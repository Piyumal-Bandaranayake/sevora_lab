"use client";

import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  ArrowRight,
  Users,
  Trophy,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExpertiseCard } from "@/components/ExpertiseCard";
import { ProjectCard } from "@/components/ProjectCard";
import { services } from "@/data/services";
import { projects } from "@/data/portfolio";
import { TechSection } from "@/components/TechSection";

const Robot3D = dynamic(() => import("@/components/Robot3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] md:h-[550px] lg:h-[600px] flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-[#3B82F6] border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const stats = [
  { label: "Successful Projects", value: "10+", icon: Trophy },
  { label: "Happy Clients", value: "10+", icon: Users },
  { label: "Years Experience", value: "2+", icon: Calendar },
];

export default function HomeClient() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Portfolio slideshow states
  const [activeCategory, setActiveCategory] = useState<"All" | "Web Dev" | "Logo">("All");
  const [shuffledProjects, setShuffledProjects] = useState<typeof projects>([]);
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const gap = 24; // gap-6

  // Shuffle projects on mount to mix Web Dev and Logo randomly
  useEffect(() => {
    const displayProjects = projects.filter(
      (p) => p.category === "Web Dev" || p.category === "Logo"
    );
    // Fisher-Yates or simple random sorting
    const shuffled = [...displayProjects].sort(() => Math.random() - 0.5);
    setShuffledProjects(shuffled);
  }, []);

  // Filter projects based on the active tab, using the shuffled list
  const filteredProjects = shuffledProjects.filter(p => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Web Dev") return p.category === "Web Dev";
    if (activeCategory === "Logo") return p.category === "Logo";
    return true;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.clientWidth;
        const totalGapsWidth = gap * (itemsPerPage - 1);
        const width = (containerWidth - totalGapsWidth) / itemsPerPage;
        setCardWidth(width);
      }
    };
    updateWidth();
    const timer = setTimeout(updateWidth, 100);
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
      clearTimeout(timer);
    };
  }, [itemsPerPage, filteredProjects]);

  const maxIndex = Math.max(0, filteredProjects.length - itemsPerPage);

  // Autoplay functionality: scrolls from left to right (next) automatically every 3 seconds
  useEffect(() => {
    if (isPaused || filteredProjects.length <= itemsPerPage) return;

    const interval = setInterval(() => {
      setPortfolioIndex((prev) => {
        const next = prev + 1;
        return next > maxIndex ? 0 : next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, filteredProjects.length, itemsPerPage, maxIndex]);

  // Reset index when changing category
  const handleCategoryChange = (category: "All" | "Web Dev" | "Logo") => {
    setActiveCategory(category);
    setPortfolioIndex(0);
  };

  const handlePrev = () => {
    setPortfolioIndex(prev => Math.max(prev - 1, 0));
    // Reset autoplay pause briefly on user interaction
    setIsPaused(true);
    const resumeTimer = setTimeout(() => setIsPaused(false), 5000);
    return () => clearTimeout(resumeTimer);
  };

  const handleNext = () => {
    setPortfolioIndex(prev => Math.min(prev + 1, maxIndex));
    // Reset autoplay pause briefly on user interaction
    setIsPaused(true);
    const resumeTimer = setTimeout(() => setIsPaused(false), 5000);
    return () => clearTimeout(resumeTimer);
  };

  const handleDragEnd = (event: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    const currentX = -portfolioIndex * (cardWidth + gap) + offset;
    const closestIndex = Math.round(-currentX / (cardWidth + gap));

    let targetIndex = closestIndex;
    if (Math.abs(velocity) > 200) {
      if (velocity < 0) {
        targetIndex = Math.min(portfolioIndex + 1, maxIndex);
      } else {
        targetIndex = Math.max(portfolioIndex - 1, 0);
      }
    } else {
      targetIndex = Math.max(0, Math.min(closestIndex, maxIndex));
    }

    setPortfolioIndex(targetIndex);
    // Pause briefly after dragging
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  // Transform values for shrinking left header & expanding right cards container
  const headerLeft = useTransform(scrollYProgress, [0, 0.15], ["50%", "0%"]);
  const headerX = useTransform(scrollYProgress, [0, 0.15], ["-50%", "0%"]);
  const headerTop = useTransform(scrollYProgress, [0, 0.15], ["50%", "14%"]);
  const headerY = useTransform(scrollYProgress, [0, 0.15], ["-50%", "0%"]);
  const headerScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.35]);
  const paddingLeft = useTransform(scrollYProgress, [0, 0.15], ["100%", "0%"]);

  // Horizontal scroll of cards (starts after layout transition is complete)
  const x = useTransform(scrollYProgress, [0, 0.15, 1], ["0%", "0%", "-500%"]);

  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-[#020617] py-20">
          {/* Hero background image */}
          <div
            className="absolute inset-0 z-0 opacity-70 bg-cover bg-center pointer-events-none"
            style={{
              backgroundImage: "url('/images/background.jpg')",
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#020617]/40 to-[#020617] pointer-events-none" />

          {/* Background glow effects */}
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#6366F1]/5 rounded-full blur-[100px]" />

          {/* White spotlight behind the robot */}
          <div
            className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.07] pointer-events-none"
            style={{
              background: "radial-gradient(circle, #ffffff 0%, #ffffff 20%, transparent 70%)",
            }}
          />
          <div
            className="absolute top-[40%] right-[20%] -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-[0.04] pointer-events-none blur-[40px]"
            style={{
              background: "radial-gradient(circle, #ffffff 0%, transparent 60%)",
            }}
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* Left Side – Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="space-y-6 text-center lg:text-left order-2 lg:order-1"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-sm font-medium">
                  <Zap size={14} />
                  Building Digital Experiences
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Sevora
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#6366F1]"> Lab</span>
                </h1>

                <p className="text-lg md:text-xl text-white/60 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  We craft high-performance web applications and stunning digital experiences that elevate your brand and drive real results.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                  <Link href="/contact">
                    <Button size="lg" variant="accent" className="min-w-[180px] group">
                      Start Project
                      <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button size="lg" variant="outline" className="min-w-[180px]">
                      View Work
                    </Button>
                  </Link>
                </div>

                {/* Quick stats row */}
                <div className="flex gap-8 justify-center lg:justify-start pt-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center lg:text-left">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Side – 3D Robot */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <Robot3D />
              </motion.div>

            </div>
          </div>
        </section>


        {/* Mobile Services Teaser */}
        <section className="py-20 block md:hidden relative overflow-hidden bg-[#020617]">
          {/* Background image */}
          <div
            className="absolute inset-0 z-0 opacity-[0.2] bg-cover bg-center"
            style={{ backgroundImage: "url('/service.jpg')" }}
          />

          {/* Overlays */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
            <div className="absolute inset-0 bg-[#020617]/70" />
          </div>

          <div className="container mx-auto px-6 relative z-10 space-y-8">
            <div className="space-y-4">
              <span className="text-[#3B82F6] font-bold uppercase tracking-widest text-xs block">Our Expertise</span>
              <h3 className="text-4xl font-black uppercase tracking-tight text-white leading-none">
                OUR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                  EXPERTISE
                </span>
              </h3>
              <p className="text-sm text-white/60">
                We specialize in creating bespoke web experiences that drive growth and deliver results. Swipe to explore our key capabilities.
              </p>
            </div>

            {/* Horizontal Swipe Container */}
            <div
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden -mx-6 px-6 pb-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {services.map((service, index) => (
                <div key={index} className="snap-center shrink-0 w-[85vw] sm:w-[420px] h-[360px]">
                  <ExpertiseCard index={index} {...service} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Desktop Services Teaser */}
        <section ref={sectionRef} className="hidden md:block relative h-[350vh] bg-[#020617] overflow-visible">
          {/* Background image with fixed attachment */}
          <div
            className="absolute inset-0 z-0 opacity-[0.3] bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/service.jpg')" }}
          />

          {/* Overlays */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
            <div className="absolute inset-0 bg-[#020617]/60" />
          </div>

          <div className="sticky top-0 h-screen flex items-center overflow-hidden z-10">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[#3B82F6]/5 rounded-full blur-[180px] z-0 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 w-full h-full flex items-center">
              {/* Left Column: Animated Title (Centered initially, pins to top-left on scroll) */}
              <motion.div
                style={{ left: headerLeft, x: headerX, top: headerTop, y: headerY, scale: headerScale, transformOrigin: "left top" }}
                className="absolute z-20 w-max pointer-events-none flex flex-col items-center text-center"
              >
                <div className="space-y-4 flex flex-col items-center">
                  <span className="text-[#3B82F6] font-bold uppercase tracking-widest text-sm block animate-pulse">Our Expertise</span>
                  <h3 className="text-5xl lg:text-7xl xl:text-9xl font-black uppercase tracking-tight text-white leading-none whitespace-nowrap">
                    Our Expertise
                  </h3>
                </div>
              </motion.div>

              {/* Right Column: Horizontal Scrolling Cards (Expands to full width) */}
              <motion.div
                style={{ paddingLeft }}
                className="w-full overflow-hidden py-4"
              >
                <motion.div
                  style={{ x }}
                  className="flex"
                >
                  {services.map((service, index) => (
                    <div key={index} className="w-full shrink-0 flex justify-center items-center h-[420px] px-4 md:px-12">
                      <div className="w-full max-w-[680px] h-[340px] md:h-[350px]">
                        <ExpertiseCard index={index} {...service} />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <TechSection />

        {/* Portfolio Preview */}
        <section className="py-24 bg-[#0A1128]/40 border-y border-white/5 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            {/* Header: Title and controls */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              <div className="space-y-4">
                <span className="text-[#3B82F6] font-bold uppercase tracking-widest text-xs block">Featured Projects</span>
                <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Look Our work</h3>
              </div>

              <div className="flex flex-wrap items-center gap-6 lg:gap-8">
                {/* Category Filter Tabs */}
                <div className="flex bg-white/[0.03] border border-white/5 rounded-full p-1 relative">
                  {(["All", "Web Dev", "Logo"] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className="relative px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all z-10 w-24 md:w-28 text-center"
                    >
                      <span className="relative z-10 transition-colors duration-300 text-white">
                        {cat === "Logo" ? "Logos" : cat === "Web Dev" ? "Web Dev" : "All Work"}
                      </span>
                      {activeCategory === cat && (
                        <motion.div
                          layoutId="active-portfolio-tab"
                          className="absolute inset-0 bg-[#3B82F6] rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Slideshow Carousel Viewport */}
            <div
              ref={carouselRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="w-full overflow-hidden py-4 cursor-grab active:cursor-grabbing"
            >
              <motion.div
                drag="x"
                dragConstraints={{
                  left: -maxIndex * (cardWidth + gap),
                  right: 0
                }}
                onDragEnd={handleDragEnd}
                animate={{ x: -portfolioIndex * (cardWidth + gap) }}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
                className="flex gap-6 w-max"
              >
                {filteredProjects.map((project, index) => (
                  <div
                    key={index}
                    style={{ width: cardWidth || 380 }}
                    className="shrink-0"
                  >
                    <ProjectCard {...project} fullImage />
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center mt-16">
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="group min-w-[200px]">
                  View All Work
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#0A1128] to-[#020617] border border-white/10 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
            >
              {/* Background image with fixed attachment inside the box */}
              <div
                className="absolute inset-0 z-0 opacity-[0.4] bg-fixed bg-cover bg-center"
                style={{ backgroundImage: "url('/cta-bg.webp')" }}
              />

              {/* Overlays inside the box */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128] via-transparent to-[#020617]" />
                <div className="absolute inset-0 bg-[#020617]/40" />
              </div>

              <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">Ready to build something <br /> extraordinary?</h2>
                <p className="text-xl text-white/60">
                  Let's discuss your next big idea and bring it to life with precision engineering.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link href="/contact">
                    <Button size="lg" variant="accent" className="min-w-[200px]">
                      Get Free Quote
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="min-w-[200px]">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[80px]" />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
