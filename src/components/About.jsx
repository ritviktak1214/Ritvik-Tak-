import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full xs:w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 p-[1px] rounded-2xl shadow-lg"
    >
      <div
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-gray-900 rounded-2xl py-8 px-6 min-h-[280px] flex flex-col justify-center items-center"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-lg font-bold text-center mt-4">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-sm text-white uppercase tracking-wider">Introduction</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[17px] leading-[30px] text-white max-w-3xl"
      >
        I'm a skilled software developer with experience in Core Java and JavaScript,
        working with databases like MySQL and MS Excel. I have expertise in frameworks like React,
        Node.js, and Three.js. I'm a fast learner and collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions. Let’s bring your ideas to life!
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
