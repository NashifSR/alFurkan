"use client";
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const images = [
    "https://i.ibb.co/ZzG2mPw5/Gemini-Generated-Image-g9ls57g9ls57g9ls.png",
    "https://i.ibb.co/cjJHrp2/skills-1.png",
    "https://i.ibb.co/4RzRLdp0/Doing-something.png",
    "https://i.ibb.co/HpxqS4rd/Doing-something.png",
    "https://i.ibb.co/1BN3nzM/Gemini-Generated-Image-cv3p05cv3p05cv3p.png",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Image Container */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-lg">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-blue-500 scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
