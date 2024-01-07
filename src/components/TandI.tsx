import React from 'react'
import Image from './Image'
import Text from './Text'

const TandI: React.FC = () => {
  return (
    <div>
      <div className='flex flex-col-reverse xl:flex-row space-x-28 m-8'>
        {/* Image */}
      <div className='flex justify-center'>
      <div className='w-80 h-80 mt-20 bg-blue-100 shadow rounded-full'>
        <Image />
      </div>
      </div>
      {/* Text */}
      <div className='flex items-center'>
      <Text />
      </div>
      </div>
      {/* First Button */}
      <div className='hidden xl:block xl:ml-28 my-8'>
          <button className='text-blue-500 text-xl hover:bg-blue-500 hover:text-white font-sans font-semibold bg-gray-100 shadow rounded-full px-6 py-4'>
            Get In Touch
            </button>
        </div>
    </div>
  )
}

export default TandI