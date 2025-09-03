import React, { useState, useEffect } from 'react';
const images = [
  '/assets/life.jpg',
  '/assets/achieve.png',
  '/assets/modern.jpg',
];
const captions = [
  'Campus Life',
  'Student Achievements',
  'Modern Facilities',
];
function Carousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setIndex((index + 1) % images.length), 3000);
    return () => clearTimeout(timer);
  }, [index]);
  return (
    <div className="w-full max-w-3xl mx-auto my-6">
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <img src={images[index]} alt={captions[index]} className="w-full h-64 object-cover" />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white px-4 py-2 w-full">
          <h3 className="text-lg">{captions[index]}</h3>
        </div>
        <div className="absolute top-1 right-1 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${index === i ? 'bg-red-800' : 'bg-gray-400'}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;