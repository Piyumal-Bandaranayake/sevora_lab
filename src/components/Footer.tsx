import Link from "next/link";
import { Globe, Share2, Mail, MapPin, Phone, Rocket } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#020617] text-white/70 py-16 px-6 border-t border-white/5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/images/Clogo.png"
              alt="Sevora Lab Logo"
              className="h-7 md:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-2xl font-bold tracking-tighter text-white">
              Sevora<span className="text-[#3B82F6]">Lab</span>
            </span>
          </Link>
          <p className="max-w-xs leading-relaxed">
            Crafting high-performance digital experiences for forward-thinking businesses in Sri Lanka and globally.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-[#3B82F6] transition-colors"><Globe size={20} /></Link>
            <Link href="mailto:sevoralab@gmail.com" className="hover:text-[#3B82F6] transition-colors"><Mail size={20} /></Link>
            <Link href="#" className="hover:text-[#3B82F6] transition-colors"><Share2 size={20} /></Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white text-lg mb-6">Services</h4>
          <ul className="space-y-4">
            <li>Website Design</li>
            <li>Custom Development</li>
            <li>E-commerce Solutions</li>
            <li>Technical Support</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white text-lg mb-6">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-[#3B82F6]" />
              <span>Colombo, Sri Lanka</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#3B82F6]" />
              <span>+94 77 575 2149</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#3B82F6]" />
              <span>sevoralab@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-16 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
        <p suppressHydrationWarning>
          &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> Sevora Lab. All rights reserved. Crafted with precision.
        </p>
      </div>
    </footer>
  );
}
