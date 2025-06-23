import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const LowerNav = () => {
  const [icons, setIcons] = useState([
    { name: "Home", iconCode: "ri-home-9-line", effects: "", path: "/" },
    { name: "About", iconCode: "ri-user-6-line", effects: "", path: "/about" },
    {
      name: "Projects",
      iconCode: "ri-layout-masonry-fill",
      effects: "",
      path: "/project",
    },
    {
      name: "Contact",
      iconCode: "ri-mail-send-line",
      effects: "",
      path: "/contact",
    },
  ]);
  return (
    <div className="flex fixed bottom-4 min-w-[120px] bg-[#45414176] justify-evenly text-white text-2xl md:text-3xl items-center min-h-[8vh] md:h-[8vh] mb-5 border-[1px] w-[40%] rounded-2xl">
      {icons?.map((elem, index) => (
        <div className="group h-full w-full flex justify-center items-center ">
          <div
            id="text"
            className="absolute text-xl linear p-1 scale-0 duration-400 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:-translate-y-[150%] font-bold tracking-[2px]"
          >
            {elem.name}
          </div>
          <NavLink
            to={`${elem.path}`}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-yellow-200 text-2xl scale-125 duration-400"
                  : "text-white text-2xl"
              } ${
                elem.iconCode
              } hover:scale-110 w-full h-full flex justify-center items-center`
            }
          ></NavLink>
        </div>
      ))}
    </div>
  );
};

export default LowerNav;
