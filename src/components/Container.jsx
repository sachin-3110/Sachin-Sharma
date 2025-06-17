import React, { useEffect } from "react";
import TopNav from "./TopNav";
import MiddleSections from "./MiddleSections";
import LowerNav from "./LowerNav";
import { Outlet } from "react-router-dom";
import { span } from "motion/react-client";

const Container = () => {

  return (
    <div className="md:w-[90%] relative md:p-0 min-h-screen w-full flex flex-col items-center mx-auto">
      <TopNav />
      <Outlet/>
      <LowerNav />
    </div>
  );
};

export default Container;
