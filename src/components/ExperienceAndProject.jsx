import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Briefcase,
  Calendar,
  MapPin,
  Building2,
  Sparkles,
  Layers,
  Terminal,
} from "lucide-react";
import Line from "./Line";

import MontBold from "../assets/montBoldss.png";
import ObysAgency from "../assets/ObysAgency.jpg";
import Refokus from "../assets/Refokus.jpg";
import VedicNature from "../assets/vedicnature.png";

const experienceHighlights = [
  {
    role: "Full Stack Developer Intern",
    company: "WhatBytes",
    period: "June 2026 – July 2026",
    mode: "Remote",
    location: "Bangalore, KA",
    summary:
      "Architected scalable features for a production e-commerce platform with Next.js, WCAG UI, and secure Django/Python RESTful APIs with RBAC authentication protocols.",
    tech: ["Next.js", "React.js", "Python", "Django", "RBAC"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Reef Technologies",
    period: "April 2026 – June 2026",
    mode: "On-site",
    location: "New Delhi, DL",
    summary:
      "Engineered high-availability web applications and backend logic using React and Node.js, maintaining 99.9% uptime with regular security and stability audits.",
    tech: ["React", "Node.js", "Express", "REST APIs", "99.9% Uptime"],
  },
  {
    role: "Frontend Developer Intern",
    company: "Anantixia LLP",
    period: "April 2025 – April 2026",
    mode: "Remote",
    location: "Gurgaon, HR",
    summary:
      "Boosted responsiveness and cut load times by 30–40% across 10+ pages, resolved 50+ UI bugs, and managed state for 20+ routes with modular SCSS.",
    tech: ["React", "TypeScript", "SCSS", "20+ Routes", "+30-40% Speed"],
  },
];

const featuredProjects = [
  {
    title: "MontBold",
    subtitle: "Full-Stack eCommerce",
    image: MontBold,
    link: "https://montbold-dev.vercel.app/",
    tags: ["Next.js", "Full-Stack", "Tailwind CSS"],
    desc: "Scalable eCommerce platform engineered with modular component architecture and seamless checkout flows.",
  },
  {
    title: "Refokus Clone",
    subtitle: "Creative Agency Experience",
    image: Refokus,
    link: "https://refokus-seven.vercel.app/",
    tags: ["React", "GSAP", "Micro-interactions"],
    desc: "High-fidelity agency recreation implementing complex motion physics, smooth navigation, and contemporary aesthetics.",
  },
  {
    title: "Obys Agency",
    subtitle: "Kinetic Motion Showcase",
    image: ObysAgency,
    link: "https://sachin-3110.github.io/ObysAgency/obsysagency.html",
    tags: ["GSAP", "Locomotive Scroll", "Animation"],
    desc: "Animation-rich agency website featuring fluid scroll physics and sleek typography transitions.",
  },
  {
    title: "VedicNature",
    subtitle: "Luxury Fragrance eCommerce",
    image: VedicNature,
    link: "https://vedic-nature.vercel.app/product/101",
    tags: ["React", "Luxury UI", "Smooth Scroll"],
    desc: "Immersive fragrance brand storefront featuring smooth scrolling animations and interactive product exploration.",
  },
];

const ExperienceAndProject = () => {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] mb-4">
          <Sparkles className="text-white/80" size={13} />
          <span className="text-xs uppercase tracking-[0.25em] text-white/70 font-mono font-semibold">
            Snapshot
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-[solenoid] text-white uppercase font-extralight tracking-wider leading-tight">
          Work <span className="-ml-3 sm:-ml-4 text-white/40 font-[solenoid]">Experience</span>{" "}
          <span className="text-white/20">&</span> Projects
        </h2>

        <p className="max-w-2xl text-base sm:text-lg text-white/60 font-light leading-relaxed mt-4">
          A quick glance into professional engineering internships and selected digital products.
          Dive into the dedicated sections for complete case studies and background story.
        </p>
      </div>

      {/* Part 1: Experience Snapshot */}
      <div className="mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-white/40">
              Part 01
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-[solenoid] text-white tracking-wide mt-1">
              Work Experience Glance
            </h3>
          </div>

          <NavLink
            to="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-white/90 active:scale-[0.98] transition-all duration-300 shadow-md group"
          >
            <span>Full Story in About</span>
            <ArrowUpRight
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </NavLink>
        </div>

        {/* Experience Cards Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experienceHighlights.map((exp, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl border border-white/10 hover:border-white/25 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl p-6 transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] flex flex-col justify-between"
            >
              <div>
                {/* Meta Bar */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10 mb-4 text-xs font-mono text-white/60">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    {exp.mode}
                  </span>
                  <span className="text-white/40">{exp.period}</span>
                </div>

                {/* Company & Role */}
                <h4 className="text-xl font-bold font-[solenoid] text-white tracking-wide mb-1">
                  {exp.company}
                </h4>
                <div className="text-sm font-medium text-white/80 mb-3">
                  {exp.role}
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed mb-6">
                  {exp.summary}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                {exp.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] sm:text-[11px] font-mono text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Line margin="4" />

      {/* Part 2: Selected Projects Snapshot */}
      <div className="mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-white/40">
              Part 02
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-[solenoid] text-white tracking-wide mt-1">
              Selected Creations Glance
            </h3>
          </div>

          <NavLink
            to="/project"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-white/90 active:scale-[0.98] transition-all duration-300 shadow-md group"
          >
            <span>View All Projects</span>
            <ArrowUpRight
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </NavLink>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl border border-white/10 hover:border-white/25 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl overflow-hidden transition-all duration-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden bg-zinc-950/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Link Pill */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2.5 right-2.5 p-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-200"
                    title="Open Live Preview"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                {/* Text Content */}
                <div className="p-5">
                  <h4 className="text-xl font-bold font-[solenoid] text-white tracking-wide mb-1">
                    {project.title}
                  </h4>
                  <div className="text-xs font-mono uppercase tracking-wider text-white/50 mb-2.5">
                    {project.subtitle}
                  </div>
                  <p className="text-xs text-white/60 font-light leading-relaxed mb-4 line-clamp-2">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* Tags & Action */}
              <div className="px-5 pb-5 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-white/70 hover:text-white flex items-center gap-1 transition-colors duration-200"
                >
                  <span>Live</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndProject;
