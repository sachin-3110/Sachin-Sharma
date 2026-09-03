import React, { useState } from "react";
import Pills from "./Pills";
import Line from "./Line";

const SkillSection = () => {
  const [seeMore, setSeeMore] = useState(false);

  const technicalSkills = {
    languages: ["JavaScript (ES6+)", "Java", "HTML5", "CSS3", "TypeScript"],
    frontend: [
      "React.js",
      "Next.js",
      "Framer Motion",
      "GSAP",
      "Tailwind CSS",
      "Microfrontend",
    ],
    backend: ["Node.js", "Express.js", "REST APIs"],
    databases: ["MongoDB (Mongoose)", "SQL", "PostgreSQL"],
    aiAndTools: [
      "Git/GitHub",
      "Postman",
      "Vercel",
      "AWS (Basics)",
      "Docker",
      "RAG",
    ],
  };

  const softSkills = [
    "Problem-Solving",
    "Communication",
    "Teamwork",
    "Collaboration",
    "Time Management",
    "Friendly Adaptability",
    "Attention to Detail",
    "Positive Attitude",
  ];

  return (
    <div
      className="flex flex-col group/line justify-center h-auto items-center gap-2 w-full duration-500 hover:p-5 hover:bg-white hover:text-black flex-wrap border-1 p-2 rounded-2xl"
      id="skills"
    >
      {/* Languages */}
      <h2 className="skillHeading place-self-start">Languages</h2>
      <div className="flex flex-wrap w-full gap-2">
        {technicalSkills.languages.map((skill, index) => (
          <Pills key={index} text={skill} />
        ))}
      </div>

      <div className="w-[90%] h-[0.5px] group-hover/line:bg-black my-[1rem] bg-white transition-colors duration-300"></div>

      {/* Frontend */}
      <h2 className="skillHeading place-self-start">Frontend</h2>
      <div className="flex flex-wrap w-full gap-2">
        {technicalSkills.frontend.map((skill, index) => (
          <Pills key={index} text={skill} />
        ))}
      </div>

      {/* Expandable Sections */}
      <div
        className={`w-full ${
          seeMore ? "flex" : "hidden"
        } flex-col justify-center items-center h-full transition-all duration-300`}
      >
        <div className="w-[90%] h-[0.5px] group-hover/line:bg-black my-[1rem] bg-white transition-colors duration-300"></div>

        {/* Backend */}
        <h2 className="skillHeading place-self-start">Backend</h2>
        <div className="flex flex-wrap w-full items-start gap-2">
          {technicalSkills.backend.map((skill, index) => (
            <Pills key={index} text={skill} />
          ))}
        </div>

        <div className="w-[90%] h-[0.5px] group-hover/line:bg-black my-[1rem] bg-white transition-colors duration-300"></div>

        {/* Databases */}
        <h2 className="skillHeading place-self-start">Databases</h2>
        <div className="flex flex-wrap w-full items-start gap-2">
          {technicalSkills.databases.map((skill, index) => (
            <Pills key={index} text={skill} />
          ))}
        </div>

        <div className="w-[90%] h-[0.5px] group-hover/line:bg-black my-[1rem] bg-white transition-colors duration-300"></div>

        {/* AI & Tools */}
        <h2 className="skillHeading place-self-start">AI & Tools</h2>
        <div className="flex flex-wrap w-full items-start gap-2">
          {technicalSkills.aiAndTools.map((skill, index) => (
            <Pills key={index} text={skill} />
          ))}
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => {
          setSeeMore((prev) => !prev);
        }}
        className="w-[90%] mt-2 p-2 bg-white active:scale-[0.98] text-black group-hover/line:text-white duration-300 group-hover/line:bg-black rounded-full font-medium cursor-pointer"
      >
        See {seeMore ? "Less" : "More"}
      </button>
    </div>
  );
};

export default SkillSection;