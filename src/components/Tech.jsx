import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-10">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center"
        >
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
