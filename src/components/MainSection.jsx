import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MainSection = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="home" className="relative h-screen overflow-hidden mt-8">
      {/* Parallax Background Image */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/046/924/486/small/dynamic-splash-of-colorful-liquids-creating-stunning-abstract-art-with-vibrant-hues-on-a-gradient-background-photo.jpg')`
        }}
        initial={{ y: 0 }}
        animate={{ y: scrollY * 0.05 }}  
        transition={{ ease: "linear", duration: 0 }}
      />

      {/* Content Section */}
      <div 
        className="absolute bottom-0 left-0 w-full text-white px-4 pb-8 z-10" 
        style={{
          transform: `translateY(-${scrollY * 0.15}px)`,  // Increased multiplier for faster movement
        }}
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold">Welcome to the Parallax Website</h1>
          <p className="mt-4 text-lg">Scroll down to explore more</p>
        </div>
      </div>
    </div>
  );
};

export default MainSection;


