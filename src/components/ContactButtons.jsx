import { useScroll } from "motion/react";
import { a, div } from "motion/react-client";
import React, { useState } from "react";

const ContactButtons = () => {
  const [button, setbutton] = useState([
    {
      iconCode: "ri-linkedin-box-fill",
      socialMediaName: "LinkedIn",
      socialLink: "https://linkedin.com/in/sachin-sharma-296082248",
    },
    {
      iconCode: "ri-github-fill",
      socialMediaName: "Github",
      socialLink: "https://github.com/sachin-3110",
    },
    {
      iconCode: "ri-mail-send-fill",
      socialMediaName: "Gmail",
      socialLink: "https://sachinsharma8005@gmail.com",
    },
  ]);
  return (
    <div className="w-full">
      <div className="w-full justify-center text-5xl font-[sans] flex-col items-center md:gap-20 gap-10 text-white">
        {button.map((elem) => (
          <div className="w-full">
            <a
              href={
                elem.socialMediaName == "Gmail"
                  ? `mailto:${elem.socialLink}`
                  : elem.socialLink
              }
              className="sm:w-full hidden sm:flex "
              target="_blank"  
            >
              <button id="badiscreenIconswithText" className="group hidden m-2 justify-center items-center gap-2 sm:flex hover:cursor-pointer border py-6 md:py-8 rounded-2xl bg-black hover:bg-white duration-200  font-semibold w-full hover:text-black">
                <i className={`group-hover:translate-x-10 group-hover:opacity-100 -translate-x-20 opacity-0 duration-400 ${elem.iconCode}`}></i>
                <i className={`group-hover:translate-x-20 group-hover:opacity-0 duration-200 ${elem.iconCode}`}></i>
               <span className=""> {elem.socialMediaName}</span>
              </button>
            </a>
          </div>
        ))}
        <div id="chotiscreenKeLiye" className="w-full my-5 flex justify-evenly sm:hidden">

        {
            button.map((elem)=><a href={elem.socialLink}><button className="hover:text-black text-5xl rounded-xl p-1 duration-200 hover:bg-white " ><i className={elem.iconCode}></i></button></a>)
        }
        </div>

      </div>
    </div>
  );
};

export default ContactButtons;
