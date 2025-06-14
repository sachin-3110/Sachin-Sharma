import React, { useState } from "react";
const LowerNav = () => {
    const[icons,setIcons]=useState([
        {name:"Home", iconCode:"ri-home-9-line",effects:""},
        {name:"About", iconCode:"ri-user-6-line",effects:""},
        {name:"Projects", iconCode:"ri-layout-masonry-fill",effects:""},
        {name:"Contact", iconCode:"ri-mail-send-line",effects:""},
    ])
  return (
    <div className="flex justify-evenly text-white text-2xl md:text-3xl items-center min-h-[8vh] md:h-[8vh] mb-5 border-[1px] w-[40%] rounded-2xl">
    {icons?.map((elem,index)=>
    <div className="group h-full w-full flex justify-center items-center ">
        <div id="text" className="absolute text-xl linear group-hover:-rotate-12 p-1 duration-400 opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] font-extralight tracking-[2px]">{elem.name}</div>
        <i className={`${elem.iconCode} ${elem.name==="Home"?"text-yellow-200":""} "ri-home-9-line text-2xl md:text-3xl group-hover:scale-125 duration-400"`}></i>
    </div>
    )}


    </div>
  );
};

export default LowerNav;
