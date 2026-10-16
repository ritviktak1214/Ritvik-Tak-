import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, personalInfo } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, description, icon }) => (
  <Tilt className="w-full sm:w-[260px] lg:w-[270px] flex-1 min-w-[240px] max-w-[340px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.2, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[22px] shadow-card h-full"
    >
      <div
        options={{ max: 25, scale: 1.02, speed: 400 }}
        className="bg-tertiary rounded-[22px] py-6 px-5 min-h-[260px] sm:min-h-[290px] flex flex-col justify-between items-center text-center h-full"
      >
        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center p-3 border border-white/5 shadow-inner">
          <img loading="lazy" src={icon} alt={title} className="w-10 h-10 object-contain" />
        </div>
        <div className="mt-4">
          <h3 className="text-white text-[17px] sm:text-[18px] font-bold text-center leading-snug">{title}</h3>
          {description && (
            <p className="text-secondary text-xs sm:text-[13px] mt-2 leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed sm:leading-[30px] max-w-3xl"
      >
        {personalInfo.summary}
      </motion.p>

      <div className="mt-12 flex flex-wrap gap-6 sm:gap-8 justify-center sm:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
