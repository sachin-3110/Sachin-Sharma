import React, { useEffect } from "react";
import TopNav from "../../components/TopNav/TopNav";
import ScrollToTop from "../../components/ScrollToTop";
import { Outlet } from "react-router-dom";
import LowerNav from "../../components/LowerNav";
const Container = () => {

  return (
      <div className="min-w-full border-yellow-500 relative md:p-0 z-0 min-h-screen flex flex-col items-center mx-auto">
        {/* <BackgroundAnimation/> */}
        <TopNav />
        <ScrollToTop/>
        <Outlet  />
        <LowerNav />
      </div>
  );
};

export default Container;
