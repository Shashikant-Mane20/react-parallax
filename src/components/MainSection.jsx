import React, { useEffect, useState } from "react";
import FirstParallaxSection from "./FirstParallaxSection";
import SecondParallaxSection from "./SecondParallaxSection";
import MainContentSection from "./MainContentSection";
import Footer from "./Footer";
// import VideoParallaxSection from "./VideoParallaxSection";


const MainSection = () => {
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
    <div id="home" className="relative overflow-hidden mt-16">
      <FirstParallaxSection scrollY={scrollY} />
      <MainContentSection scrollY={scrollY} />
      <SecondParallaxSection scrollY={scrollY} />
      {/* <VideoParallaxSection/> */}
     
      <Footer />
    </div>
  );
};

export default MainSection;
