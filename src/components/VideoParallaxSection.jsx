import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const VideoParallaxSection = ({ videoSrc, title, subtitle }) => {
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
    <motion.div
      className="relative w-full z-0"
      style={{
        height: "100vh", // Full viewport height for video section
        overflow: "hidden",
        marginBottom: "0", // Remove any bottom margin that might create space
      }}
      initial={{ y: 0 }}
      animate={{ y: scrollY * 0.2 }} // Video scrolls up slower than the scroll speed
      transition={{ ease: "linear", duration: 0 }}
    >
      <video
        src={'https://cdn.coverr.co/videos/coverr-a-green-leaf-8427/1080p.mp4'}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 flex items-center justify-center text-white"
        style={{
          transform: `translateY(${scrollY * -0.1}px)`, // Text scrolls slower than video
        }}
      >
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="text-lg">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoParallaxSection;
