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
      socialLink: "mailto:sachinsharma8005@gmail.com",
    },
  ]);
  return (
    <div className="w-full">
      <div className="w-full duration-500 justify-center text-5xl font-[sans] flex-col items-center md:gap-20 gap-10 text-white">
        {button.map((elem) => (
          <div className="w-full grid grid-cols-1 place-items-center">
            <a
              href={
                elem.socialMediaName == "Gmail"
                  ? `mailto:${elem.socialLink}`
                  : elem.socialLink
              }
              className="sm:w-full hidden sm:flex "
              target="_blank"  
            >
              <button id="badiscreenIconswithText" className="group overflow-hidden relative hidden m-2 justify-center items-center gap-2 sm:flex hover:cursor-pointer border py-6 md:py-8 rounded-2xl bg-black hover:bg-white duration-200  font-semibold w-full hover:text-black">
                <i className={` duration-200 ${elem.iconCode}`}></i>
               <span className="w-0 border-2 overflow-hidden inline-block group-hover:w-55 duration-500"> {elem.socialMediaName}</span>
               <span className="durationi-500 group-hover:w-0 group-hover:hidden">{elem.socialMediaName}</span>
              </button>
            </a>
          </div>
        ))}
        <div id="chotiscreenKeLiye" className="w-full my-5 flex justify-center items-center sm:hidden">

        {
            button.map((elem)=><a href={elem.socialLink}><button className="hover:text-black text-5xl rounded-xl p-1 duration-200 hover:bg-white " ><i className={elem.iconCode}></i></button></a>)
        }
        </div>

      </div>
    </div>
  );
};

export default ContactButtons;
