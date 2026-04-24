import React from 'react';
import { Heart, Share, Upload } from 'lucide-react';

const MobileMockup = () => {
  return (
    <div className="relative flex justify-center mt-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      {/* Ghost elements for blurry side background effects */}
      <div className="absolute top-1/3 left-1/4 xl:left-[15%] w-32 h-32 bg-[#e5ecd2]/50 blur-3xl rounded-full"></div>
      <div className="absolute top-1/4 right-1/4 xl:right-[15%] w-40 h-40 bg-[#e5ecd2]/50 blur-3xl rounded-full"></div>

      {/* The Phone Container */}
      <div className="relative w-[340px] h-[700px] bg-white rounded-[50px] border-[14px] border-[#e8efe0] shadow-2xl overflow-hidden z-10 flex flex-col items-center">
        {/* Dynamic Island / Notch area */}
        <div className="absolute top-0 w-full flex justify-center z-20">
          <div className="w-[124px] h-[30px] bg-black rounded-b-3xl relative mt-[-2px]">
             {/* Simple camera dots simulation */}
             <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#111] rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#222] rounded-full blur-[0.5px]"></div>
             </div>
          </div>
        </div>

        {/* Scrollable Content inside phone */}
        <div className="w-full h-full overflow-y-auto bg-[#fafaf9] pt-14 pb-8 flex flex-col overflow-x-hidden no-scrollbar">

          {/* Product Carousel (simulated) */}
          <div className="relative w-full h-[220px] mb-4 mt-2">
            {/* Blurry edge copies on left/right representing previous/next images */}
            <div className="absolute top-4 -left-16 w-[140px] h-[140px] bg-white rounded-3xl shadow-sm overflow-hidden opacity-50 blur-[2px]">
               <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-300">img</span>
               </div>
            </div>
            <div className="absolute top-4 -right-16 w-[140px] h-[140px] bg-white rounded-3xl shadow-sm overflow-hidden opacity-50 blur-[2px]">
               <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-300">img</span>
               </div>
            </div>

            {/* Main Center Image */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[220px] h-[220px] bg-white rounded-3xl shadow-md overflow-hidden p-2 flex items-center justify-center border border-gray-100 z-10">
              <div className="w-full h-full bg-gray-50 rounded-2xl relative overflow-hidden flex items-center justify-center">
                 {/* Box placeholder for the product image "Raincoast Crisps" */}
                 <div className="w-32 h-20 bg-[#3d2740] rounded-md shadow-sm relative overflow-hidden flex flex-col justify-end p-2 border-l-4 border-[#b99f66]">
                    <div className="w-6 h-6 bg-white rounded-full self-end mb-1"></div>
                    <div className="text-[6px] text-white/50 leading-none">lesley stowe</div>
                    <div className="text-[8px] text-white font-bold leading-tight">raincoast crisps</div>
                 </div>
                 {/* Store background blur */}
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400')] bg-cover opacity-10 mix-blend-multiply pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="px-6 w-full flex-grow flex flex-col">
             
             {/* Thumbnail & Title Row */}
             <div className="flex items-start gap-4 mb-5">
                <div className="w-16 h-12 bg-[#3d2740] rounded-md border-l-4 border-[#b99f66] flex-shrink-0 flex flex-col justify-end p-1 relative shadow-sm">
                   <div className="w-4 h-4 bg-white rounded-full self-end mb-0.5"></div>
                   <div className="text-[4px] text-white/50 leading-none">lesley stowe</div>
                   <div className="text-[5px] text-white font-bold leading-tight">raincoast crisps</div>
                </div>
                <div className="flex flex-col">
                   <h2 className="text-[17px] font-bold text-gray-900 leading-[1.2] mb-1" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                     Fig and Olive Crackers, Fig and Olive
                   </h2>
                   <p className="text-[#6b6d5b] text-[13px] font-medium">Lesley Stowe</p>
                </div>
             </div>

             {/* Score and Actions */}
             <div className="flex items-center justify-between mb-5 border-b border-gray-100 pb-5">
                <div className="flex items-center gap-2">
                   <div className="w-3.5 h-3.5 rounded-full bg-[#d65745]"></div>
                   <div className="flex border border-[#e8efe0] rounded-xl overflow-hidden shadow-sm bg-white">
                      <div className="bg-white px-3 py-1.5 flex flex-col justify-center">
                         <span className="text-[15px] font-bold text-gray-900 leading-none mb-0.5">46/100</span>
                         <span className="text-[10px] font-semibold text-[#6b6d5b] leading-none uppercase tracking-wide text-center">Avoid</span>
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

             {/* Olive Says Card */}
             <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5 relative">
                {/* Small indicator tip on top left */}
                <div className="absolute -top-1.5 left-8 w-3 h-3 bg-white border-t border-l border-gray-100 transform rotate-45"></div>
                
                <div className="flex items-center gap-2 mb-3 relative z-10">
                   <div className="w-6 h-6 rounded-full bg-[#e5ecd2] flex items-center justify-center flex-shrink-0">
                      {/* Simple Olive buddy icon */}
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
                  "This product's low score mainly comes from the processed sugars, like honey and brown sugar, which can impact your family's health when consumed frequently, especially for kids who are still developing. Additionally, there are several additives that aren't ideal for your goal of avoiding processed foods, making this a choice to consider more carefully."
                </p>
             </div>

             {/* Breakdown Section Placeholder */}
             <div className="mt-2">
                <h3 className="font-bold text-gray-900 text-[15px] mb-3">Breakdown</h3>
                <div className="h-24 bg-white rounded-2xl shadow-sm border border-gray-100 placeholder-content"></div>
             </div>
             
          </div>

        </div>

      </div>

      {/* Decorative semi-circles mimicking the adjacent cards in the design */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[calc(50%-260px)] w-[140px] h-[140px] bg-white rounded-3xl opacity-30 shadow-sm border border-[#e8efe0] hidden md:block backdrop-blur-md overflow-hidden">
         <div className="w-full h-full bg-[#f4f7ee] flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white opacity-50"></div>
         </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-[calc(50%-260px)] w-[140px] h-[140px] bg-white rounded-3xl opacity-30 shadow-sm border border-[#e8efe0] hidden md:block backdrop-blur-md overflow-hidden">
         <div className="w-full h-full bg-[#f4f7ee] flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white opacity-50"></div>
         </div>
      </div>

    </div>
  );
};

export default MobileMockup;
