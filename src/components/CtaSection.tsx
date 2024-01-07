// CtaSection.tsx

import React, { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  comment: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Engineer Charles',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: '../imgs/him.jpg', // Replace with the actual image URL
  },
  {
    id: 2,
    name: 'Karis',
    comment: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: '../imgs/herr.jpg', // Replace with the actual image URL
  },
  {
    id: 3,
    name: 'Imala Ik',
    comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    imageUrl: '../imgs/me.jpg', // Replace with the actual image URL
  },
];

const CtaSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <div className="relative">
          <div className="flex space-x-4 transition-transform ease-in-out duration-300 transform translate-x-[-${currentTestimonial * 100}%]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`flex-shrink-0 w-full max-w-[400px] p-6 bg-white rounded-lg shadow-md transition-opacity duration-300 ${
                  index === currentTestimonial ? 'opacity-100' : 'opacity-0 hidden'
                }`}
              >
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-full h-40 object-cover mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.comment}</p>

                <div className="flex items-end justify-between mt-4">
                <button
                      onClick={prevTestimonial}
                      className="text-blue-500 text-2xl focus:outline-none"
                    >
                      {'<'}
                    </button>
                  <div className="flex items-center space-x-2">
                    {Array.from({ length: testimonials.length }).map((_, i) => (
                      <span
                        key={i}
                        className={`inline-block h-2 w-2 rounded-full bg-gray-300 ${
                          i === currentTestimonial ? 'bg-gray-600' : ''
                        }`}
                      ></span>
                    ))}
                  </div>
                  <div className="">
                    
                    <button
                      onClick={nextTestimonial}
                      className="text-blue-500 text-2xl focus:outline-none"
                    >
                      {'>'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
