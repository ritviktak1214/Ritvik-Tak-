import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { education, certifications } from "../constants";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Academic background & qualifications</p>
        <h2 className={styles.sectionHeadText}>Education & Certifications.</h2>
      </motion.div>

      <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Education Column */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className="bg-tertiary p-5 sm:p-7 rounded-2xl border border-white/5 flex flex-col justify-between shadow-card"
        >
          <div>
            <h3 className="text-white text-lg sm:text-xl font-bold mb-5 sm:mb-6 flex items-center gap-2">
              <span>🎓</span> <span>Education & Training</span>
            </h3>
            <div className="space-y-4 sm:space-y-5">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded-xl bg-primary/70 border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 sm:gap-3">
                    <h4 className="text-white font-semibold text-sm sm:text-base leading-snug">{item.degree}</h4>
                    <span className="text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full bg-[#915EFF]/20 text-[#00E5FF] font-medium w-fit shrink-0">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-secondary text-xs sm:text-sm font-medium mt-1">
                    {item.institution} • <span className="text-secondary/70">{item.location}</span>
                  </p>
                  <p className="text-white-100 text-xs sm:text-[13px] mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications & Languages Column */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 0.75)}
          className="bg-tertiary p-5 sm:p-7 rounded-2xl border border-white/5 flex flex-col justify-between shadow-card"
        >
          <div>
            <h3 className="text-white text-lg sm:text-xl font-bold mb-5 sm:mb-6 flex items-center gap-2">
              <span>📜</span> <span>Certifications & Languages</span>
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-3.5 sm:p-4 rounded-xl bg-primary/70 border border-white/5 flex items-center justify-between gap-3"
                >
                  <div>
                    <h4 className="text-white font-semibold text-xs sm:text-sm leading-snug">{cert.title}</h4>
                    <p className="text-secondary text-[11px] sm:text-xs mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="text-[11px] sm:text-xs text-[#00E5FF] font-semibold bg-white/5 px-2.5 py-1 rounded-md shrink-0">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 pt-5 border-t border-white/5">
              <h4 className="text-white text-xs sm:text-sm font-semibold mb-3">🗣️ Languages</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="px-3 py-1.5 rounded-lg bg-primary/80 border border-white/5 text-xs text-white">
                  <strong>Hindi:</strong> Native
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-primary/80 border border-white/5 text-xs text-white">
                  <strong>English:</strong> Professional Working Proficiency
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
