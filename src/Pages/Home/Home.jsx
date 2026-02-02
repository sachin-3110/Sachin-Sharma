import React, { useEffect } from "react";
import TopNav from "../../components/TopNav/TopNav";
import ScrollToTop from "../../components/ScrollToTop";
import { Outlet } from "react-router-dom";
import LowerNav from "../../components/LowerNav";
import ThemeButton from "../../components/ThemeButton";
import CustomCursor from "../../components/CustomCursor";
import { useState } from "react";
import BackgroundAnimation from "../../components/BackgroundAnimation";

const Container = () => {
  const [light, setLight] = useState(true);
  const handleLight = () => {
    setLight(prev => !prev);
    console.log(light);
  };

  return (
    <div className="min-w-full no-scrollbar border-yellow-500 relative md:p-0 z-0 min-h-screen flex flex-col items-center mx-auto">
      <BackgroundAnimation/>
      <div className="absolute z-5">
      </div>
      <CustomCursor theme={light} />
      <TopNav theme={light} />
      <ScrollToTop theme={light} />
      <Outlet theme={light} />
      <LowerNav theme={light} />
    </div>
  );
};

export default Container;
