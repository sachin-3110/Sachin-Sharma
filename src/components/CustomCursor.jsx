import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    Window.addEventListener('mousemove', handleMouseMove);
    return () =>Window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      animate={{ x: position.x - 40, y: position.y - 40 }} // center offset
      transition={{  }}
      className="fixed z-[9999] pointer-events-none mix-blend-difference"
    >
      <div className="w-20 h-20 border-2 border-white flex justify-center items-center rounded-full">
        <div className="w-12 h-12 bg-black rounded-full" />
      </div>
    </motion.div>
  );
};

export default CustomCursor;
