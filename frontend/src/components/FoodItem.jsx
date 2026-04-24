import React from 'react';

const FoodItem = ({ icon, label, bgColor }) => {
  return (
    <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
      <div className={`w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 ${bgColor} group-hover:shadow-sm transition-all`}>
        <span className="text-[15px] leading-none">{icon}</span>
      </div>
      <span className="font-medium text-[14.5px] text-gray-800 tracking-tight group-hover:text-olive-900 transition-colors">
        {label}
      </span>
    </div>
  );
};

export default FoodItem;
