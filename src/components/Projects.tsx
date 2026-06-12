'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' as const },
  }),
};

const projects = [
  {
    year: '2023',
    title: 'Personal',
    titleAccent: 'AI',
    titleEnd: 'Assistant',
    desc: 'An AI-powered assistant that helps users manage tasks, get answers, and boost daily productivity.',
    category: 'AI/ML',
    bgColor: '#F8F8F8',
    mockupBg: '#1A1A2E',
    mockupText: 'Hello, Piyush\nHow can I help\nyou today?',
    size: 'tall',
  },
  {
    year: '2023',
    title: 'Training &',
    titleAccent: 'Placement',
    titleEnd: 'Portal',
    desc: 'A comprehensive platform that connects students with placement opportunities and training resources.',
    category: 'Web App',
    bgColor: '#F8F8F8',
    mockupBg: '#F0F4FF',
    size: 'wide',
    isDashboard: true,
  },
  {
    year: '2023',
    title: 'Business',
    titleAccent: 'Portfolio',
    titleEnd: 'Websites',
    desc: 'Modern, responsive portfolio websites designed to help businesses stand out and grow their online presence.',
    category: 'Web',
    bgColor: '#F8F8F8',
    mockupBg: '#0D0D1A',
    size: 'tall',
  },
  {
    year: '2023',
    title: 'Age &',
    titleAccent: 'Gender',
    titleEnd: 'Detection',
    desc: 'A machine learning application that detects age and gender from images with high accuracy.',
    category: 'AI/ML',
    bgColor: '#F8F8F8',
    mockupBg: '#F5F5F5',
    size: 'wide',
    isAI: true,
  },
];

