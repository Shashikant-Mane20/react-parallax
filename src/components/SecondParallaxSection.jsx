import React from "react";

const SecondParallaxSection = ({ scrollY }) => {
  return (
    <div>
      {/* Parallax Section */}
      <div
        className="relative w-full z-0"
        style={{
          height: "300px", // Fixed image height for this section
          backgroundImage: `url('https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transform: `translateY(-${scrollY * 0.3}px)`, // Image moves fast upward
        }}
      >
        {/* Text Section (moves slower) */}
        <div
          className="absolute inset-0 flex items-center justify-center text-white"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`, // Text moves slower than the image
          }}
        >
          <div className="text-center">
            <h1 className="text-5xl font-bold">Explore More Content</h1>
          </div>
        </div>
      </div>

      {/* Main Content Section (appears after the parallax section) */}
      <div className="relative z-10 w-full h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Main Content Section</h2>
          <p className="mt-4 text-lg">This is a small main section where the background image scrolls faster while the text moves slower.</p>
        </div>
      </div>
    </div>
  );
};

export default SecondParallaxSection;
