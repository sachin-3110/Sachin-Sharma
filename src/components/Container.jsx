import React, { useEffect } from "react";
import TopNav from "./TopNav";
import LowerNav from "./LowerNav";
import { Outlet } from "react-router-dom";
import BackgroundAnimation from "./BackgroundAnimation";
const Container = () => {

  return (
    <>
      <div className="w-full relative md:p-0 z-0 min-h-screen flex flex-col items-center mx-auto">
        <BackgroundAnimation/>
        <TopNav />
        <Outlet />
        <LowerNav />
        
      </div>
    </>
  );
};

export default Container;
