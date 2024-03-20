import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import TandI from './components/TandI'
import Footer from './components/Footer'
import CtaSection from './components/CtaSection'

const App: React.FC = () => {
  return (
    <div className=''>
      {/* Header */}
      <div className='h-40 flex items-center justify-center bg-gray-100 xl:bg-white'>
        <Header />
      </div>
      {/* Text & Image */}
      <div className='flex justify-center'>
        <TandI />
      </div>
      {/* Body */}
      <div className=''>
        <Body />
      </div>
      <div className=''>
      <div className='flex justify-center m-20 lg:hidden'>
          <h1 className='text-4xl'>
            Testimonials
          </h1>
        </div>
      {/* Cta Section Small Screen */}
      <div className='flex justify-center m-28 lg:hidden'>
        <div>
        <CtaSection />
        </div>
      </div>
      </div>
      
      {/* Cta Section Large Screen */}
      <div className='lg:bg-gray-100 p-4'>
      <div className='hidden lg:flex lg:justify-center lg:items-center lg:space-x-32 lg:m-28'>
        <div className=''>
        
          
          {/* <div>
            <h3>
              Testimonials
            </h3>
          </div> */}
          <div>
          <h1 className='text-5xl'>
            People are <span className='text-blue-500'>Talking</span>
          </h1>
          </div>
          {/* <div>
            <p>
              What are people saying about us
            </p>
          </div> */}
          
        
        </div>
      <div>
        <CtaSection />
        </div>
      </div>
      </div>
      {/* Footer */}
      <div className='h-40 flex items-end justify-end bg-gray-100 lg:bg-white lg:flex lg:items-start lg:justify-start p-10 lg:p-10 space-y-4'>
        <Footer />
      </div>
    </div>
  )
}

export default App