import React from "react";
import ProjectGrids from "./ProjectGrids";
const Projects = () => {
  return (
    <div className="w-[90%] min-h-20 flex flex-col justify-center items-center">
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
      </div>
    </div>
  );
};

export default Projects;
