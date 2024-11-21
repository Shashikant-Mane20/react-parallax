import React, { useEffect, useState } from "react";

const MainContentSection = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative w-full bg-gray-900 text-white px-8 py-16"
      style={{
        // Adjusting the vertical movement of the text with slower scroll
        transform: `translateY(${scrollY * -0.05}px)`,
        transition: "transform 0.2s ease-out", // Smooth transition for scrolling
      }}
    >
      <div className="flex items-center justify-center text-white">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Main Content Section</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            This is a small main section with only text content. The text moves
            upwards slowly as you scroll down, creating a subtle parallax
            effect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContentSection;

