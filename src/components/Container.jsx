import React from "react";
import TopNav from "./TopNav";
import MiddleSections from "./MiddleSections";
import LowerNav from "./LowerNav";

const Container = () => {
  return (
    <div className="md:w-[90%] min-h-screen w-full flex flex-col justify-center items-center mx-auto">
      <TopNav />
      <MiddleSections />
      <LowerNav />
    </div>
  );
};

export default Container;
