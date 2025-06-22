import React from "react";
import whiteBg from '../assets/whiteBg.jpeg';
import blackimg1 from '../assets/blacbg.jpeg';
import blackimg2 from '../assets/blackBG.jpeg';
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="w-full md:w-[85%] px-2 h-full flex min-h-[50vh] flex-col md:flex-row">
      <div className="px-10 w-full md:max-w-[50%] text-xl flex flex-col gap-10 h-full">
        <div className="sm:text-8xl text-7xl relative sm:right-10 font-bold font-[solenoid]">
          PERSONA
        </div>
        <div id="textContainer" className="flex flex-col gap-20">
          <div id="text">
            Hello! I'm a <b>Front-End Developer</b> with a love for creating
            beautiful, functional digital experiences.
          </div>
          <div id="text">
            With experience spanning from web development to beautiful user
            interaction, I strive to bring a blend of technical expertise and
            creative thinking to every project.
          </div>
          <div id="text">
            When I'm not coding, you might find me watching movies, bingeing a
            good series, or just unwinding with some screen time.
          </div>
          <div
            id="hinditext"
            className="text-3xl flex flex-col  md:text-4xl tracking-tight w-full  md:w-auto font-cursive"
          >
            <span className="text-5xl relative -top-8 sm:-top-7  sm:-right-5 md:-right-2 md:-top-10 rotate-y-180 text-gray-300 rotate-180 inline-block ">
              L
            </span>
            <span className="font-[Hindi]">
              डिज़ाइन केवल यह नहीं है कि यह कैसा दिखता है और कैसा लगता है। डिज़ाइन यह है कि यह कैसे काम करता है।
            </span>
            <span className="text-5xl rotate-y-180 relative  sm:right-2 text-gray-300 inline-block ">
              L
            </span>
            <div
            id="text"
            className="text-xl text-gray-400 font-extralight"
          >
            Design is not just what it looks like and feels like. <span className=""> Design is how it works.</span>
          </div>
          </div>
          <a target="blank" className="w-fit hidden lg:flex cursor-pointer" href="https://drive.google.com/file/d/1RWuAWGe25ZS6ZNA9Lx0y2bowNPHgT-iG/view?usp=drive_link">
           <button className="p-2 rounded-2xl text-2xl border-2 cursor-pointer hover:bg-[#dadada] hover:text-black duration-200">Resume</button>
          </a>
        </div>
        
      </div>
      <div
        id="imagesSectioon"
        className="py-10 md:py-0 w-full md:w-[50%] grid grid-cols-2 md:flex flex-col justify-center items-center"
      >
        <div id="img1" className="overflow-hidden md:h-100 w-auto rounded-2xl">
          <img src={blackimg2} alt="" className="h-full" />

        </div>
        <div
          id="img2"
          className=" sm:h-80 md:h-100 w-auto border overflow-hidden rounded-2xl relative  md:right-20 md:-top-15"
        >
        <img src={whiteBg} alt=""  className="h-full w-full" />
        
        </div>
        <div
          id="img3"
          className=" sm:h-80 md:h-100 w-auto overflow-hidden rounded-2xl relative -right-20 -top-20"
        >
          <img src={blackimg1} alt="" className="h-full" />
          
        </div>
        <a target="blank" className="w-fit md:relative md:right-120  lg:-top-6 lg:hidden justify-self-end cursor-pointer" href="https://drive.google.com/file/d/1RWuAWGe25ZS6ZNA9Lx0y2bowNPHgT-iG/view?usp=drive_link">
           <button className="p-2 rounded-2xl text-2xl border-2 cursor-pointer hover:bg-[#dadada] hover:text-black duration-200">Resume</button>
          </a>
      </div>
    </div>
  );
};

export default About;
