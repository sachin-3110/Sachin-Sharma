import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import { motion } from "motion/react";
import LowerNav from "../LowerNav";
import { div } from "motion/react-client";
const TopNav = ({ light }) => {
  const [date, setDate] = useState([]);
  const [Time, setTime] = useState([]);
  useEffect(() => {
    console.log(light);
    const updateDateTime = () => {
      let onlyDate = new Date().toLocaleString().split("/");
      let onlyTime = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(new Date());
      setDate(onlyDate);
      setTime(onlyTime.split(":"));
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="fixed w-full sm:px-20 z-40  top-0 sm:top-4">
      <motion.div
        initial={{ filter: "blur(20px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white/10 backdrop-blur-sm flex  font-[solenoid] font-bold justify-between items-center  border-white sm:rounded-2xl"
      >
        <h1 className="px-2 tracking-wider font-extrabold text-2xl sm:text-4xl">
          <HeroSection />
        </h1>
        <div className="h-full z-999 flex justify-center item-center p-2 w-full sm:w-1/2">
          <LowerNav />
        </div>
      </motion.div>
    </div>
  );
};

export default TopNav;
