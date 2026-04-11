import React from "react";
import ProjectGrids from "./ProjectGrids";
import { motion } from "motion/react";
const Projects = () => {
  return (
    <motion.div
      initial={{ filter: "blur(20px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.2 }}
      className="w-[90%] min-h-20 py-10 flex flex-col justify-center items-center relative"
    >
      <div
        id="textAndOtherText"
        className=" text-2xl flex md:flex-row flex-col justify-between w-full items-center px-10"
      >
        <span className="text-5xl md:text-7xl font-[avinga] uppercase">
          Creations
        </span>
        <div className="hidden w-full sm:flex justify-center md:justify-end font-bold text-2xl opacity-50">
          <span className="rotate-y-180 rotate-180 -top-2 relative inline-block">
            L
          </span>
          <span className="md:text-2xl font-[solenoid] tracking-wider">
            Creation is the language of the soul
          </span>
          <span className="-rotate-y-180 relative top-2 inline-block">L</span>
        </div>
      </div>
      <div>
        <ProjectGrids />
        <div className="flex justify-center w-screen m-10">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5, repeat: 0 }}
          >
            <div className="w-fit p-2 rounded-full pl-5 bg-black/20 backdrop:blur-2xl flex font-semibold justify-center items-center">
              A click away from 35+ Projects
              <a href="https://github.com/sachin-3110" target="blank">
                <button className="bg-white text-black p-1 cursor-pointer m-2 rounded-full font-semibold border hover:text-white hover:bg-black">
                  GitHub
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
