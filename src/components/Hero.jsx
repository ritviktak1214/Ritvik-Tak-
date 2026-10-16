import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { personalInfo } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden flex flex-col justify-between pt-28 sm:pt-32 lg:pt-28 pb-6">
      {/* Hero Content */}
      <div
        className={`relative z-10 max-w-7xl mx-auto ${styles.paddingX} w-full flex flex-row items-start gap-3 sm:gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-1.5 sm:mt-2">
          <div className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-[#915eff] shadow-lg shadow-[#915eff]/50" />
          <div className="w-1 sm:h-64 h-28 violet-gradient" />
        </div>

        <div className="max-w-3xl">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Ritvik Tak</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            AI Engineer specializing in <span className="text-[#00E5FF] font-semibold">Computer Vision</span> &{" "}
            <span className="text-[#915EFF] font-semibold">Edge AI</span> deployment on NVIDIA Jetson.
          </p>
          <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-secondary">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs">
              📍 {personalInfo.location}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs">
              ⚡ YOLO • ByteTrack • TensorRT
            </span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0077B5]/20 hover:bg-[#0077B5]/40 text-[#38BDF8] border border-[#0077B5]/40 transition-colors text-[11px] sm:text-xs"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      {/* 3D Model Canvas Container */}
      <div className="w-full flex-1 flex items-center justify-center my-2 sm:my-3">
        <ComputersCanvas />
      </div>

      {/* Scroll indicator */}
      <div className="relative w-full flex justify-center items-center z-20">
        <a href="#about" aria-label="Scroll to About section">
          <div className="w-[26px] h-[46px] sm:w-[30px] sm:h-[54px] rounded-3xl border-2 border-secondary/40 flex justify-center items-start p-1.5 hover:border-[#915EFF] transition-colors">
            <motion.div
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#915EFF] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
