// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const MainSection = () => {
//   const [scrollY, setScrollY] = useState(0);

//   const handleScroll = () => {
//     setScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div id="home" className="relative overflow-hidden mt-16"> {/* Adjust margin to account for navbar */}
//       {/* Parallax Background Image */}
//       <motion.div
//         className="relative w-full z-0"
//         style={{
//           height: "300px", // Fixed image height
//           backgroundImage: `url('https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//         }}
//         initial={{ y: 0 }}
//         animate={{ y: scrollY * 0.1 }} // Slow scroll for the image
//         transition={{ ease: "linear", duration: 0 }}
//       >
//         {/* Centered Text */}
//         <div
//           className="absolute inset-0 flex items-center justify-center text-white"
//           style={{
//             transform: `translateY(${scrollY * -0.6}px)`, // Faster scroll for the text ScrollY -negative 
//           }}
//         >
//           <div className="text-center">
//             <h1 className="text-5xl font-bold">Welcome to the Parallax Website</h1>
//             {/* <p className="mt-4 text-lg">Scroll down to explore more</p> */}
//           </div>
//         </div>
//       </motion.div>

//       {/* Main Content Section */}
//       <div className="relative z-10 w-full h-screen flex items-center justify-center bg-gray-900 text-white">
//         <div className="text-center">
//           <h2 className="text-4xl font-bold">Main Content Section</h2>
//           <p className="mt-4 text-lg">Here is some additional content.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainSection;

import React, { useEffect, useState } from "react";
import FirstParallaxSection from "./FirstParallaxSection";
import SecondParallaxSection from "./SecondParallaxSection";
import MainContentSection from "./MainContentSection";
import FinalContentSection from "./FinalContentSection";
import Footer from "./Footer";
import VideoParallaxSection from "./VideoParallaxSection";


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
      {/* <FinalContentSection /> */}
      <Footer />
    </div>
  );
};

export default MainSection;
