import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Github, Globe, Sparkles, ExternalLink } from "lucide-react";

import ObysAgency from "../assets/ObysAgency.jpg";
import MarriageWebsite from "../assets/MarriageWebsite.jpg";
import Refokus from "../assets/Refokus.jpg";
import SunShare from "../assets/SunShare.jpg";
import MontBold from "../assets/montBoldss.png";
import DKSDesign from "../assets/dksDesign.png";
import Bishambu from "../assets/bishambu.png";
import VedicNature from "../assets/vedicnature.png";
import NovoCurve from "../assets/novocurve.png";
import AartiGems from "../assets/aartigemsmine.png";

const projectsData = [
  {
    id: "montbold",
    projectName: "MontBold",
    projectSS: MontBold,
    gitLink: null,
    hostedLink: "https://montbold-dev.vercel.app/",
    category: "Full-Stack",
    tags: ["Next.js", "Full-Stack", "eCommerce", "Tailwind CSS"],
    projectDescp:
      "Montbold is a full-stack eCommerce platform engineered to deliver scalable, seamless shopping experiences with clean architecture and modern UI principles.",
  },
  {
    id: "obysagency",
    projectName: "Obys Agency",
    projectSS: ObysAgency,
    gitLink: "https://github.com/sachin-3110/ObysAgency",
    hostedLink: "https://sachin-3110.github.io/ObysAgency/obsysagency.html",
    category: "Creative",
    tags: ["HTML5", "CSS3", "GSAP", "Locomotive Scroll"],
    projectDescp:
      "An animation-rich agency website featuring fluid scroll physics, sleek typographic transitions, and dynamic viewport layouts powered by GSAP.",
  },
  {
    id: "marriage-website",
    projectName: "A Marriage Website",
    projectSS: MarriageWebsite,
    gitLink: "https://github.com/sachin-3110/A-marriage-Website",
    hostedLink: "https://sachin-3110.github.io/A-marriage-Website/",
    category: "Creative",
    tags: ["Tailwind CSS", "GSAP", "Interactive Design"],
    projectDescp:
      "Interactive digital wedding invitation portal with bespoke scroll narratives, clean visual hierarchy, and responsive mobile-first elegance.",
  },
  {
    id: "refokus",
    projectName: "Refokus Clone",
    projectSS: Refokus,
    gitLink: "https://github.com/sachin-3110/Refokus",
    hostedLink: "https://refokus-seven.vercel.app/",
    category: "Creative",
    tags: ["React", "Tailwind CSS", "GSAP", "Micro-interactions"],
    projectDescp:
      "High-fidelity agency recreation implementing complex staggered motion sequences, smooth kinetic navigation, and bold contemporary aesthetics.",
  },
  {
    id: "sunshare",
    projectName: "SunShare",
    projectSS: SunShare,
    gitLink: "https://github.com/sachin-3110/ogSunshare",
    hostedLink: "https://og-sun-share.vercel.app/",
    category: "Corporate",
    tags: ["CleanTech", "Timeline Flow", "Tailwind CSS", "GSAP"],
    projectDescp:
      "Sleek solar-energy informational experience with sequential timeline animations and responsive data presentations communicating green solutions.",
  },
  {
    id: "dksdesign",
    projectName: "DKS Design",
    projectSS: DKSDesign,
    gitLink: null,
    hostedLink: "https://dk-sdesign.vercel.app/index.html",
    category: "Corporate",
    tags: ["BIM Engineering", "Lead Generation", "UI/UX Architecture"],
    projectDescp:
      "Professionally crafted landing platform for a BIM engineering firm, presenting complex technical solutions in a structured, high-credibility format.",
  },
  {
    id: "bishambu",
    projectName: "Bishambu",
    projectSS: Bishambu,
    gitLink: null,
    hostedLink: "https://bishambu.com/",
    category: "Corporate",
    tags: ["Booking System", "Event Tech", "Structured Catalog"],
    projectDescp:
      "Comprehensive reservation and lead generation website for a tent and catering service, offering intuitive booking flows and structured service catalogs.",
  },
  {
    id: "vedicnature",
    projectName: "VedicNature",
    projectSS: VedicNature,
    gitLink: null,
    hostedLink: "https://vedic-nature.vercel.app/product/101",
    category: "Full-Stack",
    tags: ["Luxury Brand", "eCommerce", "Smooth Scroll"],
    projectDescp:
      "Premium perfume eCommerce storefront featuring smooth scrolling animations and interactive hover effects for an immersive luxury shopping journey.",
  },
  {
    id: "novocurve",
    projectName: "Novo Cure Tensile",
    projectSS: NovoCurve,
    gitLink: null,
    hostedLink: "https://novo-cure.vercel.app/",
    category: "Corporate",
    tags: ["Tensile Architecture", "Corporate Branding", "Modern Grid"],
    projectDescp:
      "Corporate web presence for Novo Cure Tensile, highlighting custom architectural canopy engineering solutions with high visual impact.",
  },
  {
    id: "aartigems",
    projectName: "Aarti Gems Mine",
    projectSS: AartiGems,
    gitLink: null,
    hostedLink: "https://agm-olive.vercel.app/",
    category: "Full-Stack",
    tags: ["Fine Jewelry", "High-End Catalog", "Minimal Design"],
    projectDescp:
      "Sleek and modern digital showcase for Aarti Gems Mine, accentuating rare gemstones and jewelry collections with clean editorial minimalism.",
  },
];

