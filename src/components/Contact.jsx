import React from "react";
import Form from "./Form";
import ContactButtons from "./ContactButtons";
const Contact = () => {
  return (
    <div className="flex flex-col w-full px-5 md:w-[90%] h-full ">
      <h1 className="text-white mt-2 text-6xl md:text-5xl lg:text-7xl font-[solenoid]">
        Let's Connect
      </h1>
      <div className="h-full w-full text-black sm:gap-5 md:gap-2 mb-20 min-h-20 flex flex-col md:flex-row justify-center items-center">
        <Form />
        <div className="w-full my-5 md:w-1/2 flex  flex-col justify-center items-center">
          
        <div className="flex-none text-[#d1dd4a] text-3xl sm:text-4xl md:text-5xl font-semibold font-[solenoid]  tracking-wider">Reach out to me via:</div>
        <div className="w-full sm:px-0 mx-2 h-full flex justify-center border items-center">
          <ContactButtons />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
