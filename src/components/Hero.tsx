'use client';
import "../app/globals.css";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';
import DashboardCards from "./DashboardCards";

interface Token {
  text: string;
  type: 'keyword' | 'string' | 'plain';
}

const codeTokens: Token[] = [
  { text: 'const', type: 'keyword' },
  { text: ' engineer = {\n  builds: [', type: 'plain' },
  { text: '"ML models"', type: 'string' },
  { text: ', ', type: 'plain' },
  { text: '"Full-stack apps"', type: 'string' },
  { text: '],\n  stack: [', type: 'plain' },
  { text: '"PyTorch"', type: 'string' },
  { text: ', ', type: 'plain' },
  { text: '"React"', type: 'string' },
  { text: ', ', type: 'plain' },
  { text: '"Node"', type: 'string' },
  { text: ', ', type: 'plain' },
  { text: '"AWS"', type: 'string' },
  { text: '],\n  focus: ', type: 'plain' },
  { text: '"shipping, not just prototyping"', type: 'string' },
  { text: ',\n};', type: 'plain' }
];

function TypewriterTerminal() {
  const [charIndex, setCharIndex] = useState(0);

  // Calculate total character length
  const totalLength = codeTokens.reduce((sum, token) => sum + token.text.length, 0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCharIndex((prev) => {
        if (prev >= totalLength) {
          clearInterval(timer);
          setTimeout(() => {
            setCharIndex(0);
          }, 3000);
          return prev;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [charIndex, totalLength]);

  const renderTypedTokens = () => {
    let currentLength = 0;
    const elements: React.ReactNode[] = [];

    for (let i = 0; i < codeTokens.length; i++) {
      const token = codeTokens[i];
      if (currentLength >= charIndex) break;

      const remainingChars = charIndex - currentLength;
      if (remainingChars >= token.text.length) {
        elements.push(
          <span key={i} className={token.type === 'keyword' ? 'k' : token.type === 'string' ? 's' : ''}>
            {token.text}
          </span>
        );
        currentLength += token.text.length;
      } else {
        elements.push(
          <span key={i} className={token.type === 'keyword' ? 'k' : token.type === 'string' ? 's' : ''}>
            {token.text.slice(0, remainingChars)}
          </span>
        );
        break;
      }
    }

    return elements;
  };

  return (
    <div className="terminal-card">
      <div className="terminal-head">
        <span className="live-dot"></span>
        <span>profile.ts</span>
      </div>
      <pre className="terminal-body">
        <code>
          {renderTypedTokens()}
          <span className="t-caret"></span>
        </code>
      </pre>
    </div>
  );
}

interface Particle {
  id: number;
  left: string;
  top: string;
  duration: string;
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const list: Particle[] = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      duration: (5 + Math.random() * 10) + 's',
    }));
    setParticles(list);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="fixed top-0 left-0 w-full h-screen bg-white overflow-hidden z-0">

      {/* Particle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div
        className="
      h-full
      overflow-y-auto
      [&::-webkit-scrollbar]:hidden
      [-ms-overflow-style:none]
      [scrollbar-width:none]
      flex justify-center lg:items-center items-start
    "
      >

        <div className="relative max-w-[1280px] h-[100vh] mx-auto w-full flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-6">

          {/* Left Column */}
          <motion.div className="absolute left-[40px] top-10 lg:left-14 z-70 lg:top-24 w-[320px] h-[340px] lg:w-auto lg:h-auto drop-shadow-[5px_5px_2px_rgba(0,0,0,0.08)]"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <div className='flex flex-col w-full xl:w-auto'>
              <div className='flex flex-col w-full lg:gap-[5px] gap-[10px] items-start'>
                <div className="flex items-center lg:gap-2 gap-2 mb-4">
                  <span className="text-[#000000] font-archivo font-semibold text-[18px] md:text-[18px] uppercase tracking-widest leading-none">HELLO, I&apos;M</span>
                  <div className="lg:h-[2.5px] w-[50px] h-[2px] md:w-[60px] bg-[#000000] rounded-full"></div>
                </div>

                <div className="flex flex-col -mt-2 md:-mt-4 mb-0">
                  <h1 className="name-piyush font-archivo font-semibold text-[60px] lg:text-[130px] xl:text-[150px] leading-[0.9] text-[#ffffff] tracking-normal [-webkit-text-stroke:2px_#FF9E7C]">
                    PIYU<span className="lg:[-webkit-text-stroke:2px_#FF9E7C]">SH</span>
                  </h1>
                  <h1 className="font-archivo font-semibold text-[34px] lg:text-[80px] xl:text-[86px] leading-[0.9] text-[#FF9E7C] tracking-normal">
                    NINAWE
                  </h1>
                </div>
              </div>
            </div>

          </motion.div>


          <div className='w-[10%] h-[150px] lg:h-[40vh]'>
            <motion.div
              className="absolute left-[50%] translate-x-[-50%] md:translate-x-none lg:left-14 md:translate-x-[0%] z-70 top-[680px] lg:top-[400px]"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            >
              <div className='flex flex-col w-full lg:gap-[0px] gap-[45px] items-start z-10'>

                {/* <DashboardCards/> */}
                <TypewriterTerminal />

                <span></span>
              </div>
            </motion.div>

          </div>

          {/* Center Column */}
          <motion.div className="absolute top-[180px] md:top-[50%] md:right-[60px] md:translate-y-[-50%] right-1/2 translate-x-1/2 md:translate-x-0 w-full xl:w-auto z-60 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          >
            {/* Main blob background container */}
            <div className="relative w-[320px] h-[340px] lg:w-[500px] lg:h-[600px] xl:w-[50vw] xl:h-[95vh] xl:max-w-[480px] xl:max-h-[600px] drop-shadow-[10px_5px_5px_rgba(0,0,0,0.27)]">


              {/* User Image (Constellation Portrait) */}
              <div className="absolute inset-x-0 bottom-[0px] flex justify-center items-center h-[100%] w-[100%] z-20 pointer-events-none select-none">
                <div className="hero-visual select-none pointer-events-auto scale-[0.8] md:scale-90 lg:scale-100">
                  <svg className="constellation" viewBox="0 0 480 640" aria-hidden="true">
                    {/* left chain */}
                    <line className="line-draw" x1="22" y1="70" x2="40" y2="160" />
                    <line className="line-draw" x1="40" y1="160" x2="18" y2="270" />
                    <line className="line-draw" x1="18" y1="270" x2="38" y2="380" />
                    <line className="line-draw" x1="38" y1="380" x2="20" y2="500" />
                    {/* right chain */}
                    <line className="line-draw" x1="458" y1="60" x2="438" y2="160" />
                    <line className="line-draw" x1="438" y1="160" x2="462" y2="280" />
                    <line className="line-draw" x1="462" y1="280" x2="440" y2="390" />
                    <line className="line-draw" x1="440" y1="390" x2="458" y2="510" />
                    {/* top + bottom crossbars */}
                    <line className="line-draw" x1="22" y1="70" x2="150" y2="26" />
                    <line className="line-draw" x1="150" y1="26" x2="300" y2="32" />
                    <line className="line-draw" x1="300" y1="32" x2="458" y2="60" />
                    <line className="line-draw" x1="20" y1="500" x2="140" y2="585" />
                    <line className="line-draw" x1="140" y1="585" x2="300" y2="592" />
                    <line className="line-draw" x1="300" y1="592" x2="458" y2="510" />

                    <circle className="node-draw" cx="22" cy="70" r="3" />
                    <circle className="node-draw node-active" cx="40" cy="160" r="3.6" />
                    <circle className="node-draw" cx="18" cy="270" r="3" />
                    <circle className="node-draw" cx="38" cy="380" r="3" />
                    <circle className="node-draw" cx="20" cy="500" r="3" />
                    <circle className="node-draw" cx="458" cy="60" r="3" />
                    <circle className="node-draw" cx="438" cy="160" r="3" />
                    <circle className="node-draw node-active" cx="462" cy="280" r="3.6" />
                    <circle className="node-draw" cx="440" cy="390" r="3" />
                    <circle className="node-draw" cx="458" cy="510" r="3" />
                    <circle className="node-draw" cx="150" cy="26" r="3" />
                    <circle className="node-draw" cx="300" cy="32" r="3" />
                    <circle className="node-draw" cx="140" cy="585" r="3" />
                    <circle className="node-draw node-active" cx="300" cy="592" r="3.6" />
                  </svg>

                  <div className="corner-frame">
                    <span className="corner tl"></span>
                    <span className="corner tr"></span>
                    <span className="corner bl"></span>
                    <span className="corner br"></span>
                    <p className="fig-caption"><span className="gold-tick">—</span>FIG. 01 / PORTRAIT</p>
                  </div>
                  {/* <p className="fig-caption"><span className="gold-tick">—</span>FIG. 01 / PORTRAIT</p> */}

                  <div className="photo-wrap">
                    <Image
                      className="portrait"
                      src="/Piyush1.png"
                      alt="Piyush Ninawe Portrait"
                      width={400}
                      height={500}
                      priority
                    />
                  </div>

                  <div className="chip chip-1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M12 2C9 2 7 4 7 7v2H4v2h3v2H4v2h3v2c0 3 2 5 5 5" />
                      <circle cx="9" cy="9" r="0.6" fill="currentColor" />
                    </svg>
                    Python
                  </div>
                  <div className="chip chip-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
                      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
                      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
                    </svg>
                    React
                  </div>
                  <div className="chip chip-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
                      <path d="M12 3v18M4 7.5l8 4.5 8-4.5" />
                    </svg>
                    Node.js
                  </div>
                  {/* <div className="chip chip-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2v4M12 18v4M4.2 7l3.4 2M16.4 15l3.4 2M4.2 17l3.4-2M16.4 9l3.4-2" />
                    </svg>
                    PyTorch
                  </div> */}
                </div>
              </div>

             
            </div>
          </motion.div>

           {/* Bottom Buttons */}
              <motion.div className="absolute top-[555px] lg:top-[500px] left-1/2 -translate-x-1/2 flex items-center bg-[#ffffff1a] border-[1px] border-[#000000] rounded-full p-[6px] w-max shadow-md backdrop-blur-sm z-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              >
                <button
                  onClick={() => scrollTo('#projects')}
                  className="flex items-center justify-center bg-[#FF9E7C] text-white rounded-full px-[10px] py-[6px] gap-[8px] shadow-sm group hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span className="font-archivo font-medium text-[14px] lg:text-[16px]">Portfolio</span>
                  <div className="bg-white text-[#FF9E7C] rounded-full w-8 h-8 lg:w-7 lg:h-7 flex items-center justify-center shrink-0 group-hover:rotate-45 transition-transform shadow-sm">
                    <FiArrowUpRight size={20} strokeWidth={2.5} />
                  </div>
                </button>

                <button
                  onClick={() => scrollTo('#contact')}
                  className="flex items-center justify-center text-black px-6 lg:px-8 py-2 gap-3 group hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span className="font-archivo font-medium text-[14px] lg:text-[16px]">Hire Me</span>
                  <FiArrowUpRight size={22} strokeWidth={2.5} className="group-hover:rotate-45 transition-transform" />
                </button>
              </motion.div>

{/* Top Right Black Circle with Star */}
              {/* <div className="absolute top-[3px] -right-[0px] lg:top-[30px] lg:right-[8px] w-[12.4%] h-auto aspect-square lg:w-15 lg:h-15 bg-black rounded-full flex items-center justify-center z-30 shadow-xl">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  className="w-[65%] h-[65%] relative flex items-center justify-center"
                >
                  <Image src="/star.png" alt="Star" fill className="object-contain lg:w-[56px] lg:h-[56px]" />
                </motion.div>
              </div> */}

              {/* Social Icons Stack */}
              <motion.div className="social-icon absolute right-[8px] lg:right-2 top-[400px] lg:top-[50%] lg:translate-y-[6%] w-[12.5%] md:w-auto h-auto md:h-auto flex flex-col lg:gap-2 gap-1 z-50 ">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="w-[100%] h-aoto aspect-square lg:w-[56px] lg:h-[56px] bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <FiGithub size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-[100%] h-aoto aspect-square lg:w-[56px] lg:h-[56px] bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <FiLinkedin size={18} />
                </a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }} className="w-[100%] h-aoto aspect-square lg:w-[56px] lg:h-[56px] bg-[#FF9E7C] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <FiArrowUpRight size={24} />
                </a>
              </motion.div>

          <motion.div className="flex flex-col z-60 w-full xl:w-auto items-start mt-12 xl:mt-0"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            {/* <TypewriterTerminal /> */}
          </motion.div>
      </div>
    </div>
      
      {/* Scroll Cue */}
      <div className="scroll-cue absolute bottom-[-18px] lg:bottom-[8px] left-1/2 -translate-x-1/2 z-50">
        <span>Scroll</span>
        <div className="scroll-line">
          <span className="scroll-dot"></span>
        </div>
      </div>
    </section >
  );
}
