import {useMotionValue, useSpring, useTransform } from "motion/react";
import {motion} from "motion/react";
import React, { useEffect } from "react";

const CustomCursor = () => {
  // 1. Outer Ring Physics (Fast & Responsive)
 
  // 2. Inner Dot Physics (Higher mass/damping for that "heavy" trailing feel)
 

  return (
    <>
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      >
        <div 
          className="h-10 w-10 rounded-full border-4 border-white hidden sm:flex justify-center items-center"
          style={{
            boxShadow: "inset 0px 0px 8px rgba(255, 255, 255, 0.5)"
          }}
        />
      </motion.div>

      <motion.div
        style={{ x: dotX, y: dotY }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      >
        <div className="h-10 w-10 hidden sm:flex justify-center items-center">
          <div className="h-2 w-2 bg-white rounded-full shadow-lg" />
        </div>
      </motion.div>
    </>
  );
};

export default CustomCursor;