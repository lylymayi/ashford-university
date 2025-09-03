// src/components/PageWrapper.jsx
import React from 'react';

export default function PageWrapper({ children }) {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/map.jpg')" }}
    >
      {/* Black overlay with 50% opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content above overlay */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
