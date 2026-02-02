import { NavLink } from "react-router-dom";
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

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
        delay: 0.2*index ,
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
      transition={{ duration: 0.26 }}
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
                animate="animate"
                custom={index}
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
      
      </div>
      {/* <div className="h-full w-1/2  border-1 rounded-full">
      
      </div> */}
    </motion.div>
  );
};

export default MiddleSections;
