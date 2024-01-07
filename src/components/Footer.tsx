import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className='space-y-6'>
      <div className='flex gap-4'>
        <div>
          <img
            src='../imgs/FB-logo.svg'
            alt='Facebook logo'
          />
        </div>
        <div>
          <img
            src='../imgs/youtube-logo.svg'
            alt='YouTube logo'
          />
        </div>
        <div>
          <img
            src='../imgs/twitter-logo.svg'
            alt='Twitter logo'
          />
        </div>
      </div>
      <div className='flex gap-10'>
        <div>
        <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline">
  About Us
</a>
        </div>
        <div>
        <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline">
  FAQ
</a>
        </div>
        <div>
        <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline">
  Contact
</a>
        </div>
      </div>
    </div>
  )
}

export default Footer