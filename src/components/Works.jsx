import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  highlights,
  image,
  source_code_link,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="h-full flex"
  >
    <Tilt
      options={{
        max: 15,
        scale: 1.02,
        speed: 400,
      }}
      className="bg-tertiary p-4 sm:p-5 rounded-2xl w-full border border-white/5 hover:border-[#915EFF]/40 transition-all flex flex-col justify-between h-full shadow-card group"
    >
      <div>
        <div className="relative w-full h-[180px] xs:h-[200px] sm:h-[220px] overflow-hidden rounded-xl">
          <img
            loading="lazy"
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
          <div className="absolute top-3 right-3 flex justify-end">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-9 h-9 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform shadow-lg border border-white/10"
              title="View Source Code"
            >
              <img
                loading="lazy"
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-5">
          <h3 className="text-white text-[18px] sm:text-[20px] font-bold leading-tight group-hover:text-[#00E5FF] transition-colors">{name}</h3>
          <p className="mt-2 text-secondary text-[13px] sm:text-[14px] leading-relaxed">{description}</p>
        </div>

        {highlights && highlights.length > 0 && (
          <div className="mt-3.5 space-y-1.5 pt-3 border-t border-white/5">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-white-100">
                <span className="text-[#00E5FF] mt-0.5 leading-none">•</span>
                <span className="leading-snug">{h}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-5 pt-3.5 border-t border-white/5 flex flex-wrap gap-1.5 sm:gap-2">
        {tags.map((tag) => (
          <span
            key={`${name}-${tag.name}`}
            className={`text-[11px] sm:text-[12px] font-medium px-2 py-0.5 rounded-md bg-white/5 border border-white/5 ${tag.color}`}
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] max-w-3xl leading-relaxed sm:leading-[30px]"
      >
        These featured projects demonstrate my capabilities in designing and deploying end-to-end Computer Vision pipelines, Edge AI systems on NVIDIA Jetson hardware, and production-grade REST APIs.
      </motion.p>

      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
