import React from 'react';
import MenuItem from './MenuItem';
import ImageCard from './ImageCard';

const MegaMenu = () => {
  const features = [
    {
      icon: "🍯", // Could also use a specific SVG for allergy/jar
      title: "Allergy Scanning",
      description: "Scan groceries and even bottled water to reveal hidden ingredients"
    },
    {
      icon: "🌾",
      title: "Gluten Free Scanning",
      description: "Wheat, barley, rye, or their derivatives, the scanner flags any gluten-containing ingredients"
    },
    {
      icon: "🥛",
      title: "Dairy and Lactose Scanning",
      description: "Detect common dairy-derived ingredients like casein, whey, lactose, and more"
    },
    {
      icon: "✅",
      title: "Ingredient Checking",
      description: "Decode complex ingredient labels in seconds, with easy-to-understand alerts."
    }
  ];

  return (
    <div className="absolute top-full left-0 pt-6 w-[800px] opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
      <div className="bg-white rounded-[24px] shadow-[0_20px_60px_-15px_rgba(31,61,43,0.15)] border border-gray-100 p-6 flex gap-6">
        
        {/* Left Side: Features Grid */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-2 flex-[1.7]">
          {features.map((feature, idx) => (
            <MenuItem 
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        {/* Right Side: Image Card */}
        <div className="flex-1 min-h-[280px]">
          <ImageCard />
        </div>

      </div>
    </div>
  );
};

export default MegaMenu;
