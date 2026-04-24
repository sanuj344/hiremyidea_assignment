import React from 'react';
import FoodItem from './FoodItem';

const FoodDropdown = () => {
  const foodItems = [
    { icon: "🥣", label: "Breakfast Cereals", bgColor: "bg-[#ffe7b8]/60" },
    { icon: "🍶", label: "Sauces And Condiments", bgColor: "bg-[#ffd4cc]/50" },
    { icon: "🧂", label: "Snacks Salty", bgColor: "bg-[#ffe7b8]/60" },
    { icon: "🍪", label: "Snacks Sweet", bgColor: "bg-[#f2d8a7]/40" },
    { icon: "🍦", label: "Ice Cream And Frozen Dairy", bgColor: "bg-[#fff0db]" },
    { icon: "🍼", label: "Baby And Infant Food", bgColor: "bg-[#deeed5]/60" },
  ];

  return (
    <div className="absolute top-full right-0 md:-right-6 pt-6 w-[560px] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
      <div className="bg-white rounded-[24px] shadow-[0_20px_60px_-15px_rgba(31,61,43,0.15)] border border-gray-100 p-6">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {foodItems.map((item, idx) => (
            <FoodItem 
              key={idx}
              icon={item.icon}
              label={item.label}
              bgColor={item.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodDropdown;
