import React from 'react';

const MenuItem = ({ icon, title, description }) => {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-olive-50/60 transition-colors cursor-pointer group">
      <div className="text-2xl leading-none mt-0.5">{icon}</div>
      <div>
        <h4 className="text-[15px] font-bold text-gray-900 mb-1.5 group-hover:text-olive-900 transition-colors tracking-tight">{title}</h4>
        <p className="text-[13px] text-gray-500 leading-relaxed pr-2 font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
