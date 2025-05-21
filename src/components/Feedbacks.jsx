import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-8 rounded-2xl w-full xs:w-[320px] shadow-lg"
  >
    <p className="text-white text-4xl font-black">"</p>

    <div className="mt-2">
      <p className="text-white text-base tracking-wide">{testimonial}</p>

      <div className="mt-6 flex items-center gap-4">
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <p className="text-white   text-sm font-medium">
            <span className="text-blue-500">@</span> {name}
          </p>
          <p className="text-secondary text-xs">
            {designation} at {company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => (
  <div className="mt-12 bg-black-100 rounded-2xl">
    <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What others say</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
      </motion.div>
    </div>

    <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-6`}>
      {testimonials.map((testimonial, index) => (
        <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
      ))}
    </div>
  </div>
);

export default SectionWrapper(Feedbacks, "");
