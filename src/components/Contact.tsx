'use client';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { contactInfo, serviceOptions } from '@/lib/data';
import { Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { FiDribbble, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { SiBehance } from 'react-icons/si';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

const contactItems = [
  { icon: <Mail size={18} />, label: 'Email', value: 'piyushninawe17@gmail.com', bgDark: true },
  { icon: <Phone size={18} />, label: 'Phone', value: '+91 9175679065', bgDark: false },
  { icon: <MapPin size={18} />, label: 'Location', value: 'Nagpur, India', bgDark: true },
  { icon: <Send size={18} />, label: 'Available for', value: 'New Projects', bgDark: false },
];

const socialLinks = [
  { icon: <FiDribbble size={18} />, label: 'Dribbble', href: 'https://dribbble.com/' },
  { icon: <FiInstagram size={18} />, label: 'Instagram', href: 'https://instagram.com/' },
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', href: 'https://linkedin.com/' },
  { icon: <SiBehance size={18} />, label: 'Behance', href: 'https://behance.net/' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" ref={ref} className="py-24 bg-[#F8F8F8] relative overflow-hidden">
        {/* Cloud/blob decoration */}
        <div className="absolute top-0 right-0 w-64 h-40 bg-gray-200/50 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Contact Info */}
            <motion.div
              variants={fadeUp} custom={0}
              initial="hidden" animate={inView ? 'visible' : 'hidden'}
            >
              <div className="section-label mb-6">CONTACT ME</div>
              <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-4">
                LET&apos;S BUILD
                <br />
                SOMETHING{' '}
                <span className="text-[#F97316]">AMAZING</span>
                <span className="inline-flex w-12 h-12 bg-black rounded-full items-center justify-center ml-3 text-white text-lg align-middle">✦</span>
              </h2>

              <p className="text-gray-500 leading-relaxed mb-10">
                Have a project in mind or just want to say hello?
                <br />
                I&apos;d love to hear from you. Fill out the form or
                <br />
                reach out through any of the channels below.
              </p>

              {/* Contact Info Cards */}
              <div className="flex flex-col gap-3 mb-10">
                {contactItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-orange-200 transition-all"
                    variants={fadeUp} custom={i + 1}
                    initial="hidden" animate={inView ? 'visible' : 'hidden'}
                    whileHover={{ x: 4 }}
                  >
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                      item.bgDark ? 'bg-black text-white' : 'bg-[#F97316] text-white'
                    }`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">{item.label}</div>
                      <div className="font-semibold text-sm">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Dot pattern + handwritten text */}
              <div className="relative">
                <div className="dot-pattern w-20 h-16 opacity-30" />
                <div className="absolute top-0 right-0 text-gray-600 font-black text-2xl leading-tight" style={{ fontFamily: 'cursive' }}>
                  Let&apos;s turn
                  <br />your ideas into
                  <br />impact.
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
              variants={fadeUp} custom={1}
              initial="hidden" animate={inView ? 'visible' : 'hidden'}
            >
              <h3 className="text-lg font-black mb-1">SEND ME A MESSAGE</h3>
              <div className="w-8 h-0.5 bg-[#F97316] mb-6" />

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name & Email */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-700 mb-1.5 block">
                      Name <span className="text-[#F97316]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Hello..."
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border-b-2 border-gray-200 focus:border-[#F97316] outline-none py-2 text-sm transition-colors bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-700 mb-1.5 block">
                      Email <span className="text-[#F97316]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Where can I reply"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border-b-2 border-gray-200 focus:border-[#F97316] outline-none py-2 text-sm transition-colors bg-transparent"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1.5 block">Company / Website</label>
                  <input
                    type="text"
                    placeholder="Your company or website?"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full border-b-2 border-gray-200 focus:border-[#F97316] outline-none py-2 text-sm transition-colors bg-transparent"
                  />
                </div>

                {/* Service tags */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-3 block">
                    What&apos;s in your mind? <span className="text-[#F97316]">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((s) => (
                      <motion.button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                          selectedServices.includes(s)
                            ? 'bg-black text-white border-black'
                            : 'border-gray-300 text-gray-600 hover:border-[#F97316] hover:text-[#F97316]'
                        }`}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        {s}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-semibold text-gray-700 mb-1.5 block">
                    Your Message <span className="text-[#F97316]">*</span>
                  </label>
                  <textarea
                    placeholder="Tell me more about your project..."
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border-b-2 border-gray-200 focus:border-[#F97316] outline-none py-2 text-sm transition-colors bg-transparent resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="flex justify-end mt-2">
                  <motion.button
                    type="submit"
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                      submitted
                        ? 'bg-green-500 text-white'
                        : 'bg-black text-white hover:bg-[#F97316]'
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {submitted ? '✓ Message Sent!' : <>Send Message <ArrowUpRight size={16} /></>}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Social bar */}
        <motion.div
          className="mt-16 bg-black mx-6 rounded-2xl py-4 px-8 flex flex-wrap items-center justify-center gap-4 max-w-7xl lg:mx-auto"
          variants={fadeUp} custom={5}
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
        >
          <span className="text-white font-bold text-xs tracking-widest flex items-center gap-2">
            LET&apos;S CONNECT
            <span className="block w-8 h-0.5 bg-[#F97316]" />
          </span>
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-white text-sm font-medium hover:bg-[#F97316] transition-all"
              whileHover={{ y: -2, scale: 1.04 }}
            >
              {social.icon}
              {social.label}
            </motion.a>
          ))}
        </motion.div>
      </section>
    </>
  );
}
