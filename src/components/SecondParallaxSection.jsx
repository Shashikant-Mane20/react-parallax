import React from "react";

const SecondParallaxSection = ({ scrollY }) => {
  return (
    <div>
      {/* Parallax Section */}
      <div
        className="relative w-full z-0"
        style={{
          height: "100vh", // Full viewport height for the image
          backgroundImage: `url('https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transform: `translateY(-${scrollY * 0.3}px)`, // Image moves faster
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

      {/* Main Content Section */}
      <div
        className="relative z-10 w-full flex items-center justify-center bg-gray-900 text-white px-8 py-16"
        style={{
          transform: `translateY(${scrollY * -0.05}px)`, // The text in this section moves slowly as you scroll
        }}
      >
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Main Content Section</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            This is a small main section with only text content. The text moves
            upwards slowly as you scroll down, creating a subtle parallax
            effect. No gap between the parallax section and the main content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondParallaxSection;
