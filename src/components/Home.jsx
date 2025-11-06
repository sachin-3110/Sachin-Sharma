import { NavLink } from "react-router-dom";
import MusicBox from "./MusicBox";
import { motion } from "motion/react";

const MiddleSections = () => {
  return (
    <motion.div 
       initial={{filter:"blur(20px)"}}
      animate={{filter:"blur(0px)"}}
      transition={{duration:.200}}
    className="min-h-[70vh] p-5 w-full sm:w-[88%] flex flex-col md:flex-row">
      <div id="text" className="w-full md:w-[60%] text-center md:text-left ">
        <div id="text" className="text-5xl sm:text-6xl md:text-7xl uppercase font-[solenoid] lg:text-9xl ">
          Wandering Through Wonder
        </div>
        <div
          id="text"
          className="text-xl  md:text-2xl text-gray-400 font-extralight"
        >
          I don't just build websites, I craft digital experiences.
        </div>
        <div id="text" className="text-3xl my-10 w-full md:w-9/12">
          {" "}
          Designs that move. Code that breathes.
        </div>
        <div className="buttonContainer flex items-center sm:gap-10 gap-2 sm:m-10 justify-between md:justify-start text-2xl md:text-3xl">
          <NavLink
            to={"project"}
            className="p-3 rounded-2xl bg-gray-200 text-black hover:scale-105 duration-200"
          >
            Works
          </NavLink>
          <NavLink
            to={"contact"}
            className="p-3 rounded-2xl bg-gray-200 text-black hover:scale-105 duration-200"
          >
            Get in touch
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
};

export default MiddleSections;
