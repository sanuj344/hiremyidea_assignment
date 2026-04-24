import React from 'react';
import { ChevronDown } from 'lucide-react';
import MegaMenu from './MegaMenu';
import BlogDropdown from './BlogDropdown';
import FoodDropdown from './FoodDropdown';

const Navbar = () => {
  const navItems = [
    { name: 'Solutions', hasDropdown: true },
    { name: 'Features', hasDropdown: false },
    { name: 'Pricing', hasDropdown: false },
    { name: 'Blog', hasDropdown: true },
    { name: 'Restaurants', hasDropdown: false },
    { name: 'Food', hasDropdown: true },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-olive-50/80 backdrop-blur-md px-6 py-4 flex items-center justify-between transition-all duration-300">
      {/* Logo Container */}
      <div className="flex items-center gap-1 cursor-pointer">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className="w-8 h-8 text-[#A3C644]" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* A simple olive-like shape with leaf */}
          <path d="M12 22C16.9706 22 21 17.5228 21 12C21 6.47715 16.9706 2 12 2C7.02944 2 3 6.47715 3 12C3 17.5228 7.02944 22 12 22Z" fill="currentColor"/>
          <circle cx="9" cy="9" r="1.5" fill="#1f3d2b" />
          <circle cx="15" cy="9" r="1.5" fill="#1f3d2b" />
          <path d="M9 14.5C10 16 14 16 15 14.5" stroke="#1f3d2b" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M12 2V-2C10.5 0 9 0 9 0" stroke="#A3C644" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-olive-900 text-2xl font-black tracking-tight" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>live</span>
      </div>

      {/* Desktop Menu Items */}
      <div className="hidden lg:flex items-center gap-8">
        {navItems.map((item, index) => (
          <div key={index} className="relative group py-2">
            <div className="flex items-center gap-1 text-[15px] font-medium text-olive-900/80 hover:text-olive-900 cursor-pointer transition-colors">
              {item.name}
              {item.hasDropdown && <ChevronDown className="w-4 h-4 ml-0.5 opacity-60 transition-transform group-hover:rotate-180 duration-300" />}
            </div>
            
            {/* Render Mega Menu on hover for Solutions */}
            {item.name === 'Solutions' && (
              <MegaMenu />
            )}

            {/* Render Blog Dropdown on hover for Blog */}
            {item.name === 'Blog' && (
              <BlogDropdown />
            )}

            {/* Render Food Dropdown on hover for Food */}
            {item.name === 'Food' && (
              <FoodDropdown />
            )}
          </div>
        ))}
      </div>

      {/* Right side CTAs */}
      <div className="flex items-center gap-6">
        <button className="hidden sm:block text-[15px] font-medium text-olive-900/90 hover:text-olive-900 transition-colors">
          Sign in
        </button>
        <button className="bg-olive-900 hover:bg-olive-800 text-white px-5 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:-translate-y-0.5">
          Get Olive
          <span className="text-xl leading-none ml-1">&rarr;</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
