import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";
import { User, Mail, Phone, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

// Compound-like Field Component for consistent styling
const FormField = ({ label, icon: Icon, error, children }) => (
  <div className="flex flex-col gap-2 mb-6 group">
    <div className="flex items-center gap-2 px-1">
      {Icon && <Icon size={18} className="text-white/60 group-focus-within:text-white transition-colors" />}
      <label className="text-sm font-medium tracking-wide text-white/80 group-focus-within:text-white uppercase transition-colors">
        {label}
      </label>
    </div>
    <div className="relative">
      {children}
    </div>
    <AnimatePresence>
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex items-center gap-1 mt-1 text-red-400 text-xs px-1"
        >
          <AlertCircle size={12} />
          <span>{error.message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Form = () => {
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = async (data) => {
    setStatus("loading");

    const formData = new FormData();
    formData.append("access_key", "83369596-a731-46c4-af11-4cf28b11658d");
    
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
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(resData.message || "Something went wrong.");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("An error occurred. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClasses = (hasError) => `
    w-full bg-white/5 border backdrop-blur-sm rounded-xl px-4 py-3 text-white placeholder:text-white/20
    outline-none transition-all duration-300
    ${hasError ? 'border-red-500/50 focus:border-red-500 ring-1 ring-red-500/20' : 'border-white/10 focus:border-white/40 focus:bg-white/10 focus:ring-2 focus:ring-white/5'}
  `;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full md:w-1/2"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <div className="relative overflow-hidden border border-white/10 rounded-3xl p-8 sm:p-12 text-white bg-zinc-950/40 backdrop-blur-xl shadow-2xl">
          
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/5 blur-3xl rounded-full" />

          <div className="relative z-10">
            <header className="mb-10 text-center sm:text-left">
              <motion.h1 
                className="text-4xl sm:text-5xl font-bold tracking-tight mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Let's <span className="text-white/60">Connect</span>
              </motion.h1>
              <p className="text-white/40 text-lg">Have a vision? Let's bring it to life.</p>
            </header>

            <div className="space-y-2">
              <FormField label="Full Name" icon={User} error={errors.Name}>
                <input
                  type="text"
                  autoComplete="name"
                  className={inputClasses(errors.Name)}
                  placeholder="John Doe"
                  {...register("Name", {
                    required: "What should I call you?",
                    maxLength: { value: 30, message: "Name is too long" },
                  })}
                />
              </FormField>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                <FormField label="Email Address" icon={Mail} error={errors.mail}>
                  <input
                    type="email"
                    autoComplete="email"
                    className={inputClasses(errors.mail)}
                    placeholder="john@example.com"
                    {...register("mail", {
                      required: "I'll need your email to reply",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                </FormField>

                <FormField label="Contact Number" icon={Phone} error={errors.phone}>
                  <input
                    type="tel"
                    autoComplete="tel"
                    className={inputClasses(errors.phone)}
                    placeholder="+1 (555) 000-0000"
                    {...register("phone")}
                  />
                </FormField>
              </div>

              <FormField label="Your Message" icon={MessageSquare} error={errors.messageInTheTextarea}>
                <textarea
                  className={`${inputClasses(errors.messageInTheTextarea)} resize-none`}
                  placeholder="Tell me about your project..."
                  rows="5"
                  {...register("messageInTheTextarea", {
                    required: "Please leave a message",
                    minLength: { value: 10, message: "Message is a bit short" },
                  })}
                />
              </FormField>
            </div>

            <motion.button
              type="submit"
              disabled={status === "loading" || status === "success"}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={`
                w-full mt-6 relative overflow-hidden py-4 rounded-xl font-bold tracking-widest uppercase text-sm
                transition-all duration-500 flex items-center justify-center gap-3
                ${status === "success" 
                  ? "bg-green-500 text-white" 
                  : status === "error"
                  ? "bg-red-500 text-white"
                  : "bg-white text-black hover:bg-white/90 shadow-lg shadow-white/5"}
                disabled:cursor-not-allowed
              `}
            >
              <AnimatePresence mode="wait">
                {status === "loading" ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Loader2 className="animate-spin" size={20} />
                    <span>Processing...</span>
                  </motion.div>
                ) : status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 size={20} />
                    <span>Message Sent</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <Send size={18} />
                    <span>Send Message</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <AnimatePresence>
              {status === "error" && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-center text-red-400 text-sm mt-4 font-medium"
                >
                  {errorMessage}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default Form;