const categories = ["All", "Full-Stack", "Creative", "Corporate"];

const ProjectGrids = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Category Filter Tabs (Pinterest board style) */}
      <div className="flex justify-center items-center mb-10">
        <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-colors duration-200 cursor-pointer active:scale-[0.98] ${
                  isActive ? "text-black font-semibold" : "text-white/60 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectCategory"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Pinterest-Style Masonry Waterfall Grid */}
      <motion.div
        layout
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="break-inside-avoid mb-6 group relative rounded-3xl border border-white/10 hover:border-white/25 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl transition-all duration-300 overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.8)] flex flex-col"
            >
              {/* Image Container with Ambient Overlay */}
              <div className="relative overflow-hidden rounded-t-3xl bg-zinc-950/60">
                <img
                  src={project.projectSS}
                  alt={project.projectName}
                  loading="lazy"
                  className="w-full h-auto object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />

                {/* Subtle Gradient Shadow on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Floating Meta Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white/90">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-wider text-white/75">
                    {project.category}
                  </span>
                </div>

                {/* Pinterest Hover Quick-Action Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <a
                    href={project.hostedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wide hover:bg-white/90 active:scale-[0.98] transition-all shadow-xl"
                  >
                    <span>View Project</span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              {/* Text & Content Section */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-[solenoid] text-white tracking-wide mb-2">
                    {project.projectName}
                  </h3>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Description */}
                  <p className="text-xs sm:text-sm text-white/65 font-light leading-relaxed mb-4">
                    {project.projectDescp}
                  </p>
                </div>

                {/* Tactile Actions / Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-2.5">
                  <a
                    href={project.hostedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-white/90 active:scale-[0.98] transition-all shadow-md group/btn"
                  >
                    <span>Live Site</span>
                    <ArrowUpRight
                      size={15}
                      className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                    />
                  </a>

                  {project.gitLink ? (
                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs sm:text-sm active:scale-[0.98] transition-all"
                      title="View GitHub Repository"
                    >
                      <Github size={15} className="text-white/80" />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-[11px] font-mono text-white/35 bg-white/[0.02] border border-white/5"
                      title="Client Deployment"
                    >
                      <Globe size={13} className="opacity-40" />
                      <span className="hidden sm:inline">Client</span>
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ProjectGrids;
