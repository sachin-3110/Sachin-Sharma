import React from "react";
import { NavLink } from "react-router-dom";
import MusicBox from "./MusicBox";

const MiddleSections = () => {
  return (
    <div className="min-h-[70vh] p-5 w-[88%] flex flex-col md:flex-row">
      <div id="text" className="w-full md:w-[60%] text-center md:text-left ">
        <div id="text" className="text-7xl uppercase font-[solenoid] lg:text-9xl ">
          Wandering Through Wonder
        </div>
        <div
          id="hinditext"
          className="text-3xl flex mt-10 md:text-4xl tracking-tight w-full  md:w-auto"
        >
          <span className="text-5xl relative -top-8 sm:-top-7  sm:-right-5 md:-right-2 md:-top-10 rotate-y-180 text-gray-300 rotate-180 inline-block ">
            L
          </span>
          <span className="font-[Hindi]">मैं केवल वेबसाइट नहीं बनाता, बल्कि डिजिटल अनुभवों का रचना करता हूँ।</span>
          <span className="text-5xl rotate-y-180 relative top-7 sm:right-2 text-gray-300 inline-block ">
            L
          </span>
        </div>
        <div
          id="text"
          className="text-xl  md:text-2xl text-gray-400 font-extralight"
        >
          I don’t just build websites, I craft digital experiences.
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
      <MusicBox/>
    </div>
  );
};

export default MiddleSections;
