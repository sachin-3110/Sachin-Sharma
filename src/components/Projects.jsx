import React from "react";
import ProjectGrids from "./ProjectGrids";
const Projects = () => {
  return (
    <div className="w-[90%] min-h-20 py-10 flex flex-col justify-center items-center relative">
      <div
        id="textAndOtherText"
        className="text-2xl flex md:flex-row flex-col justify-between w-full items-center px-10"
      >
        <span className="text-5xl md:text-7xl font-[avinga] uppercase">
          Creations
        </span>
        <div className="w-full flex justify-center md:justify-end font-bold text-2xl opacity-50">
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
        <ProjectGrids/>
           <div className="text-center flex justify-end items-center gap-2 w-full mb-40 md:-mb-10 md:w-100 md:absolute bottom-40 right-0 overflow-hidden">
       <div className="">
        There are 30+ repos on my github you can check it out by clicking button below
         <a href="https://github.com/sachin-3110" target="blank">
        <button className="bg-white text-black p-2 m-2 rounded-full font-semibold border hover:text-white hover:bg-black">
            GitHub
        </button>
        </a>
       </div>
      </div>
      </div>
    </div>
  );
};

export default Projects;
