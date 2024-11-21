import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-black text-white text-center py-8">
      <div className="max-w-screen-lg mx-auto">
        <h3 className="text-xl font-semibold">About Us</h3>
        <p className="mt-4 text-sm">
          This parallax website is a demonstration of smooth scrolling effects and engaging content.
        </p>
        <p className="mt-8 text-xs">&copy; 2024 Parallax Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
