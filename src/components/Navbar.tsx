'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past the initial hero height
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 0; // 80px offset for sticky navbar
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`sticky top-0 w-full z-50 pointer-events-none py-4 px-5 lg:px-5`}>
      <div className="max-w-[1280px] mx-auto w-full flex justify-center md:justify-end pointer-events-auto">
        {/* The Links Group */}
        <motion.div 
          className={`flex flex-row flex-wrap gap-3 lg:gap-8 items-center justify-end transition-all duration-500 ease-in-out px-6 py-3 rounded-2xl ${
            scrolled 
              ? 'bg-white/5 backdrop-blur-md shadow-lg' 
              : 'bg-white/10 backdrop-blur-md md:bg-transparent md:backdrop-blur-none'
          }`}
        >
          {[
            { title: 'My Projects', desc: 'See all of nice project.', href: '#projects' },
            { title: 'About Me', desc: 'See who I am.', href: '#about' },
            { title: 'Contact me', desc: 'piyushninawe17@gmail.com', href: '#contact' },
          ].map((link, idx) => (
            <div
              key={idx}
              onClick={() => scrollTo(link.href)}
              className="flex flex-col border-t border-black w-[90px] lg:w-[120px] text-left group cursor-pointer"
              role="button"
              tabIndex={0}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className="block font-allerta text-[11px] lg:text-[12px] text-black group-hover:text-[#FF9E7C] transition-colors">
                  {link.title}
                </span>
                <FiArrowUpRight size={12} className="text-black group-hover:text-[#FF9E7C] transition-colors" />
              </div>
              <span className="hidden lg:block font-archivo lg:text-[10px] text-[10px] text-gray-500 leading-tight">
                {link.desc}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </nav>
  );
}
