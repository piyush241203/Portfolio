'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { techStack } from '@/lib/data';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

const categories = [
  { key: 'frontend', label: 'FRONTEND', data: techStack.frontend },
  { key: 'backend', label: 'BACKEND', data: techStack.backend },
  { key: 'database', label: 'DATABASE', data: techStack.database },
  { key: 'aiml', label: 'AI / ML', data: techStack.aiml },
  { key: 'tools', label: 'TOOLS & DEVOPS', data: techStack.tools },
  { key: 'cloud', label: 'CLOUD & PLATFORMS', data: techStack.cloud },
];

function TechIcon({ name, icon }: { name: string; icon: string }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-1.5 group"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center p-2 shadow-sm group-hover:border-[#F97316] group-hover:shadow-orange-100 group-hover:shadow-md transition-all">
        <img src={icon} alt={name} className="w-8 h-8 object-contain" onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }} />
      </div>
      <span className="text-xs text-gray-500 font-medium text-center leading-tight">{name}</span>
    </motion.div>
  );
}

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: '-80px' });

  return (
    <>
      {/* Tech Stack Section */}
      <section id="techstack" ref={ref} className="py-16 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100">
            <div className="grid md:grid-cols-3 gap-10">
              {/* Left: Label & text */}
              <motion.div
                className="md:col-span-1"
                variants={fadeUp} custom={0}
                initial="hidden" animate={inView ? 'visible' : 'hidden'}
              >
                <div className="section-label mb-4">TECH STACK</div>
                <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mb-4">
                  TECHNOLOGIES
                  <br />I USE TO BUILD
                  <br />IMPACTFUL
                  <br />
                  <span className="text-[#F97316]">SOLUTIONS.</span>
                  <span className="inline-flex w-8 h-8 bg-black rounded-full items-center justify-center ml-2 text-white text-sm align-middle">✦</span>
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  A modern tech stack that helps me build fast, scalable, and high-performance applications.
                </p>
                <div className="flex items-center gap-3">
                  <motion.button
                    className="btn-outline text-sm"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    VIEW ALL SKILLS
                  </motion.button>
                  <motion.button
                    className="w-10 h-10 bg-[#F97316] rounded-xl flex items-center justify-center text-white"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.button>
                </div>
              </motion.div>

              {/* Right: Tech grid */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {categories.slice(0, 6).map((cat, ci) => (
                  <motion.div
                    key={cat.key}
                    variants={fadeUp} custom={ci + 1}
                    initial="hidden" animate={inView ? 'visible' : 'hidden'}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className="orange-dot" />
                      <span className="text-xs font-bold tracking-widest text-gray-800">{cat.label}</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {cat.data.map((tech) => (
                        <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" ref={processRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left text */}
            <motion.div
              variants={fadeUp} custom={0}
              initial="hidden" animate={processInView ? 'visible' : 'hidden'}
            >
              <div className="section-label mb-4">MY PROCESS</div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
                HOW I TURN IDEAS
                <br />INTO{' '}
                <span className="text-[#F97316]">SOLUTIONS.</span>
                <span className="inline-flex w-9 h-9 bg-black rounded-full items-center justify-center ml-2 text-white text-sm align-middle">→</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                A clear, collaborative process that ensures quality, transparency, and results at every step.
              </p>
              <div className="flex items-center gap-3">
                <motion.button
                  className="btn-outline text-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  LET&apos;S WORK TOGETHER
                </motion.button>
                <motion.button
                  className="w-10 h-10 bg-[#F97316] rounded-xl flex items-center justify-center text-white"
                  whileHover={{ scale: 1.1 }}
                >
                  <ArrowUpRight size={18} />
                </motion.button>
              </div>
            </motion.div>

            {/* Process cards */}
            <div className="lg:col-span-2 relative">
              {/* Curved connector line */}
              <div className="absolute top-16 left-12 right-12 h-[2px] border-t-2 border-dashed border-orange-200 hidden md:block z-0" />
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                {[
                  { num: '01', icon: '🔍', title: 'Discover', desc: 'Understand your goals, research, and analyze requirements deeply.' },
                  { num: '02', icon: '✏️', title: 'Plan & Design', desc: 'Plan the structure, design UI/UX, and create a clear roadmap.' },
                  { num: '03', icon: '</>', title: 'Develop', desc: 'Build scalable, secure, and high-performance solutions.' },
                  { num: '04', icon: '🚀', title: 'Deliver & Support', desc: 'Test, deploy, and provide ongoing support for long-term success.' },
                ].map((step, i) => (
                  <motion.div
                    key={step.num}
                    className="flex flex-col gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-all"
                    variants={fadeUp} custom={i + 1}
                    initial="hidden" animate={processInView ? 'visible' : 'hidden'}
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-xl">
                        {step.icon}
                      </div>
                      <span className="text-[#F97316] font-black text-sm">{step.num}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="h-0.5 flex-1 bg-gray-100 rounded" />
                      <motion.div
                        className="w-6 h-6 bg-[#F97316] rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.2 }}
                      >
                        <ArrowUpRight size={12} className="text-white" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
