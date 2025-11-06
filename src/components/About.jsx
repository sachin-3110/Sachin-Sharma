import whiteBg from '../assets/whiteBg.jpeg';
import blackimg1 from '../assets/blacbg.jpeg';
import blackimg2 from '../assets/blackBG.jpeg';
import { motion } from 'motion/react';
const About = () => {
  const specialwords="bg-gray-500 text-white hover:bg-white hover:text-black duration-500 px-2 "
  return (
    <motion.div
      initial={{filter:"blur(20px)"}}
      animate={{filter:"blur(0px)"}}
      transition={{duration:.200}}
    className="w-full md:w-[85%] px-2 h-full flex min-h-[50vh] flex-col md:flex-row">
      <div className="px-10 w-full md:max-w-[50%] text-xl flex flex-col gap-10 h-full">
        <div className="sm:text-8xl text-7xl relative sm:right-10 font-bold font-[solenoid]">
          PERSONA
        </div>
        <div id="textContainer" className="flex flex-col gap-20 font-[Brigsa]">
          <div id="text" className="text-2xl font-[Brigsa]">
            Hello! I'm a <span className={`${specialwords}`} >Front-End Developer</span> with a love for creating
            beautiful, <span className={`${specialwords}`}>functional digital experiences.</span>
          </div>
          <div id="text" className="text-2xl">
          <p>
            I'm pursuing Bachelors of Technology in<br />Computer Science Engineering. <i>[B.Tech CSE]</i>
            <br />My College name is........ well does it matter? Even my degree doesn't.

          </p>
          </div>
          <div id="text" className="text-2xl md:text-2xl hidden md:inline">
            With <span className={`${specialwords} text-nowrap h-fit w-fit border`}>experience spanning from web development</span> to beautiful user
            interaction, I strive to bring a blend of technical expertise and
            creative thinking to every project.
          </div>
          <div id="text" className="text-2xl">
<b>

            Between code commits, I chase <span className={`${specialwords}`}>Football</span>, vibes, and episodes back-to-back.
</b>
          </div>
    
          <a target="blank" className="w-fit hidden lg:flex cursor-pointer" href="https://drive.google.com/file/d/1RWuAWGe25ZS6ZNA9Lx0y2bowNPHgT-iG/view?usp=drive_link">
           <button className="p-2 rounded-2xl font-[customfont1]  text-3xl border-2 cursor-pointer hover:bg-[#dadada] hover:text-black duration-200">Resume</button>
          </a>
        </div>
        
      </div>
      <div
        id="imagesSectioon"
        className="py-10 md:py-0 w-full md:w-[50%] grid grid-cols-2 md:flex flex-col justify-center items-end"
      >
        <div id="img1" className="overflow-hidden md:h-100 w-auto rounded-2xl">
          <img src={blackimg2} alt="" className="h-full hover:scale-110 duration-400" />

        </div>
        <div
          id="img2"
          className=" sm:h-80 md:h-100 w-auto border overflow-hidden rounded-2xl relative  md:right-20 md:-top-15"
        >
        <img src={whiteBg} alt=""  className="h-full w-full hover:scale-110 duration-400" />
        
        </div>
        <div
          id="img3"
          className=" sm:h-80 md:h-100 w-auto overflow-hidden rounded-2xl relative -right-20 -top-20"
        >
          <img src={blackimg1} alt="" className="h-full hover:scale-110 duration-400" />
          
        </div>
        <a target="blank" className="w-fit md:relative md:right-120  lg:-top-6 lg:hidden justify-self-end cursor-pointer" href="https://drive.google.com/file/d/1RWuAWGe25ZS6ZNA9Lx0y2bowNPHgT-iG/view?usp=drive_link">
           <button className="p-2 rounded-2xl font-semi text-2xl border-2 cursor-pointer hover:bg-[#dadada] hover:text-black duration-200">Resume</button>
          </a>
      </div>
    </motion.div>
  );
};

export default About;
