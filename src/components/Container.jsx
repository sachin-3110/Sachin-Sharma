import React, { useEffect } from "react";
import TopNav from "./TopNav/TopNav";
import LowerNav from "./LowerNav";
import { Outlet } from "react-router-dom";
import BackgroundAnimation from "./BackgroundAnimation";
import { motion } from "motion/react";
import ScrollToTop from "./ScrollToTop";
import MusicBox from "./MusicBox";
const Container = () => {

  return (
    <>
      <div className="min-w-full border-yellow-500 relative md:p-0 z-0 min-h-screen flex flex-col items-center mx-auto">
        <BackgroundAnimation/>
        <TopNav />
        <ScrollToTop/>
        <Outlet  />
        <LowerNav />
        

       
        
      </div>
    </>
  );
};

export default Container;
