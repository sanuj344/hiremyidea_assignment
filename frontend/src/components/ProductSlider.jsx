import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Share } from 'lucide-react';

const products = [
  {
    name: "Fig and Olive Crackers, Fig and Olive",
    brand: "Lesley Stowe",
    score: "46/100",
    status: "Avoid",
    statusColor: "bg-[#d65745]",
    description: "This product's low score mainly comes from the processed sugars, like honey and brown sugar, which can impact your family's health.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
    thumbnailColor: "bg-[#3d2740]",
    borderColor: "border-[#b99f66]"
  },
  {
    name: "Pure Orange Juice, No Pulp",
    brand: "Simple Squeeze",
    score: "82/100",
    status: "Good",
    statusColor: "bg-[#4caf50]",
    description: "Excellent source of Vitamin C with no added sugars. High natural fructose is the only moderation factor.",
    image: "https://images.unsplash.com/photo-1621506289937-4c721a939947?auto=format&fit=crop&q=80&w=400",
    thumbnailColor: "bg-[#fb8c00]",
    borderColor: "border-[#ff9800]"
  },
  {
    name: "Organic Avocado, Large",
    brand: "Valley Farms",
    score: "98/100",
    status: "Excellent",
    statusColor: "bg-[#2e7d32]",
    description: "Packed with healthy monounsaturated fats and essential nutrients. A perfect addition to any healthy meal.",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=400",
    thumbnailColor: "bg-[#8bc34a]",
    borderColor: "border-[#4caf50]"
  },
  {
    name: "Chocolate Protein Bar",
    brand: "FuelUp",
    score: "54/100",
    status: "Fair",
    statusColor: "bg-[#fbc02d]",
    description: "Contains good protein but high in sugar alcohols and artificial sweeteners which may cause digestive issues.",
    image: "https://images.unsplash.com/photo-1622467820347-3860bb4d1abb?auto=format&fit=crop&q=80&w=400",
    thumbnailColor: "bg-[#5d4037]",
    borderColor: "border-[#795548]"
  }
];

const ProductSlider = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const product = products[index];

  return (
    <div 
      className="w-full flex-grow flex flex-col pt-14 pb-8 overflow-x-hidden no-scrollbar bg-[#fafaf9]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col h-full"
        >
          {/* Main Image Slider */}
          <div className="relative w-full h-[220px] mb-4 mt-2 px-6">
            <div className="w-[220px] h-[220px] mx-auto bg-white rounded-3xl shadow-md overflow-hidden p-2 border border-gray-100 flex items-center justify-center relative">
              <div className="w-full h-full bg-gray-50 rounded-2xl relative overflow-hidden flex items-center justify-center">
                 <img 
                   src={product.image} 
                   alt={product.name} 
                   className="absolute inset-0 w-full h-full object-cover opacity-90"
                 />
                 <div className="absolute inset-0 bg-black/10"></div>
                 {/* Floating micro thumbnail */}
                 <div className={`absolute bottom-4 left-4 w-12 h-10 ${product.thumbnailColor} rounded-md shadow-sm border-l-4 ${product.borderColor} opacity-90`}></div>
              </div>
            </div>
          </div>

          <div className="px-6 flex flex-col flex-grow">
            {/* Title Row */}
            <div className="flex items-start gap-4 mb-5">
              <div className={`w-16 h-12 ${product.thumbnailColor} rounded-md border-l-4 ${product.borderColor} flex-shrink-0 relative shadow-sm`}></div>
              <div className="flex flex-col">
                <h2 className="text-[17px] font-bold text-gray-900 leading-[1.2] mb-1" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                  {product.name}
                </h2>
                <p className="text-[#6b6d5b] text-[13px] font-medium">{product.brand}</p>
              </div>
            </div>

            {/* Score Row */}
            <div className="flex items-center justify-between mb-5 border-b border-gray-100 pb-5">
              <div className="flex items-center gap-2">
                <div className={`w-3.5 h-3.5 rounded-full ${product.statusColor}`}></div>
                <div className="flex border border-[#e8efe0] rounded-xl overflow-hidden shadow-sm bg-white">
                  <div className="bg-white px-3 py-1.5 flex flex-col justify-center">
                    <span className="text-[15px] font-bold text-gray-900 leading-none mb-0.5">{product.score}</span>
                    <span className="text-[10px] font-semibold text-[#6b6d5b] leading-none uppercase tracking-wide text-center">{product.status}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Share className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Oliver Says */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5 relative">
              <div className="absolute -top-1.5 left-8 w-3 h-3 bg-white border-t border-l border-gray-100 transform rotate-45"></div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-[#e5ecd2] flex items-center justify-center">
                   <svg viewBox="0 0 24 24" className="w-4 h-4 text-olive-900" fill="currentColor">
                      <circle cx="12" cy="12" r="8" />
                      <circle cx="9.5" cy="10" r="1.5" fill="white" />
                      <circle cx="14.5" cy="10" r="1.5" fill="white" />
                      <path d="M10 14Q12 16 14 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                   </svg>
                </div>
                <span className="font-bold text-gray-900 text-[14px]">Oliver Says:</span>
              </div>
              <p className="text-[12px] text-gray-600 leading-[1.6]">
                "{product.description}"
              </p>
            </div>

            <div className="mt-auto">
              <h3 className="font-bold text-gray-900 text-[15px] mb-3">Breakdown</h3>
              <div className="h-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200"></div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProductSlider;
