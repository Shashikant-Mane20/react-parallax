// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';

const App = () => {
  return (
    <div>
      <Navbar />
      <MainSection />
      {/* Add other sections as needed */}
      <section id="about" className="h-screen bg-gray-800 text-white">
        <div className="flex justify-center items-center h-full">
          <h2 className="text-3xl">About Us</h2>
        </div>
      </section>
    </div>
  );
}

export default App;
