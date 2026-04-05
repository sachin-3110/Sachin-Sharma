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
    <div className="flex bg-white/20 w-full py-2 backdrop-blur-sm justify-evenly text-white text-2xl md:text-3xl items-center h-full rounded-2xl">
      {icons?.map((elem, index) => (
        <div
          key={index + 1}
          className="group h-full flex justify-center items-center"
        >
          <NavLink
            to={`${elem.path}`}
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-yellow-200 text-2xl scale-125 duration-400"
                  : "text-white text-2xl"
              } ${
                elem.iconCode
              } hover:scale-120 w-full duration-200 h-full flex justify-center items-center`
            }
          ></NavLink>
        </div>
      ))}
    </div>
  );
};

export default LowerNav;
