// HamburgerMenu.tsx

import React, { useState } from 'react';

interface HamburgerMenuProps {
  items: string[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block font-roboto">
      <div
        className="cursor-pointer mt-2 text-black transition-transform duration-200 ease-in-out transform"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <span className="text-blue-500 text-2xl">✕</span>
        ) : (
          <span className="text-blue-500 text-2xl">☰</span>
        )}
      </div>
      {isOpen && (
        <ul className="list-none p-4 shadow-md rounded-lg bg-white text-black border-gray-100 absolute mt-2 transition-all duration-500 hover:translate-y-5 right-8">
          {items.map((item, index) => (
            <li
              key={index}
              className="block p-2 hover:text-blue-500 cursor-pointer transition-colors"
            >
              {item}
            </li>
          ))}
          <li>
          <button className='text-blue-500 text-xl hover:bg-blue-500 mx-2 mt-4 mb-1 hover:text-white font-sans font-semibold bg-gray-100 shadow rounded-full px-6 py-4'>
            Sign In
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
