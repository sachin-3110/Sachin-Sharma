import whiteBg from "../assets/whiteBg.jpeg";
import blackimg1 from "../assets/blacbg.jpeg";
import blackimg2 from "../assets/blackBG.jpeg";
import { motion } from "motion/react";
import Pills from "./Pills";
import LocomotiveScroll from "locomotive-scroll";
import SkillSection from "./SkillSection";
import Line from "./Line";
import Headings from "./Headings";
const About = () => {
  const specialwords =
    "bg-gray-500 text-white hover:bg-white hover:text-black duration-500 px-2 ";
  const scroll = new LocomotiveScroll();

  return (
    <motion.div
      initial={{ filter: "blur(20px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.2 }}
      className="w-full md:w-[85%] px-2 h-full mb-5 md:mb-20 flex min-h-[50vh] flex-col md:flex-row"
    >
      <div className="px-10 w-full md:max-w-[55%] text-xl flex flex-col mt-5 h-full">
        <div className="sm:text-8xl text-7xl relative sm:right-10 font-bold font-[solenoid]">
          PERSONA
        </div>
        <div id="textContainer" className="flex flex-col mt-5">
          <div id="text" className="text-2xl">
            Hello! I'm a{" "}
            <span className={`${specialwords}`}>Front-End Developer</span> with
            a love for creating beautiful,{" "}
            <span className={`${specialwords}`}>
              functional digital experiences.
            </span>
            <div id="skills"></div>
          </div>
          <Line />
          <Headings text="Skills I have," margin="2" />
          <SkillSection />
          <Line />
          <Headings text="Education" />
          <div id="text" className="text-2xl">
            <p>
              I'm pursuing Bachelors of Technology in
              <br />
              Computer Science Engineering. <i>[B.Tech CSE]</i>
              <br />
              from <br />
              <b>
                St. Andrews Institute Of Technology and Management <br />
                Gurgaon, Haryana.
              </b>
            </p>
          </div>
          <Line />

          <div id="text" className="text-2xl md:text-2xl hidden md:inline">
            With{" "}
            <span className={`${specialwords} text-nowrap h-fit w-fit border`}>
              experience spanning from web development
            </span>{" "}
            to beautiful user interaction, I strive to bring a blend of
            technical expertise and creative thinking to every project.
          </div>
          <div id="text" className="text-2xl">
            <b>
              Between code commits, I chase{" "}
              <span className={`${specialwords}`}>Football</span>, vibes, and
              episodes back-to-back.
            </b>
          </div>
        </div>
      </div>
      <div
        id="imagesSectioon"
        className="py-10 md:py-0 w-full md:w-[50%] grid grid-cols-2 md:flex flex-col justify-center items-end"
      >
        <div id="img1"
        data-scroll data-scroll-speed="-0.126"
        className="overflow-hidden h-55 md:h-100 w-auto rounded-2xl m-2 sm:m-0">
          <img 
            src={blackimg2}
            alt=""
            className="h-full hover:scale-110 duration-400"
          />
        </div>
        <div
          id="img2" data-scroll data-scroll-speed="-0.156"
          className=" sm:h-80 md:h-100 w-auto border overflow-hidden rounded-2xl relative  md:right-20 md:-top-15"
        >
          <img
            src={whiteBg}
            alt=""
            className="h-full w-full hover:scale-110 duration-400"
          />
        </div>
        <div
          id="img3"
          data-scroll data-scroll-speed="0.156"
          className=" sm:h-80 md:h-100 w-auto overflow-hidden rounded-2xl relative -right-20 -top-20"
        >
          <img
            src={blackimg1}
            alt=""
            className="h-full hover:scale-110 duration-400"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
