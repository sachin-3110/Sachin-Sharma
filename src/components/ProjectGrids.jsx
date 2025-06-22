import { useState } from "react";
import ObysAgency from "../assets/ObysAgency.jpg";
import MarriageWebsite from "../assets/MarriageWebsite.jpg";
import Refokus from "../assets/Refokus.jpg";
import SunShare from "../assets/SunShare.jpg";
import Resqore from "../assets/Resqore.jpg";

const ProjectGrids = () => {
  const [Projects] = useState([
    {
      projectName: "ObysAgency",
      projectSS: ObysAgency,
      gitLink: "https://github.com/sachin-3110/ObysAgency",
      hostedLink: "https://sachin-3110.github.io/ObysAgency/obsysagency.html",
      projectDescp:
        "Obys Agency is an animation-rich website built with HTML, CSS, GSAP, and Locomotive Scroll. It features sleek transitions and creative layouts to enhance user experience.",
    },
    {
      projectName: "A Marriage Website",
      projectSS: MarriageWebsite,
      gitLink: "https://github.com/sachin-3110/A-marriage-Website",
      hostedLink: "https://sachin-3110.github.io/A-marriage-Website/",
      projectDescp:
        "Interactive wedding invitation website built using Tailwind CSS and GSAP. It showcases scroll animations and a clean, elegant design.",
    },
    {
      projectName: "Refokus",
      projectSS: Refokus,
      gitLink: "https://github.com/sachin-3110/Refokus",
      hostedLink: "https://refokus-seven.vercel.app/",
      projectDescp:
        "A clone of the Refokus agency site using Tailwind CSS and GSAP, with dynamic layouts, smooth scrolling, and bold UI animations.",
    },
    {
      projectName: "SunShare",
      projectSS: SunShare,
      gitLink: "https://github.com/sachin-3110/ogSunshare",
      hostedLink: "https://og-sun-share.vercel.app/",
      projectDescp:
        "SunShare is a sleek solar-energy info site with timeline animations and a responsive layout made with HTML, Tailwind, and GSAP.",
    },
    {
      projectName: "Resqore",
      projectSS: Resqore,
      gitLink: "https://github.com/sachin-3110/Resqore_SIH",
      hostedLink: "https://resqore.vercel.app/",
      projectDescp:
        "Resqore was built for SIH to deliver emergency guidelines, weather alerts, and notifications. Made with Tailwind CSS and JavaScript.",
    },
  ]);

  return (
    <div className="flex justify-center px-4 py-10">
      <div className="w-full max-w-7xl columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {Projects.map((project, index) => (
          <div
            key={index}
            className="break-inside-avoid relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all group hover:shadow-2xl"
          >
            <img
              src={project.projectSS}
              alt={project.projectName}
              className="w-full h-auto object-cover"
            />
            <div className="bg-black absolute text-white p-4 group-hover:translate-y-[-100%] transition-transform duration-300">
              <h2 className="text-xl font-bold text-center mb-2">
                {project.projectName}
              </h2>
              <p className="text-sm text-center mb-4">{project.projectDescp}</p>
              <div className="flex justify-between px-4 pb-2">
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-sm bg-white text-black px-3 py-1 rounded-xl">
                    GitHub
                  </button>
                </a>
                <a
                  href={project.hostedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-sm bg-white text-black px-3 py-1 rounded-xl">
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
