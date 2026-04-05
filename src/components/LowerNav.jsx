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
    <div className="flex bg-white/20 w-full py-2 backdrop-blur-sm justify-evenly text-white text-2xl md:text-3xl items-center h-full rounded-xl">
      {icons?.map((elem, index) => (
        <NavLink
          to={elem.path}
          key={index + 1}
          className="group flex flex-col justify-center items-center"
        >
        {({isActive})=> <>
          <i className={`${elem.iconCode}   ${isActive ? "text-yellow-200":""}`}></i>
          <div
            id="circle"
            className={`${isActive ? "bg-yellow-200 w-2 group-hover:bg-yellow-200 " : ""}group-hover:w-2  group-hover:bg-white duration-200 rounded-full h-2 w-0 bg-transparent `}
          >           
          </div>
        </>}
        </NavLink>
      ))}
    </div>
  );
};

export default LowerNav;
