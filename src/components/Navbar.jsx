// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 p-4 z-10 shadow-md">
      <ul className="flex justify-center space-x-8 text-white">
        <li><a href="#home" className="hover:text-gray-200">Home</a></li>
        <li><a href="#about" className="hover:text-gray-200">About</a></li>
        <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
