import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion, AnimatePresence } from "framer-motion";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Computer Vision",
    "Edge & Hardware",
    "ML & Vision",
    "Backend",
    "Languages & Tools",
  ];

  const filterTech = (tech, category) => {
    if (category === "All") return true;
    if (tech.categories && tech.categories.includes(category)) return true;

    const cat = (tech.category || "").toLowerCase();
    switch (category) {
      case "Computer Vision":
        return cat.includes("computer vision") || cat.includes("vision");
      case "Edge & Hardware":
        return (
          cat.includes("edge") ||
          cat.includes("hardware") ||
          cat.includes("optimization") ||
          cat.includes("deployment")
        );
      case "ML & Vision":
        return cat.includes("ml") || cat.includes("vision");
      case "Backend":
        return (
          cat.includes("backend") ||
          cat.includes("database") ||
          cat.includes("systems")
        );
      case "Languages & Tools":
        return (
          cat.includes("language") ||
          cat.includes("tool") ||
          cat.includes("os") ||
          cat.includes("frontend")
        );
      default:
        return false;
    }
  };

  const filteredTech = technologies.filter((tech) =>
    filterTech(tech, selectedCategory)
  );

  return (
    <div>
      <motion.div variants={textVariant()} className="text-center mb-8 sm:mb-12">
        <p className={styles.sectionSubText}>My technical stack</p>
        <h2 className={styles.sectionHeadText}>Skills & Technologies.</h2>
      </motion.div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 max-w-4xl mx-auto px-2">
        {categories.map((cat) => {
          const count =
            cat === "All"
              ? technologies.length
              : technologies.filter((t) => filterTech(t, cat)).length;

          const isSelected = selectedCategory === cat;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 select-none ${
                isSelected
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30 font-semibold scale-105"
                  : "bg-tertiary text-secondary hover:text-white hover:bg-white/5 border border-white/5"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected
                    ? "bg-white/20 text-white font-bold"
                    : "bg-white/5 text-secondary"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Responsive Tech Cards Grid */}
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 max-w-6xl mx-auto min-h-[280px]">
        <AnimatePresence mode="popLayout">
          {filteredTech.map((technology, index) => (
            <motion.div
              key={technology.name}
              layout
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -15 }}
              transition={{
                duration: 0.25,
                delay: Math.min(index * 0.02, 0.15),
                ease: "easeOut",
              }}
              className="w-full"
            >
              <Tilt
                options={{
                  max: 20,
                  scale: 1.05,
                  speed: 400,
                }}
                className="w-full h-full"
              >
                <div className="bg-tertiary rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center border border-white/5 hover:border-[#915EFF]/50 shadow-card hover:shadow-[#915EFF]/15 transition-all duration-300 group h-full min-h-[120px] sm:min-h-[140px]">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/5 flex items-center justify-center p-2.5 mb-3 group-hover:scale-110 transition-transform duration-300 shadow-inner border border-white/5">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="w-full h-full object-contain filter drop-shadow"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-white text-xs sm:text-[13px] font-semibold text-center group-hover:text-[#00E5FF] transition-colors leading-tight">
                    {technology.name}
                  </span>
                  <span className="text-secondary/70 text-[10px] mt-1 text-center font-light line-clamp-1">
                    {technology.category}
                  </span>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
