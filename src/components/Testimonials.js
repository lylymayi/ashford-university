import React, { useState } from 'react';
const testimonials = [
  {
    name: 'Abygael Canaynay',
    text: 'The campus atmosphere is amazing and the faculty truly care about students.',
    image: '/assets/t1.jpeg',
  },
  {
    name: 'Sophia Laforteza',
    text: 'Scholarship opportunities made my dream come true!',
    image: '/assets/t2.jpeg',
  },
  {
    name: 'Mingyu Batumbakal',
    text: 'Exchange program let me study abroad and broaden my horizons.',
    image: '/assets/t3.jpg',
  },
];
function Testimonials() {
  const [index, setIndex] = useState(0);
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-center mb-4">Student Testimonials</h2>
      <div className="flex flex-col items-center">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-md">
          <img src={testimonials[index].image} alt={testimonials[index].name} className="w-16 h-16 rounded-full mx-auto mb-2" />
          <p className="italic">"{testimonials[index].text}"</p>
          <h4 className="mt-2 font-semibold">{testimonials[index].name}</h4>
        </div>
        <div className="flex gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${index === i ? 'bg-blue-500' : 'bg-gray-400'}`}
              onClick={() => setIndex(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;