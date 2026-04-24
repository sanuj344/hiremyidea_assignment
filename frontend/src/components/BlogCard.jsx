import React from 'react';

const BlogCard = ({ imageSrc, title, description }) => {
  return (
    <div className="flex items-start gap-4 p-3 rounded-2xl hover:bg-olive-50/50 transition-colors cursor-pointer group h-full">
      <div className="w-24 h-24 flex-shrink-0 rounded-[14px] overflow-hidden shadow-sm border border-gray-100">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col">
        <h4 className="text-[14.5px] font-bold text-gray-900 mb-1.5 leading-[1.3] group-hover:text-olive-900 transition-colors tracking-tight">
          {title}
        </h4>
        <p className="text-[13.5px] text-gray-500 leading-relaxed line-clamp-3 font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
