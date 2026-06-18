import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#020617] text-white/50 py-6 px-6 border-t border-white/5 text-xs font-medium relative overflow-hidden">

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/images/Clogo.png"
            alt="Sevora Lab Logo"
            className="h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-base font-bold tracking-wider text-white uppercase">
            Sevora<span className="text-[#3B82F6]">Lab</span>
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          <Link href="/" className="text-white/40 hover:text-white uppercase tracking-widest font-bold text-[10px] transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-white/40 hover:text-white uppercase tracking-widest font-bold text-[10px] transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="text-white/40 hover:text-white uppercase tracking-widest font-bold text-[10px] transition-colors">
            Portfolio
          </Link>
          <Link href="/about" className="text-white/40 hover:text-white uppercase tracking-widest font-bold text-[10px] transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-white/40 hover:text-white uppercase tracking-widest font-bold text-[10px] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right Side: Copyright */}
        <div className="text-center md:text-right space-y-1">
          <div className="text-white/30 text-[10px] tracking-wide">
            &copy; {new Date().getFullYear()} Sevora Lab. All rights reserved.
          </div>
          <div>
            <Link href="#" className="text-white/20 hover:text-white/40 text-[9px] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
