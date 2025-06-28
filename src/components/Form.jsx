import { pattern } from "motion/react-client";
import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 ">
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <div className="bg-black border text-2xl rounded-2xl mx-4 sm:mx-0 p-4 text-white">
          <h1 className="text-4xl font-bold">Say hi!</h1>
          <div className="flex gap-5 sm:px-4 px-2 my-4 sm:my-8  flex-wrap sm:flex-col">
            <div className="w-full flex flex-col justify-center items-start">
              <label
                htmlFor=""
                className="font-semibold font-[solenoid] text-xl sm:text-2xl"
              >
                Name
              </label>
              <input
                type="text"
                className="w-full m-2 border text-xl rounded-2xl p-2"
                placeholder="Your Name"
                {...register("Name", {
                  required: { value: true, message: "Can't be empty." },
                  maxLength: 15,
                })}
              />
              <div className="font-semibold w-full">
                {errors.Name && (
                  <p className="text-center text-sm text-red-500">
                    {errors.Name.message}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start">
              <label
                htmlFor=""
                className="font-semibold font-[solenoid] text-xl sm:text-2xl"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full m-2 border text-xl rounded-2xl p-2"
                placeholder="you@gmail.com"
                {...register("mail", { required: "enter you mail"})}
              />
               <div className="font-semibold w-full">
                {errors.mail && (
                  <p className="text-center text-sm text-red-500">
                    {errors.mail.message}
                  </p>
                )}
              </div>
      
            </div>
            <div className="w-full flex flex-col justify-center items-start">
              <label
                htmlFor=""
                className="font-semibold font-[solenoid] text-xl sm:text-2xl"
              >
                Message
              </label>
              <textarea
                type="text"
                className="w-full m-2 border text-xl rounded-2xl p-2"
                placeholder="your compliments/message here.."
                {...register("messageInTheTextarea", {
                  required: true,
                  minLength: { value: 5, message: "Minimum characters is 5" },
                  maxLength: 99,
                })}
              />
              <div className="font-semibold w-full">
                {errors.messageInTheTextarea && (
                  <p className="text-center text-sm text-red-500">
                    {errors.messageInTheTextarea.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="w-full hover:bg-white bg-black hover:text-black border text-white duration-200 py-2 rounded-2xl my-2"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
