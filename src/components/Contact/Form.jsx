import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const [result, setResult] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setResult("Sending...");

    const formData = new FormData();
    formData.append("access_key", "83369596-a731-46c4-af11-4cf28b11658d");
    formData.append("name", data.Name);
    formData.append("email", data.mail);
    formData.append("message", data.messageInTheTextarea);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const res = await response.json();

      if (res.success) {
        setResult("Form Submitted Successfully");
        reset();
      } else {
        setResult("Something went wrong");
      }
    } catch (error) {
      setResult("Error submitting form");
    }
  };

  return (
    <div className="w-full md:w-2/3 lg:w-1/2">
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <div className="border text-2xl rounded-2xl mx-4 sm:mx-0 p-4 text-white">
          <h1 className="text-4xl font-bold">Say hi!</h1>

          <div className="flex gap-5 sm:px-4 px-2 my-4 sm:my-8 flex-wrap sm:flex-col">

            {/* Name */}
            <div className="w-full flex flex-col">
              <label className="font-semibold text-xl sm:text-2xl">
                Name
              </label>
              <input
                type="text"
                className="w-full m-2 border text-xl rounded-2xl p-2"
                placeholder="Your Name"
                {...register("Name", {
                  required: "Your name is important",
                  maxLength: {
                    value: 15,
                    message: "Max 15 characters",
                  },
                })}
              />
              {errors.Name && (
                <p className="text-sm text-red-500">
                  {errors.Name.message}
                </p>
              )}
            </div>
            <div className="w-full flex flex-col">
              <label className="font-semibold text-xl sm:text-2xl">
                Contact No:
              </label>
              <input
                type="number"
                className="w-full m-2 border text-xl rounded-2xl p-2"
                placeholder="+91 9876543210"
                {...register("phone")}
              />
            </div>

            {/* Email */}
            <div className="w-full flex flex-col">
              <label className="font-semibold text-xl sm:text-2xl">
                Email
              </label>
              <input
                type="email"
                className="w-full m-2 border text-xl rounded-2xl p-2"
                placeholder="you@gmail.com"
                {...register("mail", {
                  required: "Email is required",
                })}
              />
              {errors.mail && (
                <p className="text-sm text-red-500">
                  {errors.mail.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="w-full flex flex-col">
              <label className="font-semibold text-xl sm:text-2xl">
                Message
              </label>
              <textarea
                className="w-full m-2 border text-xl rounded-2xl p-2"
                placeholder="your message..."
                {...register("messageInTheTextarea", {
                  required: "Message is required",
                  minLength: {
                    value: 5,
                    message: "Minimum 5 characters",
                  },
                  maxLength: {
                    value: 100,
                    message: "Max 100 characters",
                  },
                })}
              />
              {errors.messageInTheTextarea && (
                <p className="text-sm text-red-500">
                  {errors.messageInTheTextarea.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full hover:bg-white/10 border duration-200 py-2 rounded-2xl my-2"
          >
            Submit
          </button>

          <p className="text-center text-sm mt-2">{result}</p>
        </div>
      </form>
    </div>
  );
};

export default Form;