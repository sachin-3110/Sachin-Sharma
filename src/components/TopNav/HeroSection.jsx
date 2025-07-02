import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { span } from "motion/react-client";
const HeroSection = () => {
  const pathToName = {
    "/contact": "Contact ",
    "/about": "About Me",
    "/project": "Projects",
  };
  const location = useLocation();
  const currentName = location.pathname;
  const displayName = pathToName[currentName] || "Sachin Sharma";
  const [charArray, setCharArray] = useState([]);
  useEffect(() => {
    const array = displayName.split("");
    setCharArray(array);
  }, [currentName, displayName, location.pathname]);
    useEffect(() => {
    document.title = displayName === "Sachin Sharma"
      ? "Sachin Sharma"
      : `Sachin | ${displayName}`;
  }, [displayName]);
  return (
    <motion.div>
      {charArray.map((elem, index) => {
        return (
          <motion.div
            key={index}
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:.5}}
            className="inline"
          >
            {elem}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default HeroSection;
