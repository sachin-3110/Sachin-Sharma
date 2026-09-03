import { useState } from "react";
import ObysAgency from "../assets/ObysAgency.jpg";
import MarriageWebsite from "../assets/MarriageWebsite.jpg";
import Refokus from "../assets/Refokus.jpg";
import SunShare from "../assets/SunShare.jpg";
import MontBold from "../assets/montBoldss.png";
import Resqore from "../assets/Resqore.jpg";
import LocomotiveScroll from "locomotive-scroll";
import DKSDesign from "../assets/dksDesign.png"
import Bishambu from "../assets/bishambu.png"
import VedicNature from "../assets/vedicnature.png"
import NovoCurve from "../assets/novocurve.png"
import AartiGems from "../assets/aartigemsmine.png"

import { Link } from "react-router-dom";
import Projects from "./Projects";






const ProjectGrids = () => {
  const scroll = new LocomotiveScroll();
  const [Projects] = useState([
    {
      projectName: "MontBold",
      projectSS: MontBold,
      gitLink: null,
      hostedLink: "https://montbold-dev.vercel.app/",
      projectDescp: "Montbold is a full-stack eCommerce website developed to demonstrate my ability to design and build scalable, user-centric web applications. The project focuses on delivering a seamless shopping experience while maintaining clean architecture and modern UI principles.",
    },
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
      projectName: "DKSDesign",
      projectSS: DKSDesign,
      gitLink: null,
      hostedLink: "https://dk-sdesign.vercel.app/index.html",
      projectDescp: "DKS Design is a professionally crafted landing website developed for a BIM (Building Information Modeling) engineering firm, with a strong focus on clarity, credibility, and lead generation. The primary goal of this project was to present complex engineering services in a simplified, visually structured format that resonates with both technical and non-technical audiences.",
    },
    {
      projectName: "Bishambu",
      projectSS: Bishambu,
      gitLink: null,
      hostedLink: "https://bishambu.com/",
      projectDescp: "Bishambu is a comprehensive booking and lead generation website for a tent and catering service, offering diverse event management solutions.",
    },
    {
      projectName: "VedicNature",
      projectSS: VedicNature,
      gitLink: null,
      hostedLink: "https://vedic-nature.vercel.app/product/101",
      projectDescp: "VedicNature is a premium perfume eCommerce site featuring smooth scrolling animations and interactive hover effects for an immersive luxury experience.",
    },
    {
      projectName: "Novo Cure Tensile",
      projectSS: NovoCurve,
      gitLink: null,
      hostedLink: "https://novo-cure.vercel.app/",
      projectDescp: "A professional corporate website for Novo Cure Tensile, a specialized tensile structure company, showcasing their architectural solutions and expertise.",
    },
    {
      projectName: "Aarti Gems Mine",
      projectSS: AartiGems,
      gitLink: null,
      hostedLink: "https://agm-olive.vercel.app/",
      projectDescp: "A sleek and modern digital presence for Aarti Gems Mine, highlighting their unique gemstones and jewelry collections with a clean, high-end design.",
    },
  ]);
  
  // State to track which project is currently being "viewed"
  
  

  return (
    <div className="flex justify-center px-4 py-10">
      <div className="masonary-container">
        {Projects.map((project, index) => (
          <div
            key={index}
            className="masonary-item"
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
              className="object-fit object-contain w-full"
            />

            <div
              id="projectInfoCard"
              className="bg-white/20 py-2 backdrop:blur-2xl "
              style={{ top: "100%" }}
            >
              <p className="mb-2 text-left px-2 ">{project.projectDescp}</p>
              <div
                id="buttons"
                className="border-y-4 flex justify-between  "
              >
               {
                (false)?
                 <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // Prevents the card from closing when clicking link
                  className="border-white duration-400  w-full active:bg-white hover:bg-white active:text-black hover:text-black flex justify-center p-1"
                >
                  <button className="duration-200 hover:cursor-pointer font-bold px-2 rounded-xl">
                    GitHub
                  </button>
                </a>
                :""
               }
                <Link
                  className="duration-400 w-full hover:cursor-pointer flex active:bg-white hover:bg-white active:text-black hover:text-black justify-center p-1"
                  to={project.hostedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} 
                >
                  <button className="duration-200 hover:cursor-pointer font-bold px-3 py-1 rounded-xl">
                    Live Site
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrids;

