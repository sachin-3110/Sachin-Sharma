import React from "react";

const MusicBox = () => {
  return (
    <div
      id="music&starBox"
      className="w-full relative overflow-hidden  mb-20 md:mb-0 md:w-[40%] flex justify-center items-center md:items-start min-h-[50vh]"
    >
      <div
        id="musicBox"
        className="flex flex-col pb-10 justify-start md:min-w-[50%] items-center my-5 border-1 rounded-4xl"
      >
        <div
          id="musicWheel"
          className="h-50 w-50 rounded-full flex justify-center items-center"
        >
          <div className="bg-white h-40 w-40 rounded-full flex justify-center animate-spin duration-500">
            <div className="bg-black h-35 w-35 rounded-full duration-[5]">
              <div className="bg-white h-30 w-30 rounded-full text-black text-6xl"></div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center">
          <div
            id="musicDuration"
            className="text-xl justify-between px-5 flex w-full"
          >
            <h1>0:00</h1>
            <h1>3:69</h1>
          </div>
          <div
            id="progressbar"
            className="bg-gray-600 rounded-full overflow-hidden  h-2 my-10 w-[90%]"
          >
            <div className="w-[20%] bg-white h-full"></div>
          </div>
        {/* controls */}
          <div className="flex justify-evenly gap-10  text-2xl font-extrabold">
            <div id="backward">{`<<`}</div>
            <div id="backward">{`||`}</div>
            <div id="backward">{`>>`}</div>
          </div>
        </div>
      </div>
      <div id="outerCircle" className="opacity-50 h-full absolute flex items-start justify-end w-full ">
        <div id="innercircle" className="rounded-full group w-30 flex bg-white top-120 relative justify-center items-center  h-30 ">
            <div id="start" className="bg-black h-27 w-27 -rotate-90 group-hover:animate-spin linear rounded-full flex justify-center items-center"><span className="duration-500 ri-star-fill font-[Avinga] text-7xl inline-block"></span> </div>
        </div>
        <div className="rounded-full w-26 hidden md:flex bg-white rotate-90 group lg:right-0 -right-7 top-12 relative  justify-center items-center  h-26 border border-gray-600">
            <div className="bg-black text-white h-22 w-22 group-hover:animate-spin linear rounded-full flex justify-center items-center"><span className="duration-500  ri-star-fill font-[Avinga] text-7xl inline-block"></span> </div>
        </div>
      </div>
    </div>
  );
};

export default MusicBox;
