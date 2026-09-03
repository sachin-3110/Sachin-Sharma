import React, { useEffect } from "react";
import TopNav from "../../components/TopNav/TopNav";
import ScrollToTop from "../../components/ScrollToTop";
import { Outlet } from "react-router-dom";
import BackgroundAnimation from "../../components/BackgroundAnimation";
import { FileDown } from "lucide-react";

const Container = () => {
  return (
    <div className="w-full relative no-scrollbar p-2 border-yellow-500 relative z-0 min-h-screen flex flex-col items-center ">
      {/* <BackgroundAnimation/>   */}
      <div className="absolute z-5"></div>
      <TopNav />
      <ScrollToTop />
      <div className="w-full flex justify-center items-center  pt-20">
        <Outlet />
        <div className="cursor-pointer h-10 w-10 flex justify-center items-center rounded-full bg-white  animate-bounce text-black fixed bottom-10 right-10">
          <a href="https://docs.google.com/document/d/1mOPAIQYMvfd4sbyOTViGodG_n6spdLSd/edit?usp=sharing&ouid=101771593206391722329&rtpof=true&sd=true">
            <FileDown />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Container;
