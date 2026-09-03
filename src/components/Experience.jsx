import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NavLink } from "react-router-dom";
import {
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Terminal,
  Building2,
} from "lucide-react";

const experiences = [
  {
    id: "whatbytes",
    role: "Full Stack Developer Intern",
    company: "WhatBytes",
    mode: "Remote",
    location: "Bangalore, Karnataka",
    period: "June 2026 – July 2026",
    category: "Full Stack",
    tagline: "E-Commerce Architecture, Scalable APIs & Authentication Protocols",
    highlights: [
      "Architected scalable, full-stack features for a production-level e-commerce platform, integrating secure RESTful APIs.",
      "Built accessible, performant UI components using Next.js and React.js, adhering to WCAG standards.",
      "Optimized backend services with Python and Django to enhance security and handle dynamic data requests efficiently.",
      "Implemented robust authentication protocols and role-based access control, ensuring secure data handling and protecting sensitive user information across all application layers.",
    ],
    techStack: [
      "Next.js",
      "React.js",
      "Python",
      "Django",
      "RESTful APIs",
      "RBAC",
      "WCAG Standards",
      "Authentication",
    ],
  },
  {
    id: "reef",
    role: "Full Stack Developer Intern",
    company: "Reef Technologies",
    mode: "On-site",
    location: "Dwarka, New Delhi",
    period: "April 2026 – June 2026",
    category: "Full Stack",
    tagline: "High-Availability Web Apps, Server-Side Logic & Stability",
    highlights: [
      "Designed and deployed highly scalable, secure web applications using React and Node.js with a focus on seamless end-to-end functionality.",
      "Engineered robust server-side logic and secure API endpoints to manage complex data flows and application state.",
      "Enhanced application accessibility through responsive, cross-browser compatible design, maintaining 99.9% uptime on production environments.",
      "Conducted regular security audits and performance monitoring to identify and resolve bottlenecks, ensuring high scalability and maintaining robust application stability.",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "REST APIs",
      "Server-Side Logic",
      "Security Audits",
      "Performance Monitoring",
      "Cross-Browser",
    ],
  },
  {
    id: "anantixia",
    role: "Frontend Developer Intern",
    company: "Anantixia LLP",
    mode: "Remote",
    location: "Gurgaon, Haryana",
    period: "April 2025 – April 2026",
    category: "Frontend",
    tagline: "Speed Optimization, UI Refactoring & Latency Reduction",
    highlights: [
      "Boosted responsiveness and cut page load times by 30–40% across 10+ pages using React and TypeScript.",
      "Resolved 50+ UI/UX bugs, improving visual consistency and slashing user-reported issues by 25%.",
      "Managed routing and state for 20+ routes, reducing navigation latency by 20%.",
      "Integrated 15+ REST APIs with robust error handling, cutting UI failures by 30%.",
      "Refactored 25+ components to increase reusability and reduce complexity by 35% using modular SCSS.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Modular SCSS",
      "State Management",
      "REST APIs",
      "Error Handling",
      "Routing (20+)",
      "Performance Tuning",
    ],
  },
];

const metrics = [
  {
    icon: Briefcase,
    value: "3",
    label: "Developer Internships",
    subtext: "WhatBytes, Reef Tech, Anantixia",
  },
  {
    icon: TrendingUp,
    value: "30–40%",
    label: "Load Time Reduction",
    subtext: "Optimized across 10+ core pages",
  },
  {
    icon: ShieldCheck,
    value: "99.9%",
    label: "Production Uptime",
    subtext: "High scalability & stability audits",
  },
  {
    icon: Zap,
    value: "50+",
    label: "UI/UX Bugs Resolved",
    subtext: "25% drop in user-reported issues",
  },
];

