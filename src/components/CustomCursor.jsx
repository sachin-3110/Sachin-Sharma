import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect } from "react";

const CustomCursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth follow:
  const smoothX = useSpring(x, { stiffness: 200, damping: 25, mass: 0.3 });
  const smoothY = useSpring(y, { stiffness: 200, damping: 25, mass: 0.3 });

  const size = 48;

  useEffect(() => {
    const handleMove = (e) => {
      x.set(e.clientX - size / 2);
      y.set(e.clientY - size / 2);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
    >
      <div className="w-12 h-12 border-1 border-white rounded-full" />
    </motion.div>
  );
};

export default CustomCursor;
