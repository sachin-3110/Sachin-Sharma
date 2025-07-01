import whiteBg from '../assets/whiteBg.jpeg';
import blackimg1 from '../assets/blacbg.jpeg';
import blackimg2 from '../assets/blackBG.jpeg';
const About = () => {
  const specialwords="bg-gray-500 text-white hover:bg-white hover:text-black duration-500 px-2 "
  return (
    <div className="w-full md:w-[85%] px-2 h-full flex min-h-[50vh] flex-col md:flex-row">
      <div className="px-10 w-full md:max-w-[50%] text-xl flex flex-col gap-10 h-full">
        <div className="sm:text-8xl text-7xl relative sm:right-10 font-bold font-[solenoid]">
          PERSONA
        </div>
        <div id="textContainer" className="flex flex-col gap-20">
          <div id="text" className="text-2xl md:text-xl font-[cursive]">
            Hello! I'm a <span className={`${specialwords}`} >Front-End Developer</span> with a love for creating
            beautiful, <span className={`${specialwords}`}>functional digital experiences.</span>
          </div>
          <div id="text" className="text-2xl md:text-xl font-[cursive]">
          <p>
            I'm pursuing Bachelors of Technology in<br />Computer Science Engineering. <i>[B.Tech CSE]</i>
            <br />My College name is........ well does it matter? Even my degree doesn't.

          </p>
          </div>
          <div id="text" className="text-2xl md:text-xl font-[cursive] hidden md:inline">
            With <span className={`${specialwords} text-nowrap h-fit w-fit border`}>experience spanning from web development</span> to beautiful user
            interaction, I strive to bring a blend of technical expertise and
            creative thinking to every project.
          </div>
          <div id="text" className="text-2xl md:text-xl font-[cursive]">
<b>

            Between code commits, I chase <span className={`${specialwords}`}>Football</span>, vibes, and episodes back-to-back.
</b>
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
    </div>
  );
};

export default About;
