import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials as defaultTestimonials } from "../constants";

const STORAGE_KEY = "portfolio_testimonials";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  rating = 5,
  isUserAdded = false,
}) => {
  const renderAvatar = () => {
    if (image && typeof image === "string") {
      return (
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover border border-white/10 shrink-0"
        />
      );
    }
    // Colorful initials fallback for user-submitted reviews
    const initials = name
      ? name
          .split(" ")
          .map((n) => n[0])
          .slice(0, 2)
          .join("")
          .toUpperCase()
      : "U";

    return (
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-400 flex items-center justify-center font-bold text-white text-xs shrink-0 shadow-md border border-white/20">
        {initials}
      </div>
    );
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.2) }}
      className="bg-black-200 p-6 sm:p-8 rounded-2xl w-full shadow-card border border-white/5 hover:border-[#915EFF]/40 transition-colors flex flex-col justify-between h-full relative group"
    >
      {isUserAdded && (
        <span className="absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
          New Review
        </span>
      )}

      <div>
        <div className="flex items-center justify-between">
          <p className="text-[#915EFF] text-3xl sm:text-4xl font-black font-serif">“</p>
          <div className="flex items-center gap-0.5 text-amber-400 text-xs">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < rating ? "opacity-100" : "opacity-30"}>
                ★
              </span>
            ))}
          </div>
        </div>

        <p className="text-white-100 text-[13px] sm:text-[14px] leading-relaxed tracking-wide -mt-2">
          {testimonial}
        </p>
      </div>

      <div className="mt-5 sm:mt-6 flex items-center gap-3.5 pt-4 border-t border-white/5">
        {renderAvatar()}
        <div className="flex flex-col min-w-0">
          <p className="text-white text-[13.5px] sm:text-[14px] font-semibold truncate">
            {name}
          </p>
          <p className="text-secondary text-[11px] sm:text-[12px] truncate">
            {designation} • {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    designation: "",
    company: "",
    testimonial: "",
    rating: 5,
  });
  const [submittedMessage, setSubmittedMessage] = useState("");

  // Load reviews from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviews(parsed);
          return;
        }
      }
    } catch (e) {
      console.warn("Could not read saved testimonials:", e);
    }
    setReviews(defaultTestimonials);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (val) => {
    setForm((prev) => ({ ...prev, rating: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.testimonial.trim()) {
      alert("Please provide at least your name and your feedback message.");
      return;
    }

    const newReview = {
      name: form.name.trim(),
      designation: form.designation.trim() || "Professional",
      company: form.company.trim() || "Independent",
      testimonial: form.testimonial.trim(),
      rating: Number(form.rating) || 5,
      isUserAdded: true,
      createdAt: new Date().toISOString(),
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.error("Failed to save review to localStorage:", err);
    }

    setSubmittedMessage("Thank you! Your testimonial has been saved and published.");
    setForm({
      name: "",
      designation: "",
      company: "",
      testimonial: "",
      rating: 5,
    });

    setTimeout(() => {
      setIsModalOpen(false);
      setSubmittedMessage("");
    }, 1800);
  };

  const handleResetToDefault = () => {
    if (window.confirm("Reset all testimonials to original default endorsements?")) {
      localStorage.removeItem(STORAGE_KEY);
      setReviews(defaultTestimonials);
    }
  };

  return (
    <div className="mt-8 sm:mt-12 bg-black-100 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5 relative">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[220px] sm:min-h-[260px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Endorsements & impact</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>

        {/* Action Button: Give Review */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm py-2.5 px-5 rounded-full shadow-lg shadow-purple-600/30 transition-all duration-200 cursor-pointer flex items-center gap-2 hover:scale-105"
          >
            <span>Leave a Review</span>
            <span>✍️</span>
          </button>

          {reviews.length > defaultTestimonials.length && (
            <button
              type="button"
              onClick={handleResetToDefault}
              title="Reset to default testimonials"
              className="text-xs text-secondary hover:text-white px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className={`-mt-14 sm:-mt-16 pb-8 sm:pb-12 ${styles.paddingX} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
        <AnimatePresence mode="popLayout">
          {reviews.map((testimonial, index) => (
            <FeedbackCard
              key={`${testimonial.name}-${index}`}
              index={index}
              {...testimonial}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Review Submission Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-tertiary w-full max-w-lg p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-secondary hover:text-white text-xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>

              <h3 className="text-white text-xl sm:text-2xl font-bold">
                Leave a Testimonial ✨
              </h3>
              <p className="text-secondary text-xs sm:text-sm mt-1">
                Your feedback will be saved and displayed on the portfolio.
              </p>

              {submittedMessage ? (
                <div className="my-8 p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-green-300 text-center font-medium text-sm animate-pulse">
                  {submittedMessage}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3.5">
                  <div>
                    <label className="text-white text-xs font-medium block mb-1">
                      Your Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      required
                      className="w-full bg-black-100 py-2.5 px-3.5 text-white placeholder:text-secondary/60 rounded-lg outline-none border border-white/10 focus:border-[#915EFF] text-xs sm:text-sm font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-white text-xs font-medium block mb-1">
                        Role / Designation
                      </label>
                      <input
                        name="designation"
                        type="text"
                        value={form.designation}
                        onChange={handleChange}
                        placeholder="e.g. Senior CV Engineer"
                        className="w-full bg-black-100 py-2.5 px-3.5 text-white placeholder:text-secondary/60 rounded-lg outline-none border border-white/10 focus:border-[#915EFF] text-xs sm:text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="text-white text-xs font-medium block mb-1">
                        Company / Organization
                      </label>
                      <input
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="e.g. Mialo / Scaler"
                        className="w-full bg-black-100 py-2.5 px-3.5 text-white placeholder:text-secondary/60 rounded-lg outline-none border border-white/10 focus:border-[#915EFF] text-xs sm:text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white text-xs font-medium block mb-1">
                      Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingChange(star)}
                          className={`text-xl cursor-pointer transition-transform hover:scale-125 ${
                            star <= form.rating ? "text-amber-400" : "text-gray-600"
                          }`}
                        >
                          ★
                        </button>
                      ))}
                      <span className="text-xs text-secondary ml-2 font-medium">
                        {form.rating} out of 5 stars
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="text-white text-xs font-medium block mb-1">
                      Your Feedback / Review *
                    </label>
                    <textarea
                      name="testimonial"
                      value={form.testimonial}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Share your experience working with Ritvik, technical strengths, or recommendations..."
                      required
                      className="w-full bg-black-100 py-2.5 px-3.5 text-white placeholder:text-secondary/60 rounded-lg outline-none border border-white/10 focus:border-[#915EFF] text-xs sm:text-sm font-medium resize-none"
                    />
                  </div>

                  <div className="mt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 rounded-xl text-xs sm:text-sm text-secondary hover:text-white transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm py-2 px-5 rounded-xl shadow-md transition-all cursor-pointer"
                    >
                      Save & Publish Review 🚀
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
