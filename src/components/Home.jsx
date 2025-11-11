import { NavLink } from "react-router-dom";
import MusicBox from "./MusicBox";
import { motion } from "motion/react";
import { div, span } from "framer-motion/client";

const MiddleSections = () => {
  const heroDescpVariant = {
    initial: {
      opacity: 0,
      y: "100%",
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 * index,
        duration: 0.5,
      },
    }),
  };
  let heroDescp = `Precision. Performance. Pixel-Perfect.`;
  let splitArr = heroDescp.split(" ");
  return (
    <motion.div
      initial={{ filter: "blur(20px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.2 }}
      className="min-h-[70vh] p-5 w-full sm:w-[88%] flex flex-col md:flex-row"
    >
      <div id="text" className="w-full font-semibold text-left md:text-left ">
        <div className="text-5xl text-left sm:text-6xl md:text-8xl lg:text-9xl font-[solenoid] tracking-widest font-extralight">
          {splitArr.map((elem, index) => (
            <div className="overflow-hidden ">
              <motion.div
                className=""
                variants={heroDescpVariant}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{ once: true }}
              >
                {elem}
              </motion.div>
            </div>
          ))}
        </div>

        <div
          id="text"
          className="text-xl  md:text-2xl text-gray-400 font-extralight"
        >
          I don't just build websites, I craft digital experiences.
        </div>
        <div id="text" className="text-3xl my-10 w-full md:w-9/12 font-[solenoid] tracking-wider">
          {" "}
          Designs that move. Code that breathes.
        </div>
        <div className="buttonContainer pb-[10vh] md:w-[50%] font-extrabold tracking-wider font-[solenoid] flex items-center sm:gap-10 gap-2 sm:m-10 justify-between text-2xl md:text-4xl">
          <NavLink
            to={"project"}
            className="p-3 rounded-2xl bg-gray-200 text-black  hover:scale-105 duration-200"
          >
            Works
          </NavLink>
          <NavLink
            to={"contact"}
            className="p-3 rounded-2xl bg-gray-200 text-black hover:scale-105 duration-200"
          >
            Get in touch
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
};

export default MiddleSections;
