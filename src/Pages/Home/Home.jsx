import React, { useEffect } from "react";
import TopNav from "../../components/TopNav/TopNav";
import ScrollToTop from "../../components/ScrollToTop";
import { Outlet } from "react-router-dom";
import BackgroundAnimation from "../../components/BackgroundAnimation";


const Container = () => {
  return (
    <div className="w-full no-scrollbar p-2 border-yellow-500 relative z-0 min-h-screen flex flex-col items-center ">
      {/* <BackgroundAnimation/>   */}
      <div className="absolute z-5">
      </div>
      <TopNav  />
      <ScrollToTop/>
     <div className="w-full flex justify-center items-center pt-20">
       <Outlet/>
     </div>
    </div>
  );
};

export default Container;
