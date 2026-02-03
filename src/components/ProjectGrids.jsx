import { useState } from "react";
import ObysAgency from "../assets/ObysAgency.jpg";
import MarriageWebsite from "../assets/MarriageWebsite.jpg";
import Refokus from "../assets/Refokus.jpg";
import SunShare from "../assets/SunShare.jpg";
import Resqore from "../assets/Resqore.jpg";
import LocomotiveScroll from "locomotive-scroll";

const ProjectGrids = () => {
  const scroll = new LocomotiveScroll();
  
  // State to track which project is currently being "viewed"
  const [activeProject, setActiveProject] = useState(null);

  let shadow = `shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`;
  
  const [Projects] = useState([
    {
      projectName: "ObysAgency",
      projectSS: ObysAgency,
      gitLink: "https://github.com/sachin-3110/ObysAgency",
      hostedLink: "https://sachin-3110.github.io/ObysAgency/obsysagency.html",
      projectDescp: "Obys Agency is an animation-rich website built with HTML, CSS, GSAP, and Locomotive Scroll. It features sleek transitions and creative layouts to enhance user experience.",
    },
    {
      projectName: "A Marriage Website",
      projectSS: MarriageWebsite,
      gitLink: "https://github.com/sachin-3110/A-marriage-Website",
      hostedLink: "https://sachin-3110.github.io/A-marriage-Website/",
      projectDescp: "Interactive wedding invitation website built using Tailwind CSS and GSAP. It showcases scroll animations and a clean, elegant design.",
    },
    {
      projectName: "Refokus",
      projectSS: Refokus,
      gitLink: "https://github.com/sachin-3110/Refokus",
      hostedLink: "https://refokus-seven.vercel.app/",
      projectDescp: "A clone of the Refokus agency site using Tailwind CSS and GSAP, with dynamic layouts, smooth scrolling, and bold UI animations.",
    },
    {
      projectName: "SunShare",
      projectSS: SunShare,
      gitLink: "https://github.com/sachin-3110/ogSunshare",
      hostedLink: "https://og-sun-share.vercel.app/",
      projectDescp: "SunShare is a sleek solar-energy info site with timeline animations and a responsive layout made with HTML, Tailwind, and GSAP.",
    },
    {
      projectName: "Resqore",
      projectSS: Resqore,
      gitLink: "https://github.com/sachin-3110/Resqore_SIH",
      hostedLink: "https://resqore.vercel.app/",
      projectDescp: "Resqore was built for SIH to deliver emergency guidelines, weather alerts, and notifications. Made with Tailwind CSS and JavaScript.",
    },
  ]);

  return (
    <div className="flex justify-center px-4 py-10">
      <div className="w-full max-w-7xl columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {Projects.map((project, index) => (
          <div
            data-scroll
            data-scroll-speed={index % 2 === 0 ? "0.123" : "-0.153"}
            key={index}
            // MOUSE EVENTS (Desktop)
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
            // CLICK EVENT (Mobile/Tablet)
            onClick={() => setActiveProject(activeProject === index ? null : index)}
            className={`${index === 0 || index === 1 ? "text-sm" : "text-xl"} relative rounded-2xl overflow-hidden transition-all group cursor-pointer ${shadow}`}
          >
            <div
              id="projectTITLE"
              className="bg-black flex font-extrabold normal text-2xl gap-2 p-2 text-white"
            >
              <p>{index + 1}</p>.<span>{project.projectName}</span>
            </div>

            <img
              src={project.projectSS}
              alt={project.projectName}
              className={`${index === 0 || index === 1 ? "h-[40vh] sm:h-auto" : ""} w-full object-cover `}
            />

            <div
              id="projectInfoCard"
              className={`
                ${index === 1 || index === 0 ? "p-5 max-h-50" : "py-4"} 
                bg-black absolute text-white w-full transition-transform duration-300 left-0
                ${activeProject === index ? "-translate-y-full" : "translate-y-0"}
              `}
              style={{ top: "100%" }}
            >
              <p className="mb-2 text-left px-2 ">{project.projectDescp}</p>
              <div
                id="buttons"
                className="border-y-4 flex justify-between w-full "
              >
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // Prevents the card from closing when clicking link
                  className="border-white duration-400 border-r-2 w-1/2 active:bg-white hover:bg-white active:text-black hover:text-black flex justify-center p-1"
                >
                  <button className="duration-200 font-bold px-3 py-1 rounded-xl">
                    GitHub
                  </button>
                </a>
                <a
                  className="border-white duration-400 border-l-2 w-1/2 flex active:bg-white hover:bg-white active:text-black hover:text-black justify-center p-1"
                  href={project.hostedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // Prevents the card from closing when clicking link
                >
                  <button className="duration-200 font-bold px-3 py-1 rounded-xl">
                    Live Site
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrids;