import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { personalInfo } from "../constants";

const Resume = () => {
  const resumeUrl = "/Ritvik_Tak.pdf";

  const handleOpenAndDownload = () => {
    // 1. Open resume in a new tab
    window.open(resumeUrl, "_blank", "noopener,noreferrer");

    // 2. Trigger automatic download at the same time
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Ritvik_Tak.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenOnly = (e) => {
    e.stopPropagation();
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  const handleDownloadOnly = (e) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Ritvik_Tak.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Curriculum Vitae</p>
        <h2 className={styles.sectionHeadText}>Resume.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] max-w-3xl leading-relaxed sm:leading-[30px]"
      >
        Download or view my complete curriculum vitae detailing my professional experience as an AI Engineer at Mialo Technology, software engineering fellowship at Scaler, technical projects, and academic background.
      </motion.p>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 1)}
        className="mt-8 sm:mt-12 bg-tertiary p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-white/5 shadow-card max-w-4xl mx-auto relative overflow-hidden"
      >
        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#915EFF]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* PDF Preview Icon & Metadata */}
          <div className="flex items-start sm:items-center gap-4 sm:gap-6 w-full md:w-auto">
            <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-xl bg-gradient-to-br from-red-500/20 to-purple-600/20 border border-red-500/30 flex flex-col items-center justify-center p-2 shrink-0 shadow-lg group">
              <span className="text-2xl sm:text-3xl">📄</span>
              <span className="text-[10px] sm:text-xs font-bold text-red-400 mt-1 uppercase tracking-wider">
                PDF
              </span>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-white text-lg sm:text-xl font-bold">
                  {personalInfo.name} — Resume
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-green-500/20 text-green-400 border border-green-500/30">
                  Updated
                </span>
              </div>
              <p className="text-[#00E5FF] text-xs sm:text-sm font-medium mt-1">
                AI Engineer | Computer Vision & Edge AI
              </p>
              <p className="text-secondary text-xs sm:text-[13px] mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
                <span>📍 {personalInfo.location}</span>
                <span>•</span>
                <span>NVIDIA Jetson • YOLO • TensorRT</span>
                <span>•</span>
                <span>Format: PDF (36 KB)</span>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row w-full md:w-auto items-stretch sm:items-center gap-3 shrink-0">
            {/* Primary: Open & Download Combined */}
            <button
              type="button"
              onClick={handleOpenAndDownload}
              className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-purple-600/30 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center gap-2 text-sm sm:text-base group"
            >
              <span>View & Download</span>
              <span className="group-hover:translate-x-0.5 transition-transform">🚀</span>
            </button>

            {/* Secondary Option Buttons */}
            <div className="flex items-center gap-2 justify-center">
              <button
                type="button"
                onClick={handleOpenOnly}
                title="Open in new tab"
                className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-medium border border-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>New Tab</span>
                <span>↗</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadOnly}
                title="Download PDF"
                className="flex-1 sm:flex-none px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-medium border border-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Download</span>
                <span>📥</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Highlights Snippet */}
        <div className="mt-6 pt-5 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-secondary">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-black-100/40">
            <span className="text-[#915EFF]">✓</span>
            <span className="text-white-100">B.Sc. IT (MDS University)</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-black-100/40">
            <span className="text-[#00E5FF]">✓</span>
            <span className="text-white-100">AI Engineer @ Mialo Tech</span>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-black-100/40">
            <span className="text-[#915EFF]">✓</span>
            <span className="text-white-100">Scaler 1000+ Hrs Fellow</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Resume, "resume");

