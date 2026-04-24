import React from 'react';
import BlogCard from './BlogCard';

const BlogDropdown = () => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[700px] opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
      <div className="bg-white rounded-[24px] shadow-[0_20px_60px_-15px_rgba(31,61,43,0.15)] border border-gray-100 p-6 flex flex-col md:flex-row gap-2">
        
        <div className="flex-1">
          <BlogCard 
            imageSrc="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=300"
            title="Modern-Day Miracle in Salinas, California"
            description="One author's journey from faith-based organic advocacy to witnessing a..."
          />
        </div>

        <div className="flex-1">
          <BlogCard 
            imageSrc="https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?auto=format&fit=crop&q=80&w=300"
            title="We Bought Eggs From Every Store... What We Discovered About 'Pasture-Free', 'Free-Range', and 'Cage-Free' Will SHOCK You!"
            description="Not all eggs are created equal. We decoded the confusing labels on egg..."
          />
        </div>

      </div>
    </div>
  );
};

export default BlogDropdown;
