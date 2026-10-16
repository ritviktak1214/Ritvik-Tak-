import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
      borderRadius: "16px",
      padding: "1.5rem",
    }}
    contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
    date={experience.date}
    dateClassName="text-secondary text-sm font-medium px-2"
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full p-2">
        <img
          loading="lazy"
          src={experience.icon}
          alt={experience.company_name}
          className="w-full h-full object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[18px] sm:text-[20px] font-bold leading-snug">{experience.title}</h3>
      <div className="flex flex-wrap items-center justify-between gap-1.5 mt-1.5">
        <p className="text-[#00E5FF] text-[14px] sm:text-[15px] font-semibold m-0">
          {experience.company_name}
        </p>
        {experience.location && (
          <span className="text-xs text-secondary font-light">📍 {experience.location}</span>
        )}
      </div>
    </div>

    <ul className="mt-4 list-disc ml-4 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[12px] sm:text-[13.5px] tracking-wide leading-relaxed"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        What I have done so far
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Work Experience.
      </h2>
    </motion.div>

    <div className="mt-10 sm:mt-16 flex flex-col">
      <VerticalTimeline animate={false}>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
          />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Experience, "experience");