function MockupMobile() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-28 h-48 bg-[#1a1a2e] rounded-2xl shadow-xl flex flex-col overflow-hidden border border-gray-700">
        <div className="bg-gray-800 h-6 flex items-center justify-center">
          <div className="w-12 h-1 bg-gray-600 rounded-full" />
        </div>
        <div className="flex-1 p-2 flex flex-col gap-1.5">
          <div className="text-[8px] text-gray-400 font-medium">Hello, Piyush</div>
          <div className="text-[9px] font-bold text-white leading-tight">How can I help<br/>
            <span className="text-[#F97316]">you today?</span>
          </div>
          <div className="mt-1 bg-gray-800 rounded-lg px-2 py-1">
            <div className="text-[6px] text-gray-400">Ask me anything...</div>
          </div>
          <div className="mt-1 text-[6px] text-gray-500 font-medium">Suggestions</div>
          {['Summarize this article', 'Plan my day'].map((s, i) => (
            <div key={i} className="bg-gray-800 rounded px-2 py-1 flex items-center gap-1">
              <div className="w-2 h-2 bg-[#F97316] rounded-full flex-shrink-0" />
              <span className="text-[5px] text-gray-300">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MockupDashboard() {
  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <div className="w-full max-w-[200px] bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
        <div className="bg-gray-100 h-5 flex items-center gap-1 px-2">
          {['bg-red-400', 'bg-yellow-400', 'bg-green-400'].map((c, i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full ${c}`} />
          ))}
          <div className="flex-1 ml-2 bg-gray-200 h-1.5 rounded-full" />
        </div>
        <div className="p-2">
          <div className="text-[7px] font-bold text-gray-700 mb-1">Dashboard</div>
          <div className="grid grid-cols-4 gap-1 mb-2">
            {['1,248', '87', '56', '342'].map((v, i) => (
              <div key={i} className="bg-gray-50 rounded p-1 border border-gray-100">
                <div className="text-[5px] text-gray-400">Stat {i+1}</div>
                <div className="text-[6px] font-bold text-gray-700">{v}</div>
              </div>
            ))}
          </div>
          <div className="h-8 bg-gray-50 rounded flex items-end px-1 gap-0.5 overflow-hidden">
            {[3,5,4,7,6,8,5,9,7,6,8].map((h, i) => (
              <div key={i} className="flex-1 bg-blue-200 rounded-t" style={{ height: `${h * 10}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupDesktop() {
  return (
    <div className="w-full h-full flex items-center justify-center p-2">
      <div className="w-full max-w-[200px] bg-[#0D0D1A] rounded-xl shadow-xl overflow-hidden border border-gray-700">
        <div className="bg-gray-800 h-5 flex items-center gap-2 px-3">
          <div className="flex gap-1">
            {['bg-red-400', 'bg-yellow-400', 'bg-green-400'].map((c, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${c}`} />
            ))}
          </div>
          <div className="flex gap-2 text-[5px] text-gray-400">
            {['Home', 'About', 'Services', 'Work', 'Contact'].map(l => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </div>
        <div className="p-3">
          <div className="text-[8px] font-black text-white leading-tight mb-2">
            DIGITAL SOLUTIONS<br/>FOR MODERN<br/>BUSINESSES
          </div>
          <div className="w-12 h-3 bg-[#F97316] rounded text-[4px] text-white flex items-center justify-center font-bold">
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupAI() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-3 p-3">
      <div className="w-16 h-20 bg-gray-200 rounded-xl overflow-hidden flex items-end justify-center">
        <svg viewBox="0 0 60 80" className="w-full">
          <ellipse cx="30" cy="25" rx="16" ry="18" fill="#9CA3AF" />
          <path d="M5 80 Q5 52 30 52 Q55 52 55 80Z" fill="#9CA3AF" />
        </svg>
      </div>
      <div className="bg-white rounded-xl shadow-md p-2 text-left flex-1">
        <div className="text-[6px] text-gray-400 mb-1">Analysis Result</div>
        <div>
          <div className="text-[5px] text-gray-400">Age</div>
          <div className="text-[9px] font-bold">26 <span className="text-[5px] font-normal text-gray-400">years</span></div>
        </div>
        <div className="mt-1">
          <div className="text-[5px] text-gray-400">Gender</div>
          <div className="text-[9px] font-bold">♂ Male</div>
        </div>
        <div className="mt-1">
          <div className="text-[5px] text-gray-400 mb-0.5">Confidence Score</div>
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: '92%' }} />
          </div>
          <div className="text-[5px] text-right text-gray-400 mt-0.5">92%</div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          <motion.div
            variants={fadeUp} custom={0}
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            <div className="section-label mb-4">FEATURED WORKS</div>
            <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
              THINGS I&apos;VE
              <br />BUILT{' '}
              <span className="inline-flex w-14 h-14 bg-black rounded-full items-center justify-center text-white text-2xl align-middle">
                ✦
              </span>
            </h2>
          </motion.div>
          <motion.div
            className="flex flex-col justify-end"
            variants={fadeUp} custom={1}
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            {/* Dot pattern decoration */}
            <div className="dot-pattern w-24 h-16 opacity-30 mb-4 ml-auto" />
            <p className="text-gray-500 leading-relaxed">
              Here are some of the projects I&apos;ve worked on.
              <br />Each one was crafted with purpose and precision.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid - 2 col layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {[projects[0], projects[2]].map((project, i) => (
              <motion.div
                key={project.title + i}
                className="rounded-3xl bg-[#F8F8F8] overflow-hidden border border-gray-100 hover:border-orange-100 hover:shadow-lg transition-all group"
                variants={fadeUp} custom={i + 2}
                initial="hidden" animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -4 }}
              >
                {/* Mockup area */}
                <div className="h-52 relative overflow-hidden">
                  {i === 0 ? <MockupMobile /> : <MockupDesktop />}
                  <div className="dot-pattern absolute top-2 right-2 w-16 h-16 opacity-20" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="orange-dot" />
                      <span className="text-xs font-bold text-gray-400">{project.year}</span>
                    </div>
                    <motion.button
                      className="w-9 h-9 bg-black rounded-xl flex items-center justify-center text-white"
                      whileHover={{ scale: 1.1, backgroundColor: '#F97316' }}
                    >
                      <ArrowUpRight size={16} />
                    </motion.button>
                  </div>
                  <h3 className="text-xl font-black mb-2 leading-tight">
                    {project.title}{' '}
                    <span className="text-[#F97316]">{project.titleAccent}</span>
                    <br />
                    {project.titleEnd}
                  </h3>
                  <div className="w-8 h-0.5 bg-[#F97316] mb-3" />
                  <p className="text-gray-500 text-sm leading-relaxed">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {[projects[1], projects[3]].map((project, i) => (
              <motion.div
                key={project.title + i}
                className="rounded-3xl bg-[#F8F8F8] overflow-hidden border border-gray-100 hover:border-orange-100 hover:shadow-lg transition-all group"
                variants={fadeUp} custom={i + 4}
                initial="hidden" animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -4 }}
              >
                {/* Mockup area */}
                <div className="h-52 relative overflow-hidden">
                  {i === 0 ? <MockupDashboard /> : <MockupAI />}
                  <div className="dot-pattern absolute top-2 right-2 w-16 h-16 opacity-20" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="orange-dot" />
                      <span className="text-xs font-bold text-gray-400">{project.year}</span>
                    </div>
                    <motion.button
                      className="w-9 h-9 bg-black rounded-xl flex items-center justify-center text-white"
                      whileHover={{ scale: 1.1, backgroundColor: '#F97316' }}
                    >
                      <ArrowUpRight size={16} />
                    </motion.button>
                  </div>
                  <h3 className="text-xl font-black mb-2 leading-tight">
                    {project.title}{' '}
                    <span className="text-[#F97316]">{project.titleAccent}</span>
                    <br />
                    {project.titleEnd}
                  </h3>
                  <div className="w-8 h-0.5 bg-[#F97316] mb-3" />
                  <p className="text-gray-500 text-sm leading-relaxed">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* See All Works */}
        <motion.div
          className="flex justify-center mt-12"
          variants={fadeUp} custom={6}
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
        >
          <motion.button
            className="flex items-center gap-3 text-sm font-bold tracking-widest group"
            whileHover={{ x: 4 }}
          >
            SEE ALL WORKS
            <span className="flex items-center gap-1 text-[#F97316] group-hover:gap-2 transition-all">
              <span className="text-lg">→</span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
