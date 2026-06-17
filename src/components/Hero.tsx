'use client';
import "../app/globals.css";
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';
import DashboardCards from "./DashboardCards";

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="fixed top-0 left-0 w-full h-screen bg-white overflow-hidden z-0">

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

      <div className="relative max-w-[1280px] mx-auto w-full flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-6">

        {/* Left Column */}
        <motion.div
          className="absolute left-[40px] top-10 lg:left-14 z-70 lg:top-9 w-[320px] h-[340px] lg:w-auto lg:h-auto drop-shadow-[5px_5px_2px_rgba(0,0,0,0.08)]"
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
                <h1 className="name-piyush font-archivo font-semibold text-[60px] lg:text-[130px] xl:text-[134px] leading-[0.9] text-[#ffffff] tracking-normal [-webkit-text-stroke:2px_#FF9E7C]">
                  PIYU<span className="lg:[-webkit-text-stroke:2px_#FF9E7C]">SH</span>
                </h1>
                <h1 className="font-archivo font-semibold text-[34px] lg:text-[80px] xl:text-[77px] leading-[0.9] text-[#FF9E7C] tracking-normal">
                  NINAWE
                </h1>
              </div>
            </div>
          </div>

        </motion.div>

        {/* <motion.div
          className="absolute left-20 z-30 bottom-20"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        >
          <div className='flex flex-col w-full gap-[50px] items-start z-10'>
            <div className="flex flex-row gap-3 justify-center">
              <span className='border-l-[3px] border-[#FF9E7C] pl-8'></span>
              <p className="text-black font-archivo text-[14px] md:text-[15px] leading-relaxed max-w-[300px]">
                Our mission is to elevate your vision through groundbreaking design combining artistic flair with strategic insight to create memorable experiences that leave a lasting impression.
              </p>
            </div>

            <motion.button
              onClick={() => scrollTo('#contact')}
              className=""
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className='flex items-center justify-center bg-[#FF9E7C] text-white rounded-2xl px-4 py-8 w-[150px] h-[50px] gap-5 shadow-lg group'>
                <span className="font-archivo font-semibold text-lg">Hire Me</span>
                <div className="bg-white text-[#FF9E7C] rounded-full w-10 h-10 flex items-center justify-center shrink-0 group-hover:rotate-45 transition-transform">
                  <FiArrowUpRight size={22} />
                </div>
              </div>
            </motion.button>
          </div>
        </motion.div> */}

        <div className='w-[19%] h-[150px] lg:h-[40vh]'>

          <motion.div
            className="md:hidden absolute left-8 z-70 -bottom-14"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="flex flex-row lg:flex-col items-start w-full gap-2 lg:gap-0">
              <h2 className="font-allerta text-[16px] lg:text-[50px] xl:text-[70px] leading-[1.1] text-black">AI/ML</h2>
              <h2 className="font-allerta text-[16px] lg:text-[50px] xl:text-[70px] leading-[1.1] text-black">ENGINEER</h2>
              <h2 className="font-allerta text-[16px] lg:text-[50px] xl:text-[70px] leading-[1.1] text-[#FF9E7C]">&</h2>
            </div>
            <div className="flex flex-row lg:flex-col items-start w-full gap-2 lg:gap-0">
              <h2 className="font-allerta text-[16px] lg:text-[50px] xl:text-[70px] leading-[1.1] text-black tracking-tight whitespace-nowrap">FULL STACK</h2>
              <h2 className="font-allerta text-[16px] lg:text-[50px] xl:text-[70px] leading-[1.1] text-black">DEVELOPER</h2>
            </div>


          </motion.div>

          <motion.div
            className="absolute left-8 lg:left-14 z-70 lg:bottom-0 -bottom-88"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <div className='flex flex-col w-full lg:gap-[40px] gap-[30px] items-start z-10'>
              {/* <div className="flex flex-row gap-3 justify-center">
                <span className='border-l-[3px] border-[#FF9E7C]'></span>
                <p className="text-black font-archivo text-[14px] md:text-[15px] leading-relaxed max-w-[280px]">
                  Our mission is to elevate your vision through groundbreaking design combining artistic flair with strategic insight to create memorable experiences that leave a lasting impression.
                </p>
              </div> */}
              <DashboardCards/>

              {/* <motion.div
                onClick={() => scrollTo('#contact')}
                className="cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className='flex items-center justify-center bg-[#FF9E7C] text-white lg:rounded-2xl rounded-xl px-4 py-[5px] lg:gap-4 gap-3 lg:shadow-lg shadow-md group'>
                  <span className="font-archivo font-semibold lg:text-lg text-md">Hire Me</span>
                  <div className="bg-white text-[#FF9E7C] rounded-full lg:w-7 lg:h-7 w-6 h-6 flex items-center justify-center shrink-0 group-hover:rotate-45 transition-transform">
                    <FiArrowUpRight size={18} />
                  </div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>

        </div>

        {/* Center Column */}
        <motion.div
          className="relative w-full xl:w-auto z-60 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
        >
          {/* Main blob background container */}
          <div className="relative w-[320px] h-[340px] lg:w-[500px] lg:h-[600px] xl:w-[41vw] xl:h-[90vh] xl:max-w-[480px] xl:max-h-[500px] drop-shadow-[10px_5px_5px_rgba(0,0,0,0.27)]">
            {/* Center Background Image */}
            {/* <Image
            src="/Hero_section_center_box.png"
            alt="Background Blob"
            width={647}
            height={700}
            className="object-contain"
            priority
          /> */}

            {/* <motion.div
              className="lg:hidden absolute left-[10px] -top-[18px] w-[calc(100%-20px)] h-[200px] z-30"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            >
              <div className='flex flex-col w-full xl:w-auto'>
                <div className='flex flex-col w-full lg:gap-[5px] gap-[10px] items-start'>
                  <div className="flex items-center lg:gap-3 gap-2 mb-4">
                    <span className="text-[#FF9E7C] font-archivo font-semibold text-[18px] md:text-[20px] uppercase tracking-widest leading-none">HELLO, I&apos;M</span>
                    <div className="lg:h-[3px] w-[50px] h-[2px] md:w-20 bg-[#FF9E7C] rounded-full"></div>
                  </div>

                  <div className="flex flex-col -mt-2 md:-mt-4 mb-0">
                    <h1 className="name-piyush font-archivo font-semibold text-[60px] lg:text-[130px] xl:text-[134px] leading-[0.9] text-transparent tracking-normal [-webkit-text-stroke:2px_white] lg:[-webkit-text-stroke:3px_black]">
                      PIYUSH
                    </h1>
                    <h1 className="font-archivo font-semibold text-[34px] lg:text-[80px] xl:text-[77px] leading-[0.9] text-white lg:text-black tracking-normal">
                      NINAWE
                    </h1>
                  </div>
                </div>
              </div>

            </motion.div> */}


            {/* User Image */}
            <div className="absolute inset-x-0 bottom-[0px] flex justify-center h-[100%] w-[100%] left-[0%] pointer-events-none">
              <Image
                src="/Hero_bg2.png"
                alt="Piyush Ninawe"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
            {/* Top Right Black Circle with Star */}
            <div className="absolute top-[3px] -right-[0px] lg:top-0 lg:right-[2px] w-[12.4%] h-auto aspect-square lg:w-15 lg:h-15 bg-black rounded-full flex items-center justify-center z-30 shadow-xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="w-[65%] h-[65%] relative flex items-center justify-center"
              >
                <Image src="/star.png" alt="Star" fill className="object-contain lg:w-[56px] lg:h-[56px]" />
              </motion.div>
            </div>

            {/* Social Icons Stack */}
            <div className="absolute left-[2px] lg:left-2 bottom-0 lg:bottom-2 w-[12.5%] md:w-auto h-auto md:h-auto flex flex-col lg:gap-2 gap-1 z-50 ">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-[100%] h-aoto aspect-square lg:w-[56px] lg:h-[56px] bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <FiGithub size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-[100%] h-aoto aspect-square lg:w-[56px] lg:h-[56px] bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <FiLinkedin size={18} />
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }} className="w-[100%] h-aoto aspect-square lg:w-[56px] lg:h-[56px] bg-[#FF9E7C] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <FiArrowUpRight size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="hidden lg:flex flex-col z-60 w-full xl:w-auto items-start mt-12 xl:mt-0"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <div className="flex flex-row lg:flex-col items-start w-full gap-2 lg:gap-0">
            <h2 className="font-allerta text-[28px] lg:text-[50px] xl:text-[52px] leading-[1.1] text-black">AI/ML</h2>
            <h2 className="font-allerta text-[28px] lg:text-[50px] xl:text-[52px] leading-[1.1] text-black">ENGINEER</h2>
          </div>
          <h2 className="font-allerta text-[28px] lg:text-[50px] xl:text-[52px] leading-[1.1] text-[#FF9E7C]">&</h2>
          <div className="flex flex-row lg:flex-col items-start w-full gap-2 lg:gap-0">
            <h2 className="font-allerta text-[28px] lg:text-[50px] xl:text-[52px] leading-[1.1] text-black tracking-tight whitespace-nowrap">FULL STACK</h2>
            <h2 className="font-allerta text-[28px] lg:text-[50px] xl:text-[52px] leading-[1.1] text-black">DEVELOPER</h2>
          </div>


        </motion.div>

      </div>
      </div>
    </section >
  );
}
