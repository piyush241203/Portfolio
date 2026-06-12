'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check if scrolled past hero section
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.4);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-100 lg:z-50 overflow-visible">
      
      {/* Fixed Logo */}
      <div className="fixed w-full h-[60px] lg:h-[60px] bg-white/10 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-n z-50">
      <div className="fixed top-4 left-5 md:top-5 md:left-8 flex items-baseline pointer-events-auto z-100 gap-1">
        <span 
          onClick={() => scrollTo('#home')}
          className="font-archivo font-semibold text-2xl md:text-xl text-black tracking-tighter cursor-pointer hover:opacity-80 transition-opacity"
        >
          PN
        </span>
        <span className="w-[5px] h-[5px] lg:w-[5px] lg:h-[5px] rounded-full bg-[#FF9E7C] ml-1"></span>
      </div>
      </div>

      {/* Sticky Links Container */}
      <div className="w-full max-w-[calc(100svw-20px)] lg:max-w-[calc(100svw-30px)] mx-auto px-6 lg:px-12 h-full flex flex-col relative">
         {/* Push links down to the bottom of the first viewport */}
         {/* On mobile, might need a bit less so they stay on screen if there's address bars */}
         <div className="h-[690px] md:h-[calc(100svh-80px)] w-full flex-shrink-0" />
         
         <div className="sticky top-0 md:top-1 w-full flex justify-start md:justify-end pointer-events-auto z-50">
            {/* The Links Group */}
            <motion.div 
              className={`flex flex-row flex-wrap gap-3 lg:gap-8 lg:justify-start xl:justify-end w-full xl:w-auto transition-all duration-500 ease-in-out items-center justify-end ${
                scrolled 
                  ? 'bg-transparent h-[60px] px-6 md:px-8' 
                  : 'h-[40px] bg-white/10 backdrop-blur-md py-0 px-0'
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
                  className="flex flex-col border-t border-black pt-3 w-[90px] lg:w-[120px] text-left group cursor-pointer"
                  role="button"
                  tabIndex={0}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <span className="block font-allerta text-[11px] lg:text-[12px] text-black group-hover:text-[#FF9E7C] transition-colors">{link.title}</span>
                    <FiArrowUpRight size={12} className="text-black group-hover:text-[#FF9E7C] transition-colors" />
                  </div>
                  <span className="hidden lg:block font-archivo lg:text-[10px] text-[10px] text-gray-500 leading-tight">{link.desc}</span>
                </div>
              ))}
            </motion.div>
         </div>
      </div>
    </div>
  );
}
