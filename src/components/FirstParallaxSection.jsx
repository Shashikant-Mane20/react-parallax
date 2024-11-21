import React from "react";
import { motion } from "framer-motion";

const FirstParallaxSection = ({ scrollY }) => {
  return (
    <motion.div
      className="relative w-full z-0"
      style={{
        height: "300px",
        backgroundImage: `url('https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      initial={{ y: 0 }}
      animate={{ y: scrollY * 0.1 }}
      transition={{ ease: "linear", duration: 0 }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center text-white"
        style={{
          transform: `translateY(${scrollY * -0.6}px)`,
        }}
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold">Welcome to the Parallax Website</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default FirstParallaxSection;
