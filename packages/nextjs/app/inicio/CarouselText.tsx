import React, { useState, useEffect } from 'react';

const CarouselText = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [texts, setTexts] = useState([
    "Circular Economy",
    "Planet Health", 
    "Social Impact",
    "Enviromental Consciousness",
    "Circular Economy",
    "Planet Health", 
    "Social Impact",
    "Enviromental Consciousness"
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTexts(prevTexts => {
        // When at index 2, move the first item to the end
        if (activeIndex === 2) {
          const [first, ...rest] = prevTexts;
          return [...rest, first];
        }
        return prevTexts;
      });

      setActiveIndex((prevIndex) => {
        if (prevIndex === 6) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 3000);
   
    return () => clearInterval(interval);
  }, [activeIndex]);

  useEffect(() => {
    console.log(activeIndex);    
  }, [activeIndex]);
  

  return (
    <div className="relative w-full h-20 mt-12 overflow-hidden flex items-center justify-center mb-8">
      {/* Gradiente de desvanecido */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-transparent to-sky-900 pointer-events-none z-10" />
      
      <div 
        className="flex transition-transform duration-500 ease-in-out" 
        style={{ 
          transform: `translateX(-${(activeIndex % texts.length) * 33.33}%)`,
        }}
      >
        {texts.map((text, index) => (
          <div 
            key={index} 
            className="w-[33.33%] flex-shrink-0 text-center text-7xl text-gray-400 font-bold px-16 flex items-center justify-center text-nowrap"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselText;