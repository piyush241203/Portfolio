'use client';
import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { clients, testimonials } from '@/lib/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

const clientIcons: Record<string, string> = {
  Airflow: '▲',
  Nexcent: '◈',
  Virelo: '⬡',
  Snaptech: '⚡',
  Clarity: 'Ⓒ',
  Pixelsy: '✿',
};

export default function Clients() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const feedbackRef = useRef(null);
  const feedbackInView = useInView(feedbackRef, { once: true, margin: '-80px' });

  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <>
      {/* Clients logos section */}
      <section id="clients" ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="section-label mb-8"
            variants={fadeUp} custom={0}
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            SOME OF MY CLIENTS
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
            initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                className="flex items-center justify-center gap-3 p-6 bg-[#F8F8F8] rounded-2xl border border-gray-100 hover:border-[#F97316] hover:bg-orange-50 transition-all group cursor-pointer"
                variants={fadeUp} custom={i + 1}
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <span className="text-xl font-bold text-gray-700 group-hover:text-[#F97316] transition-colors">
                  {clientIcons[client.name]}
                </span>
                <span className="font-bold text-sm text-gray-700 group-hover:text-gray-900">{client.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials section */}
      <section ref={feedbackRef} className="py-20 bg-[#F5F5F5] relative overflow-hidden">
        {/* Decorative X */}
        <div className="absolute top-8 right-8 text-gray-300 text-5xl font-light opacity-40 select-none">✕</div>
        {/* Dot pattern */}
        <div className="dot-pattern absolute bottom-12 right-16 w-24 h-20 opacity-20" />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="section-label mb-12"
            variants={fadeUp} custom={0}
            initial="hidden" animate={feedbackInView ? 'visible' : 'hidden'}
          >
            CLIENTS FEEDBACK
          </motion.div>

          <div className="relative flex items-center gap-8">
            {/* Prev button */}
            <motion.button
              onClick={prev}
              className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#F97316] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Testimonial content */}
            <div className="flex-1 grid lg:grid-cols-2 gap-10 items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  {/* Quote mark */}
                  <span className="text-[#F97316] text-8xl font-black leading-none block mb-2" style={{ lineHeight: '0.6' }}>&ldquo;</span>

                  <p className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 mb-6">
                    {t.quote}{' '}
                    <span className="text-[#F97316] italic">{t.highlight}</span>
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 border-l-4 border-gray-800 pl-4 mb-4">
                    <div>
                      <div className="font-bold text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.role}</div>
                    </div>
                  </div>

                  {/* Signature squiggle */}
                  <svg width="120" height="30" viewBox="0 0 120 30" className="text-gray-400">
                    <path d="M5 20 Q20 8 35 20 Q50 32 65 20 Q80 8 95 20 Q108 30 115 18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </motion.div>
              </AnimatePresence>

              {/* Right: Photo with orange asterisk */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current + 'img'}
                  className="relative flex items-center justify-center h-64"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Orange asterisk/star shape */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <svg viewBox="0 0 200 200" width="240" height="240">
                      <path
                        d="M100 10 L120 80 L190 60 L140 110 L190 160 L120 140 L100 200 L80 140 L10 160 L60 110 L10 60 L80 80 Z"
                        fill="#F97316"
                        opacity="0.9"
                      />
                    </svg>
                  </motion.div>

                  {/* Person photo placeholder */}
                  <div className="relative z-10 w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-200 flex items-end justify-center">
                    <svg viewBox="0 0 100 110" width="80%" className="text-gray-400">
                      <ellipse cx="50" cy="38" rx="22" ry="24" fill="#9CA3AF" />
                      <path d="M5 110 Q5 70 50 70 Q95 70 95 110Z" fill="#9CA3AF" />
                    </svg>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next button */}
            <motion.button
              onClick={next}
              className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#F97316] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-[#F97316]' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            className="flex items-center justify-center gap-2 mt-8 text-sm text-gray-500"
            variants={fadeUp} custom={2}
            initial="hidden" animate={feedbackInView ? 'visible' : 'hidden'}
          >
            <span className="text-[#F97316] text-lg">✦</span>
            Thanks to amazing clients for trusting and supporting my work.
          </motion.div>
        </div>
      </section>
    </>
  );
}
