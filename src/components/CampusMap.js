import React, { useState } from 'react';

const facilities = [
  { name: 'Library', coords: { left: '30%', top: '40%' }, description: 'Open 24/7, 100,000+ books.' },
  { name: 'Sports Complex', coords: { left: '60%', top: '20%' }, description: 'Olympic-size pool, gym, stadium.' },
  { name: 'Dorms', coords: { left: '20%', top: '70%' }, description: 'Comfortable student housing.' },
  { name: 'Research Center', coords: { left: '70%', top: '60%' }, description: 'State-of-the-art labs.' },
];

function CampusMap() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-8">
      <img src="/assets/map.jpg" alt="Campus Map" className="w-full h-80 object-cover rounded-lg" />
      {facilities.map((facility, i) => (
        <button
          key={i}
          className="absolute bg-blue-600 text-white px-2 py-1 rounded-full shadow hover:bg-blue-800 transition"
          style={{ left: facility.coords.left, top: facility.coords.top, transform: 'translate(-50%, -50%)' }}
          onClick={() => setSelected(facility)}
          aria-label={facility.name}
        >
          {facility.name}
        </button>
      ))}
      {selected && (
        <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 p-4 rounded-t-lg shadow-lg">
          <button className="float-right text-gray-600" onClick={() => setSelected(null)} aria-label="Close">✖</button>
          <h4 className="font-bold mb-2">{selected.name}</h4>
          <p>{selected.description}</p>
        </div>
      )}
    </div>
  );
}

export default CampusMap;