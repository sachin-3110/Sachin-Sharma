import React, { useState } from 'react'
import Pills from './Pills'
import Line from './Line';
const SkillSection = () => {
    const [seeMore,setSeeMore]=useState(false)
    const technicalSkills = {
    languages: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
    frameworksLibraries: ["React.js","NodeJs", "Next.js", "Redux", "TailwindCSS", "Routing"],
    animation:["motion","spline","lenis","gsap"],
    backend_API: ["RESTful APIs", "Axios"],
    databases: ["MySQL", "MongoDB"],
    versionControl: ["Git", "GitHub"],
    tooling: ["VS Code", "Cursor AI", "Jenkins","NodeJs"],
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
         <div className="flex flex-col group/line justify-center h-auto items-center gap-2 w-full duration-500 hover:p-5 hover:bg-white hover:text-black flex-wrap border-1 p-2 rounded-2xl" id="skills">
            <h2 className="skillHeading place-self-start">Languages</h2>
            <div className="flex flex-wrap w-full gap-2">
              {technicalSkills.languages.map((skill, index) => (
                <Pills key={index} text={skill} />
              ))}
            </div>
            <div className='w-[90%] h-[0.5px] group-hover/line:bg-black my-[1rem] bg-white'></div>
            <h2 className="skillHeading place-self-start">Frameworks and Libraries</h2>
            <div className="flex flex-wrap w-full gap-2">
              {technicalSkills.frameworksLibraries.map((skill, index) => (
                <Pills key={index} text={skill} />
              ))}
            </div>
            <div className='w-[90%] h-[0.5px] group-hover/line:bg-black my-[1rem] bg-white'></div>
            <h2 className="skillHeading place-self-start">Animation Libraries</h2>
            <div className="flex flex-wrap w-full gap-2">
              {technicalSkills.animation.map((skill, index) => (
                <Pills key={index} text={skill} />
              ))}
            </div>
           
            <div className={`w-full ${seeMore?"flex":"hidden"} flex-col justify-center items-center mb-2 h-full`}>
                 <div className='w-[90%] h-[0.5px] group-hover/line:bg-black my-[1rem] bg-white'></div>
            <h2 className="skillHeading place-self-start">Backend_Apis</h2>
            <div className="flex flex-wrap w-full item-start gap-2">
              {technicalSkills.backend_API.map((skill, index) => (
                <Pills key={index} text={skill} />
              ))}
            </div> 
           <div className="group/line w-full flex flex-col items-center mb-8">
        <div className='w-[90%] h-[0.5px] group-hover/line:bg-black transition-colors duration-300 my-[1rem] bg-white'></div>
        <h2 className="skillHeading place-self-start text-xl font-bold mb-3">Databases</h2>
        <div className="flex flex-wrap w-full items-start gap-2">
          {technicalSkills.databases.map((skill, index) => (
            <Pills key={index} text={skill} />
          ))}
        </div>
      </div>

      <div className="group/line w-full flex flex-col items-center mb-8">
        <div className='w-[90%] h-[0.5px] group-hover/line:bg-black transition-colors duration-300 my-[1rem] bg-white'></div>
        <h2 className="skillHeading place-self-start text-xl font-bold mb-3">Tooling</h2>
        <div className="flex flex-wrap w-full items-start gap-2">
          {technicalSkills.tooling.map((skill, index) => (
            <Pills key={index} text={skill} />
          ))}
        </div>
      </div>
            
            </div>
            <button onClick={()=>{
                console.log("clicked")
                setSeeMore(prev=>!prev)
            }} className='w-[90%] p-2 bg-white active:bg-black/50 text-black group-hover/line:text-white  duration-400 group-hover/line:bg-black  rounded-full'>See {seeMore?"Less":"More"}</button>
          </div>
  )
}

export default SkillSection