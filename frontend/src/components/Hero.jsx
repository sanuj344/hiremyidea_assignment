import React from 'react';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-6 flex flex-col items-center text-center animate-fade-in-up">
      {/* Avatar Group */}
      <div className="flex items-center gap-3 mb-8">
        <div className="flex -space-x-2">
          {/* Mock Avatars */}
          <div className="w-8 h-8 rounded-full border-2 border-olive-50 overflow-hidden bg-gray-200">
            <img src="https://i.pravatar.cc/100?img=1" alt="avatar" className="w-full h-full object-cover" />
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-olive-50 overflow-hidden bg-gray-200">
            <img src="https://i.pravatar.cc/100?img=2" alt="avatar" className="w-full h-full object-cover" />
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-olive-50 overflow-hidden bg-gray-200">
            <img src="https://i.pravatar.cc/100?img=3" alt="avatar" className="w-full h-full object-cover" />
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-olive-50 overflow-hidden bg-gray-200 flex items-center justify-center text-[10px] font-bold text-olive-900 absolute opacity-80 backdrop-blur-sm grayscale">
            <img src="https://i.pravatar.cc/100?img=4" alt="avatar" className="w-full h-full object-cover grayscale opacity-60" />
            <span className="absolute z-10 text-white font-semibold">3k+</span>
          </div>
        </div>
        <span className="text-olive-900/60 text-[14.5px] font-medium tracking-tight">
          Trusted by thousands of healthy families
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl lg:text-[72px] leading-[1.05] font-bold text-olive-900 tracking-[-0.03em] max-w-4xl mx-auto mb-6" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
        The Safest Way to<br className="hidden md:block" /> Shop for Groceries
      </h1>

      {/* Subtext */}
      <p className="text-olive-900/60 text-lg md:text-[19px] leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
        Use the Olive Food Scanner App to Instantly Eliminate<br className="hidden md:block" /> Harmful Ingredients from Your Family's Diet and Get<br className="hidden md:block" /> Expert-Backed Food Insights
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <button className="bg-olive-900 hover:bg-olive-800 text-white px-6 py-3.5 rounded-full text-[16px] font-medium transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:-translate-y-0.5">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.83 1.25.04 2.28.53 2.92 1.34-2.52 1.54-2.08 4.7.43 5.75-.58 1.48-1.28 2.92-2.13 4.19-.23.28-.5.5-.8.72zm-4.75-13.6c-.22-2.12 1.62-3.9 3.65-4.08.28 2.25-1.9 3.99-3.65 4.08z" />
          </svg>
          Download for iOS
        </button>
        <button className="text-olive-900 text-[16px] font-semibold flex items-center gap-2 hover:opacity-80 transition-opacity group">
          Join the Olive Community
          <span className="text-xl transition-transform group-hover:translate-x-1">&rarr;</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