const Experience = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredExperiences =
    selectedCategory === "All"
      ? experiences
      : experiences.filter((exp) => exp.category === selectedCategory);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      initial={{ filter: "blur(20px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative w-full overflow-hidden"
    >
      {/* Subtle Monochrome Ambient Gradients */}
      <div className="absolute top-0 left-1/4 -z-10 w-[600px] h-[600px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 -z-10 w-[500px] h-[500px] bg-white/[0.015] blur-[130px] rounded-full pointer-events-none" />

      {/* Header Section */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col items-start text-left mb-12"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
        >
          <Sparkles className="text-white/80" size={13} />
          <span className="text-xs uppercase tracking-[0.25em] text-white/70 font-semibold font-mono">
            Track Record & Impact
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-8xl font-bold font-[solenoid] text-white uppercase font-extralight leading-tight"
        >
          Work <span className="-ml-4 text-white/40 font-[solenoid]">Experience</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-base text-left sm:text-lg md:text-xl text-white/60 font-light leading-relaxed mt-4 mb-8"
        >
          Building reliable, high-performance web products from scalable backend
          architectures to responsive, accessible, pixel-perfect user interfaces.
        </motion.p>

        {/* Impact Metric Cards Grid (Monochrome Glass) */}
        <motion.div
          variants={itemVariants}
          className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="relative group p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-white/25 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 text-left flex flex-col justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80 group-hover:text-white transition-colors">
                  <metric.icon size={18} />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-white/30">
                  0{idx + 1}
                </span>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-[solenoid]">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white/80 mt-1">
                  {metric.label}
                </div>
                <div className="text-[11px] text-white/40 mt-0.5 font-mono leading-tight">
                  {metric.subtext}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Filter Tabs (Sliding Pill with spring motion) */}
      <div className="flex items-center gap-2 mb-10">
        <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          {["All", "Full Stack", "Frontend"].map((tab) => {
            const isActive = selectedCategory === tab;
            return (
              <button
                key={tab}
                onClick={() => setSelectedCategory(tab)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-colors duration-200 cursor-pointer active:scale-[0.98] ${
                  isActive ? "text-black font-semibold" : "text-white/60 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                  />
                )}
                <span className="relative z-10">
                  {tab === "All" ? "All Roles" : tab}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Experience Timeline */}
      <div className="relative w-full">
        {/* Timeline Center/Left Line */}
        <div className="hidden md:block absolute left-4 top-8 bottom-12 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

        <div className="space-y-8 sm:space-y-10">
          <AnimatePresence mode="wait">
            {filteredExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative md:pl-12"
              >
                {/* Minimalist Timeline Node */}
                <div className="hidden md:flex absolute left-4 top-8 -translate-x-1/2 w-8 h-8 rounded-full bg-black border border-white/25 items-center justify-center z-10 group-hover:border-white transition-colors shadow-[0_0_12px_rgba(255,255,255,0.08)]">
                  <div className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
                </div>

                {/* Experience Card (Monochrome Glass & Precision Borders) */}
                <div className="group relative rounded-3xl border border-white/10 hover:border-white/25 bg-white/[0.02] hover:bg-white/[0.035] backdrop-blur-xl p-6 sm:p-8 lg:p-9 transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]">
                  {/* Top Row: Role, Company & Mode Badges */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase border border-white/15 bg-white/5 text-white/90">
                          {exp.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-white/5 border border-white/10 text-white/75">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          {exp.mode}
                        </span>
                        <span className="text-[11px] font-mono uppercase tracking-widest text-white/35">
                          Internship
                        </span>
                      </div>

                      <div className="pt-1">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-[solenoid] tracking-wide text-white">
                          {exp.role}
                        </h2>
                        <div className="flex items-center gap-2 mt-1 text-lg sm:text-xl font-medium text-white/90">
                          <Building2 size={16} className="text-white/50" />
                          <span className="text-white font-medium">{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Meta (Period & Location) */}
                    <div className="flex flex-col sm:flex-row lg:flex-col lg:items-end gap-2 text-sm text-white/60">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-xs sm:text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                        <Calendar size={14} className="text-white/60" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-white/50 px-1">
                        <MapPin size={13} className="text-white/40" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tagline / Sub-description */}
                  <div className="py-4 text-sm font-medium tracking-wide text-white/50 italic flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span>{exp.tagline}</span>
                  </div>

                  {/* Responsibilities & Achievements */}
                  <div className="space-y-3.5 my-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-3 group/item text-white/70 hover:text-white transition-colors text-sm sm:text-base leading-relaxed font-light"
                      >
                        <div className="mt-2 min-w-3 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover/item:bg-white group-hover/item:scale-125 transition-all duration-200" />
                        </div>
                        <div>{highlight}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills (Monochrome Style) */}
                  <div className="pt-6 mt-6 border-t border-white/10">
                    <div className="text-xs uppercase font-mono tracking-widest text-white/40 mb-3 flex items-center gap-2">
                      <Terminal size={13} className="text-white/40" />
                      <span>Core Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/10 hover:border-white/30 text-xs font-mono text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom CTA Banner (Monochrome Glass) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 max-w-4xl mx-auto rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl p-8 sm:p-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
      >
        <h3 className="text-2xl sm:text-3xl font-bold font-[solenoid] tracking-wide text-white mb-3">
          Interested in working together?
        </h3>
        <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto mb-8 font-light">
          Whether you need full-stack architecture, frontend precision, or backend reliability,
          I'm always open to discussing technical roles and impact-driven challenges.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <NavLink
            to="/contact"
            className="group px-7 py-3 rounded-full bg-white text-black font-bold text-sm flex items-center gap-2 hover:bg-white/90 active:scale-[0.98] transition-all shadow-lg hover:pr-8"
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </NavLink>

          <NavLink
            to="/project"
            className="px-7 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-sm active:scale-[0.98] transition-all"
          >
            Explore Projects
          </NavLink>

          <a
            href="https://linkedin.com/in/sachin-sharma-296082248"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-medium text-sm active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <span>LinkedIn Profile</span>
            <ArrowUpRight size={14} className="text-white/50" />
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;
