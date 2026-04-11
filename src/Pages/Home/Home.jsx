import React, { useEffect } from "react";
import TopNav from "../../components/TopNav/TopNav";
import ScrollToTop from "../../components/ScrollToTop";
import { Outlet } from "react-router-dom";
import LowerNav from "../../components/LowerNav";
import ThemeButton from "../../components/ThemeButton";
import { useState } from "react";
import BackgroundAnimation from "../../components/BackgroundAnimation";
import Silk from "@/components/Silk";
import LocomotiveScroll from "locomotive-scroll";

const Container = () => {
  const [light, setLight] = useState(true);
  const handleLight = () => {
    setLight(prev => !prev);
    console.log(light);
  };

  return (
    <div className="w-full no-scrollbar p-2 border-yellow-500 relative z-0 min-h-screen flex flex-col items-center ">
      <BackgroundAnimation/>  
      <div className="absolute z-5">
      </div>
      <TopNav theme={light} />
      <ScrollToTop theme={light} />
     <div className="w-full flex justify-center items-center pt-20">
       <Outlet theme={light} />
     </div>
    </div>
  );
};

export default Container;
