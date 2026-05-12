import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const [result, setResult] = useState("");

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // The 'data' argument contains all your field values
  const onSubmit = async (data) => {
    setResult("Sending....");

    // Prepare data for Web3Forms
    const formData = new FormData();
    formData.append("access_key", "83369596-a731-46c4-af11-4cf28b11658d");
    
    // Append all form fields to formData
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const resData = await response.json();

      if (resData.success) {
        setResult("Form Submitted Successfully");
        reset(); // Clears the form fields
      } else {
        setResult("Error: " + resData.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full md:w-2/3 lg:w-1/2">
      {/* Wrap with handleSubmit */}
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <div className="border text-2xl rounded-2xl mx-4 sm:mx-0 p-4 text-white bg-zinc-900/20 backdrop:blur-2xl">
          <h1 className="text-4xl font-bold">Say hi!</h1>

          <div className="flex gap-5 sm:px-4 px-2 my-4 sm:my-8 flex-wrap flex-col">
            
            {/* Name */}
            <div className="w-full flex flex-col">
              <label className="font-semibold text-xl sm:text-2xl">Name</label>
              <input
                type="text"
                className={`w-full m-2 border text-xl rounded-2xl p-2 bg-transparent ${
                  errors.Name ? "border-red-500" : "border-white"
                }`}
                placeholder="Your Name"
                {...register("Name", {
                  required: "Your name is important",
                  maxLength: { value: 15, message: "Max 15 characters" },
                })}
              />
              {errors.Name && (
                <p className="text-sm text-red-500 ml-2">{errors.Name.message}</p>
              )}
            </div>

            {/* Contact No */}
            <div className="w-full flex flex-col">
              <label className="font-semibold text-xl sm:text-2xl">Contact No:</label>
              <input
                type="tel"
                className="w-full m-2 border border-white text-xl rounded-2xl p-2 bg-transparent"
                placeholder="+91 9876543210"
                {...register("phone")}
              />
            </div>

            {/* Email */}
            <div className="w-full flex flex-col">
              <label className="font-semibold text-xl sm:text-2xl">Email</label>
              <input
                type="email"
                className={`w-full m-2 border text-xl rounded-2xl p-2 bg-transparent ${
                  errors.mail ? "border-red-500" : "border-white"
                }`}
                placeholder="you@gmail.com"
                {...register("mail", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.mail && (
                <p className="text-sm text-red-500 ml-2">{errors.mail.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="w-full flex flex-col">
              <label className="font-semibold text-xl sm:text-2xl">Message</label>
              <textarea
                className={`w-full m-2 border text-xl rounded-2xl p-2 bg-transparent ${
                  errors.messageInTheTextarea ? "border-red-500" : "border-white"
                }`}
                placeholder="your message..."
                rows="4"
                {...register("messageInTheTextarea", {
                  required: "Message is required",
                  minLength: { value: 5, message: "Minimum 5 characters" },
                  maxLength: { value: 100, message: "Max 100 characters" },
                })}
              />
              {errors.messageInTheTextarea && (
                <p className="text-sm text-red-500 ml-2">
                  {errors.messageInTheTextarea.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full hover:bg-white hover:text-black border duration-200 py-2 rounded-2xl my-2 transition-colors"
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