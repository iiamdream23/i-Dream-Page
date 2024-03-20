import React from 'react'
import Dropdown from './Dropdown'
import HamburgerMenu from './HamburgerMenu';

const Header: React.FC = () => {
  const menuItems = ['Harmony for Personal/Family', 'Business Solutions', 'Clairvoyance'];

  return (
    <div className='flex items-center w-full justify-between mx-4'>
      <div className='hidden lg:block'>
        <h1 className='text-blue-500 font-roboto text-6xl'>
        iDream
        </h1>
      </div>
      {/* Small Screens */}
      <div className='flex items-center justify-between w-full space-x-4 lg:hidden'>
        {/* iDream on small screen */}
      <div className='lg:hidden'>
        <h1 className='text-blue-500 font-roboto text-6xl'>
        iDream
        </h1>
      </div>
      {/* Hamburger on small screen */}
      <div className='lg:hidden'>
      <HamburgerMenu items={menuItems} />
      </div>
      </div>
      {/* List Items */}
      <div className='flex items-center gap-2'>
      <div className=''>
      <div className='hidden lg:flex  space-x-6'>
      
      <div className='hover:cursor-pointer hover:text-blue-500 font-semibold text-black'>
          <h2>
            Clairvoyance
          </h2>
        </div>
      <div>
      <Dropdown
        title="Harmony for Personal/Family"
        items={[
          'iDream Seraphic Edition',
          'Celestial Bonds: Family iDream',
          'Radiant Spirits at Home',
        ]}
      />
      </div>
      <div className=''>
      <Dropdown
        title="Business Solutions"
        items={[
          'Celestial Commerce with iDream',
          'iDream Luminary Business Suite',
          'Elysian Enterprises: iDream Edition',
        ]}
      />
      </div>
    </div>
      </div>
      {/* Buttons */}
      <div className='hidden lg:flex space-x-4'>
        {/* First Button */}
        <div>
          <button className='text-blue-500 text-xl hover:bg-blue-500 hover:text-white font-sans font-semibold bg-gray-100 shadow rounded-full px-6 py-4 w-fit'>
            Sign In
            </button>
        </div>
        {/* Secon Button */}
        <div className='text-white text-xl hover:bg-gray-100 py-4 hover:text-blue-500 bg-blue-500 font-sans shadow rounded-full px-6 font-semibold w-fit'>
          <button>Book Session</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header