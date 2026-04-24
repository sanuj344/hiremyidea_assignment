import React from 'react';
import { ArrowRight } from 'lucide-react';

const ImageCard = () => {
  return (
    <div className="relative h-full w-full rounded-2xl overflow-hidden group cursor-pointer shadow-sm">
      <img 
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600" 
        alt="Salinas California" 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
        <p className="text-white font-bold text-[15px] leading-[1.3] w-[80%] drop-shadow-md">
          Modern-Day Miracle in Salinas, California
        </p>
        <ArrowRight className="text-white w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
      </div>
    </div>
  );
};

export default ImageCard;
