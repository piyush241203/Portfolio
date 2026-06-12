'use client';
import { motion } from 'framer-motion';
import { footerNav } from '@/lib/data';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const socialIcons = [
  { icon: <FiGithub size={18} />, href: 'https://github.com/' },
  { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/' },
  { icon: <FiTwitter size={18} />, href: 'https://twitter.com/' },
  { icon: <FiMail size={18} />, href: 'mailto:piyushninawe17@gmail.com' },
];

const connectItems = [
  { icon: <Mail size={18} />, label: 'piyushninawe17@gmail.com', sub: 'Email' },
  { icon: <Phone size={18} />, label: '+91 1234567890', sub: 'Phone' },
  { icon: <MapPin size={18} />, label: 'India', sub: 'Location' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navHrefMap: Record<string, string> = {
    'Home': '#home', 'About Me': '#about', 'Services': '#techstack',
    'Projects': '#projects', 'Clients': '#clients', 'Tech Stack': '#techstack', 'Contact': '#contact',
  };

  return (
    <footer className="bg-[#0A0A0A] relative overflow-hidden">
      {/* Orange blob bottom-left */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#F97316] rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-[#F97316] rounded-2xl flex items-center justify-center">
        <span className="text-white text-3xl">✦</span>
      </div>
      {/* Dot pattern right */}
      <div className="dot-pattern absolute top-8 right-16 w-32 h-24 opacity-10" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8 relative z-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-black text-white mb-1">
              PN<span className="text-[#F97316]">.</span>
            </div>
            <div className="text-gray-400 text-sm mb-1">AI/ML Engineer &amp;</div>
            <div className="text-gray-400 text-sm mb-4">Full Stack Developer</div>
            <div className="w-8 h-0.5 bg-[#F97316] mb-5" />
            <p className="text-gray-500 text-xs leading-relaxed mb-6">
              Building intelligent, scalable and user-focused digital solutions that drive real impact.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialIcons.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-[#F97316] transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#F97316] font-bold text-xs tracking-widest uppercase mb-5">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {footerNav.navigation.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(navHrefMap[item] || '#home')}
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#F97316] font-bold text-xs tracking-widest uppercase mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {footerNav.services.map((item) => (
                <li key={item}>
                  <span className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors cursor-pointer group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#F97316] font-bold text-xs tracking-widest uppercase mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {footerNav.quickLinks.map((item) => (
                <li key={item}>
                  <span className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors cursor-pointer group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[#F97316] font-bold text-xs tracking-widest uppercase mb-5">Let&apos;s Connect</h4>
            <div className="flex flex-col gap-4">
              {connectItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white text-xs font-medium leading-tight">{item.label}</div>
                    <div className="text-gray-500 text-xs">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © 2025{' '}
            <span className="text-[#F97316] font-semibold">Piyush Ninawe</span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-white text-xl">✦</span>
          </div>

          <p className="text-gray-500 text-xs">
            Crafted with{' '}
            <span className="text-[#F97316] font-semibold">passion, code &amp; creativity</span>.
          </p>

          <motion.div
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-xs font-semibold transition-colors group cursor-pointer"
            whileHover={{ y: -1 }}
            role="button"
            tabIndex={0}
          >
            Back to Top
            <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#F97316] transition-colors">
              <ArrowUpRight size={14} />
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
