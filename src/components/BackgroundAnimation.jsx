import React from 'react'

const BackgroundAnimation = () => {
 const icon1 = "ri-terminal-window-line";
  const icon2 = "ri-file-code-line";
  const iconArray = [];
  for (let i = 0; i <= 11; i++) {
    if (i % 2 == 0) {
      iconArray.push(icon1);
    } else iconArray.push(icon2);
  }
  return (
    <div className="w-full text-5xl h-full -z-2 overflow-hidden grid grid-cols-3 grid-rows-5 md:grid-cols-5 md:grid-rows-3 absolute ">
          {iconArray.map((elem, index) => (
            <div className="group border-[#dadada29]">
              <div
              className={`${
                index % 2 == 0
                  ? "text-8xl items-start justify-end relative top-20 md:top-10  group-hover:translate-x-5 group-hover:translate-y-10 md:border-amber-200"
                  : "items-end justify-start text-8xl relative md:top-20 border-white  group-hover:-translate-x-10 group-hover:-translate-y-5"
              } ${elem} flex justify-center opacity-15 duration-500 h-full `}
            ></div>
            </div>
          ))}

        
        </div>
  )
}

export default BackgroundAnimation