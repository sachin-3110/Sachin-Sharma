import React from "react";
import { NavLink } from "react-router-dom";

const MiddleSections = () => {
  return (
    <div className="min-h-[70vh] p-5 w-full flex flex-col md:flex-row">
      <div id="text" className="w-full md:w-[60%] text-center md:text-left">
        <div id="text" className="text-7xl  lg:text-9xl ">
          Wandering Through Wonder
        </div>
        <div
          id="text"
          className="text-3xl mt-10 md:text-4xl tracking-tight w-full md:w-auto"
        >
          <span className="text-5xl rotate-y-180 text-gray-300 rotate-180 inline-block ">
            L
          </span>{" "}
          मैं केवल वेबसाइट नहीं बनाता, बल्कि डिजिटल अनुभवों का रचना करता हूँ।{" "}
          <span className="text-5xl rotate-y-180 relative top-2 right-2 text-gray-300 inline-block ">
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
        <div className="buttonContainer flex gap-10 m-10 justify-between md:justify-start text-2xl md:text-3xl">
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
      <div
        id="music&starBox"
        className="w-full mb-20 md:mb-0 md:w-[40%] flex justify-start items-start min-h-[50vh]"
      >
        <div
          id="musicBox"
          className="flex flex-col pb-10 justify-start md:w-[70%] items-center my-5 border-1 rounded-2xl"
        >
          <div
            id="musicWheel"
            className="h-50 w-50 rounded-full bg-black flex justify-center items-center"
          >
            <div className="bg-white h-40 w-40 rounded-full flex justify-center animate-spin duration-500">
              <div className="bg-black h-35 w-35 rounded-full animate-spin duration-[5]">
                <div className="bg-white h-30 w-30 rounded-full text-black text-6xl"></div>
              </div>
            </div>
          </div>

         <div className="w-full flex flex-col justify-center items-center">
          
          <div id="musicDuration" className="text-xl justify-between px-5 flex w-full">
            <h1>0:00</h1>
            <h1>3:69</h1>
          </div>
          <div id="progressbar" className="bg-gray-600 rounded-full overflow-hidden  h-2 my-10 w-[90%]">
              <div className="w-[20%] bg-white h-full"></div>
          </div>


           <div className="flex justify-evenly gap-10  text-2xl font-extrabold">
            <div id="backward">{`<<`}</div>
            <div id="backward">{`||`}</div>
            <div id="backward">{`>>`}</div>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSections;
