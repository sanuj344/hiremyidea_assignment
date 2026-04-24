import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProductSlider from './ProductSlider';
import FloatingBackground from './FloatingBackground';

const PhoneMockup = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="relative w-full flex flex-col items-center mt-12 py-20 px-6">
      {/* Background Animated items */}
      <FloatingBackground />

      {/* Main Container with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10"
      >
        {/* Floating Animation Wrapper */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ 
            scale: 1.03, 
            transition: { duration: 0.3 } 
          }}
          className="relative"
        >
          {/* Shadow glow under phone */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/5 blur-2xl rounded-[100%]"></div>

          {/* The Phone Container */}
          <div className="relative w-[340px] h-[700px] bg-white rounded-[50px] border-[14px] border-[#e8efe0] shadow-2xl overflow-hidden flex flex-col items-center">
            {/* Dynamic Island / Notch area */}
            <div className="absolute top-0 w-full flex justify-center z-20">
              <div className="w-[124px] h-[30px] bg-black rounded-b-3xl relative mt-[-2px]">
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#111] rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#222] rounded-full blur-[0.5px]"></div>
                </div>
              </div>
            </div>

            {/* Content Slider */}
            <ProductSlider />
          </div>

          {/* Side Decorative Cards - Animated for Parallax effect */}
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -translate-y-1/2 -left-32 w-[140px] h-[140px] bg-white/40 rounded-3xl opacity-50 shadow-sm border border-[#e8efe0] hidden md:block backdrop-blur-md overflow-hidden"
          >
             <div className="w-full h-full bg-[#f4f7ee]/50 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white opacity-50"></div>
             </div>
          </motion.div>
          <motion.div 
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -translate-y-1/2 -right-32 w-[140px] h-[140px] bg-white/40 rounded-3xl opacity-50 shadow-sm border border-[#e8efe0] hidden md:block backdrop-blur-md overflow-hidden"
          >
             <div className="w-full h-full bg-[#f4f7ee]/50 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white opacity-50"></div>
             </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PhoneMockup;
