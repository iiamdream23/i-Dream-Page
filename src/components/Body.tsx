import React from 'react'

const Body: React.FC = () => {
  return (
    <div className='my-8'>
      <div className='flex justify-center lg:hidden space-x-8'>
        {/* First Button */}
        <div>
          <button className='text-blue-500 text-xl hover:bg-blue-500 hover:text-white font-sans font-semibold bg-gray-100 shadow rounded-full px-6 py-4'>
            Get In Touch
            </button>
        </div>
        {/* Secon Button */}
        <div className='text-white text-xl hover:bg-gray-100 py-4 hover:text-blue-500 bg-blue-500 font-sans shadow rounded-full px-6 font-semibold'>
          <button>Book Session</button>
        </div>
      </div>
    </div>
  )
}

export default Body

// import React from 'react'

// const Body: React.FC = () => {
//   return (
//     <div className=''>
//       <div>
//       <h1 className='font-bold text-7xl'>
//         meet a <span className='text-blue-500'>MEDIUM</span> <br />
//         today
//       </h1>
//       </div>
//       <div className=''>
//         <p>
//         In the ethereal realms of mystic connections, iDream unfolds as a conduit between the tangible and the spiritual. Celestial Commerce with iDream beckons businesses into the transcendental landscape, where luminary visions guide each enterprise toward celestial success. The Seraphic Edition of iDream invites you to traverse the sacred realms, fostering celestial bonds within the sanctuary of your personal and familial spheres. Elysian Enterprises: iDream Edition intertwines the mundane with the divine, crafting an innovative narrative that harmonizes both earthly and spiritual aspirations.
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Body