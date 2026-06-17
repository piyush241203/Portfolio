'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { aboutSkills } from '@/lib/data';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const iconMap = {
  react: FaReact,
  node: FaNodeJs,
  mongodb: SiMongodb,
};


const dropBounce = {
  hidden: { y: -300, opacity: 0 },
  visible: {
    y: [-300, 0, -40, 0, -15, 0],
    opacity: [0, 1, 1, 1, 1, 1],
    transition: {
      duration: 1.2,
      times: [0, 0.5, 0.65, 0.8, 0.9, 1],
      ease: [
        [0.28, 0.84, 0.42, 1],
        [0.28, 0.84, 0.42, 1],
        [0.28, 0.84, 0.42, 1],
        [0.28, 0.84, 0.42, 1],
        [0.28, 0.84, 0.42, 1]
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ] as any
    }
  }
};

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const, delay: 0.6 }
  }
};

const zoomIn = (delay: number) => ({
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 200, delay: delay / 1000 }
  }
});

export default function About() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past the initial hero height
      setScrolled(window.scrollY > window.innerHeight * 0.99);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`bg-[#FEA789] pt-32 pb-10 md:pb-40 px-6 md:px-12 w-full relative overflow-hidden font-archivo ${
            scrolled 
              ? 'rounded-none transition-all duration-600 ease-in' 
              : 'lg:rounded-t-[60px] rounded-t-[50px] rounded-b-none transition-all duration-600 ease-in-out'
          }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-0 md:mt-0">

          <motion.div
            variants={dropBounce}
            className="relative flex justify-center w-full"
            data-aos="drop-bounce"
          >
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>

            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img
                  // src="/Piyush.png"
                  src="/about_img1.png"
                  alt="Piyush Ninawe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Info Content */}
        <motion.div
          variants={fadeLeft}
          className="flex-1 text-white mt-2 md:mt-0 relative z-20"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Hello!</h2>
          <p className="text-lg font-medium mb-12 leading-relaxed max-w-3xl text-orange-50">
            Hi, my name is <span className="text-black text-xl font-semibold mx-1 tracking-wide uppercase">Piyush Ninawe</span>, a passionate AI/ML Engineer and Full Stack Developer based in Nagpur, India, dedicated to crafting clean, functional, and highly scalable web applications.
          </p>

          {/* Horizontal Skills Row (Transparent & Large) */}
          {/* <div className="flex items-center gap-10 mt-8">
            {aboutSkills.map((skill) => {
              const IconComponent = iconMap[skill.iconKey as keyof typeof iconMap];
              return (
                <motion.div
                  key={skill.name}
                  variants={zoomIn(skill.delay)}
                  whileHover={{ scale: 1.1 }}
                  className="cursor-pointer drop-shadow-2xl"
                  title={skill.name}
                  data-aos="zoom-in"
                  data-aos-delay={skill.delay}
                >
                  {IconComponent && (
                    <IconComponent
                      className="w-20 h-20 md:w-24 md:h-24 transition-all duration-300 hover:brightness-110"
                      style={{ color: skill.color }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div> */}

        </motion.div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#F8F8F8]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 opacity-30 animate-pulse">
        <img src="/star.png" alt="Star" className="w-16 h-16 object-contain brightness-0 invert" />
      </div>
      <div className="absolute bottom-2 md:bottom-20 left-4 md:left-20 opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <img src="/star.png" alt="Star" className="w-20 h-20 object-contain brightness-0 invert" />
      </div>
    </motion.section>
  );
}
