'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats, infoCards } from '@/lib/data';
import { Download, ArrowUpRight, MapPin, GraduationCap, Calendar, Send } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
};

const infoIcons = [
  <MapPin key="map" size={20} className="text-[#F97316]" />,
  <GraduationCap key="grad" size={20} className="text-[#F97316]" />,
  <Calendar key="cal" size={20} className="text-[#F97316]" />,
  <Send key="send" size={20} className="text-[#F97316]" />,
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          className="section-label mb-8"
          variants={fadeUp} custom={0}
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
        >
          ABOUT ME
        </motion.div>

        {/* Top Grid: headline + stats */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Headline */}
          <motion.div variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
              DRIVEN BY CODE.
              <br />
              FOCUSED ON
              <br />
              <span className="text-[#F97316]">SOLUTIONS.</span>
              <span className="inline-flex w-10 h-10 bg-black rounded-full items-center justify-center ml-3 text-white text-lg align-middle">
                ✦
              </span>
            </h2>

            <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
              I&apos;m a passionate AI/ML Engineer and Full Stack Developer who loves turning complex problems
              into simple, scalable and beautiful solutions that create real impact.
            </p>

            {/* Mission */}
            <div className="border-l-4 border-[#F97316] pl-4 mb-8">
              <div className="text-[#F97316] font-semibold text-xs tracking-widest uppercase mb-2">MY MISSION</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                To build impactful digital products that solve real-world problems and create value through
                clean code, intelligent systems and thoughtful user experiences.
              </p>
            </div>

            <motion.a
              href="/resume.pdf"
              download
              className="btn-outline inline-flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              DOWNLOAD RESUME
              <Download size={16} />
            </motion.a>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            className="grid grid-cols-2 gap-0"
            variants={fadeUp} custom={2}
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                className="p-8 border-b border-r border-gray-100 last:border-r-0"
                style={{
                  borderRight: i % 2 === 0 ? '1px solid #F0F0F0' : 'none',
                  borderBottom: i < 2 ? '1px solid #F0F0F0' : 'none',
                }}
                whileHover={{ backgroundColor: '#FFF7F0' }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-5xl font-black text-[#F97316] mb-2">{stat.value}</div>
                <div className="font-bold text-sm mb-1">{stat.label}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{stat.desc}</div>
              </motion.div>
            ))}

            {/* Location & Availability row */}
            <div className="col-span-2 flex items-center justify-between pt-6 px-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />
                <span className="text-sm font-semibold">BASED IN INDIA</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Available for work</span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Info Cards Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-12 border border-gray-100 rounded-2xl overflow-hidden"
          variants={fadeUp} custom={3}
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
        >
          {infoCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="flex items-start gap-4 p-6 border-r border-gray-100 last:border-r-0"
              whileHover={{ backgroundColor: '#FFF7F0' }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                {infoIcons[i]}
              </div>
              <div>
                <div className="font-bold text-xs tracking-wider text-gray-900 mb-1">{card.title}</div>
                <div className="text-gray-400 text-xs leading-relaxed">{card.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
