import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code2,
  Palette,
  Terminal,
} from "lucide-react";
import Line from "./Line";
import pf from "/pf.jpeg";

import ExperienceAndProject from "./ExperienceAndProject";

const Home = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const techStack = [
    { name: "React", icon: Code2 },
    { name: "Next.js", icon: Terminal },
    { name: "TypeScript", icon: Code2 },
    { name: "JavaScript", icon: Code2 },
    { name: "Tailwind", icon: Palette },
    { name: "GSAP", icon: Sparkles },
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="relative min-h-[90vh] flex flex-col justify-center px-6 sm:px-12 lg:px-24 overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-white/5 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] bg-white/5 blur-[100px] rounded-full"
        />
      </div>

      <div className="mt-10 max-w-7xl mx-auto w-full">
        {/* Availability Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white/60">
            Available for new projects
          </span>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 bg-white/10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 p-4">
            <motion.h1
              variants={itemVariants}
              className="text-4xl  sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-widest font-[solenoid] text-white/30 sm:text-white mb-8"
            >
              CRAFTING <br />
              <span className="text-white/40 italic font-light">
                DIGITAL
              </span>{" "}
              <br />
              EXPERIENCES
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-2xl sm:text-xl md:text-2xl text-white/50 font-light leading-relaxed mb-4"
            >
              I bridge the gap between{" "}
              <span className="text-white">imagination</span> and{" "}
              <span className="text-white">implementation</span>. Specializing
              in high-performance web solutions that move users and brands
              forward.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-16"
            >
              <NavLink
                to="/project"
                className="group relative px-2 py-1  bg-white text-black rounded-full font-bold transition-all hover:pr-12 flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowUpRight
                  className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all"
                  size={20}
                />
              </NavLink>

              <NavLink
                to="/contact"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-white transition-all backdrop-blur-sm"
              >
                Let's Talk
              </NavLink>
            </motion.div>

            {/* Tech Stack Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6"
            >
              <span className="text-xs uppercase tracking-widest text-white/30 font-semibold">
                Stack
              </span>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-colors group"
                  >
                    <tech.icon
                      size={16}
                      className="text-white/40 group-hover:text-white transition-colors"
                    />
                    <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="sm:hidden absolute top-0 right-5 -z-1 h-[200px] sm:h-[450px] bg-white overflow-hidden">
              <img
                src="/pf.jpeg"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>
          {/* Side Info / Visual Anchor */}
          <div className="hidden w-[350px] -mt-24 lg:block border-l border-white/10 pl-10">
            <div className="h-auto w-full -z-10 bg-white overflow-hidden">
              <img
                src="/pf.jpeg"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <motion.div variants={itemVariants} className="w-full space-y-2">
              <div className="border-l pl-4 border-white/10">
                <p className="text-white/60 italic text-lg leading-relaxed">
                  "Design that moves. Code that breathes. Precision in every
                  pixel, performance in every line."
                </p>
              </div>

              <div>
                <h3 className="text-white/30 text-sm font-bold uppercase tracking-widest mb-4">
                  Socials
                </h3>
                <div className="flex gap-6">
                  {[
                    { icon: Github, href: "https://github.com/sachin-3110" },
                    {
                      icon: Linkedin,
                      href: "https://linkedin.com/in/sachin-sharma-296082248",
                    },
                    { icon: Mail, href: "mailto:sachinsharma8005@gmail.com" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Who Am I Section (Integrated/Below) */}
      <motion.div
        variants={itemVariants}
        className="mt-32 border-t border-white/10 pt-20 pb-20"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-white/30">
              Who Am I?
            </h2>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold font-[solenoid] tracking-wider leading-tight">
              A <span className="text-white/40">Full-Stack</span> Developer{" "}
              <br />
              with a soul for{" "}
              <span className="text-white/40 italic">Design & Development</span>
              .
            </p>
          </div>
          <div className="space-y-8">
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Based in India, I specialize in building scalable web applications
              that don't just work—they inspire. With a deep understanding of
              both frontend aesthetics and backend architecture, I create
              seamless digital journeys.
            </p>
            <NavLink
              to="/about"
              className="inline-flex items-center gap-3 text-white font-bold group border-b border-white/20 pb-2 hover:border-white transition-all"
            >
              <span>Discover the full story</span>
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </NavLink>
          </div>
        </div>
      </motion.div>

      {/* Experience & Projects Glance */}
      <motion.div
        variants={itemVariants}
        className="mt-8 border-t border-white/10 pt-8 w-full"
      >
        <ExperienceAndProject />
      </motion.div>
    </motion.section>
  );
};

export default Home;
