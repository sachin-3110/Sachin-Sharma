import React, { useEffect, useState } from "react";
import ThemeButton from "../ThemeButton";
import { useLocation } from "react-router-dom";
import HeroSection from "./HeroSection";
import { motion } from "motion/react";
const TopNav = () => {
  const [date, setDate] = useState([]);
  const [Time, setTime] = useState([]);
  useEffect(() => {
    const updateDateTime = () => {
      var onlyDate = new Date().toLocaleString().split("/");
      var onlyTime = new Intl.DateTimeFormat("en-GB", {
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
    <motion.div
      initial={{ filter: "blur(20px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      className="w-[90%] bg-black m-2  flex font-[solenoid] font-bold justify-center sm:justify-between sm:px-3 border-[1px] flex-col border-white rounded-2xl min-h-[22vh] md:flex-row md:min-h-[10vh] md:my-5"
    >
      <h1 className="uppercase font-extrabold flex justify-center items-center text-3xl">
        {/* {displayName} */}
        <HeroSection />
      </h1>
      <ThemeButton />

      <div id="time" className="p-3 flex flex-col justify-center items-center">
        <div className="sm:text-2xl flex md:gap-1">
          <h1>{date[0]}/</h1>
          <h1>{date[1]}/</h1>
          <h1>{date[2]?.split(",")[0]}</h1>
        </div>
        <div className="text-sm sm:text-2xl flex gap-1 font-bold text-yellow-200">
          <h1 className="">{Time[0]}</h1>:<h1 className="">{Time[1]}</h1>:
          <h1 className=" duration-200 animate-bounce text-2xl">
            {Time[2]?.split("").slice(0, 2).join("")}
          </h1>
          <h1 className="uppercase duration-200">
            {Time[2]?.split("").slice(2, 5).join("")}
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

export default TopNav;
