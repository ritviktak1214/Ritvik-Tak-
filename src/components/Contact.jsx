import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { personalInfo } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'info' | 'error', text: '' }
  const [showMailOptions, setShowMailOptions] = useState(false);
  const [copied, setCopied] = useState(false);

  const recipientEmail = "thakur.ritvik9440@gmail.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const getEncodedMailData = () => {
    const subject = encodeURIComponent(`Portfolio Message from ${form.name || "Visitor"}`);
    const body = encodeURIComponent(
      `Hello Ritvik,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}\n\n---\nSent via ritvik-portfolio`
    );
    return { subject, body };
  };

  const openGmailDirect = () => {
    const { subject, body } = getEncodedMailData();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  const openDefaultMail = () => {
    const { subject, body } = getEncodedMailData();
    const mailtoUrl = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  const copyDetailsToClipboard = () => {
    const details = `To: ${recipientEmail}\nFrom: ${form.name} (${form.email})\nMessage:\n${form.message}`;
    navigator.clipboard.writeText(details);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill in all fields before sending.");
      return;
    }

    setLoading(true);
    setStatusMessage(null);

    // Attempt EmailJS first
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_shf6uuh",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_rqzs024",
        {
          from_name: form.name,
          to_name: personalInfo.name,
          from_email: form.email,
          to_email: recipientEmail,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "Kfu721dFIsR2hPUnh"
      )
      .then(() => {
        setLoading(false);
        setStatusMessage({
          type: "success",
          text: `Thank you, ${form.name}! Your message was sent directly to ${recipientEmail}.`,
        });
        setForm({ name: "", email: "", message: "" });
        setShowMailOptions(false);
      })
      .catch((error) => {
        setLoading(false);
        console.warn("EmailJS background service not configured with active keys; falling back to direct Gmail/mail dispatch:", error);
        
        // Automatic fallback: Open direct Gmail compose and display clean helper buttons
        setShowMailOptions(true);
        setStatusMessage({
          type: "info",
          text: `Your details are ready to send directly to ${recipientEmail}! Choose your preferred delivery method below:`,
        });
        // Automatically open Gmail compose for the user
        openGmailDirect();
      });
  };

  return (
    <div className="xl:mt-10 flex flex-col-reverse xl:flex-row gap-8 lg:gap-10 overflow-hidden">
      {/* Contact Form & Info */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.85] bg-tertiary p-5 sm:p-8 rounded-2xl border border-white/5 shadow-card w-full"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Direct Contact Badges */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <a
            href={`mailto:${recipientEmail}`}
            className="flex items-center gap-3 p-3 rounded-xl bg-black-100/70 border border-white/5 hover:border-[#915EFF]/50 transition-colors"
          >
            <span className="text-lg sm:text-xl">📧</span>
            <div className="overflow-hidden min-w-0">
              <p className="text-[11px] text-secondary">Email</p>
              <p className="text-white font-medium text-xs truncate">{recipientEmail}</p>
            </div>
          </a>

          <a
            href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-3 p-3 rounded-xl bg-black-100/70 border border-white/5 hover:border-[#915EFF]/50 transition-colors"
          >
            <span className="text-lg sm:text-xl">📱</span>
            <div className="min-w-0">
              <p className="text-[11px] text-secondary">Phone</p>
              <p className="text-white font-medium text-xs">{personalInfo.phone}</p>
            </div>
          </a>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-black-100/70 border border-white/5">
            <span className="text-lg sm:text-xl">📍</span>
            <div className="min-w-0">
              <p className="text-[11px] text-secondary">Location</p>
              <p className="text-white font-medium text-xs">{personalInfo.location}</p>
            </div>
          </div>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl bg-black-100/70 border border-white/5 hover:border-[#0077B5] transition-colors"
          >
            <span className="text-lg sm:text-xl">🔗</span>
            <div className="min-w-0">
              <p className="text-[11px] text-secondary">LinkedIn</p>
              <p className="text-white font-medium text-xs truncate">ritvik-tak-14bb84251</p>
            </div>
          </a>
        </div>

        {/* Status notification banner */}
        <AnimatePresence>
          {statusMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mt-6 p-4 rounded-xl border text-xs sm:text-sm font-medium ${
                statusMessage.type === "success"
                  ? "bg-green-500/15 border-green-500/30 text-green-300"
                  : "bg-blue-500/15 border-blue-500/30 text-blue-200"
              }`}
            >
              <p>{statusMessage.text}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Direct Email dispatch fallback actions */}
        <AnimatePresence>
          {showMailOptions && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-4 rounded-xl bg-black-200 border border-[#915EFF]/40 flex flex-col gap-2.5"
            >
              <p className="text-white text-xs font-semibold">
                Send to {recipientEmail}:
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={openGmailDirect}
                  className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-bold py-2 px-3.5 rounded-lg shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Open in Gmail Web</span>
                  <span>↗</span>
                </button>

                <button
                  type="button"
                  onClick={openDefaultMail}
                  className="bg-white/10 hover:bg-white/15 text-white text-xs font-semibold py-2 px-3.5 rounded-lg border border-white/15 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Open in Mail App</span>
                  <span>📨</span>
                </button>

                <button
                  type="button"
                  onClick={copyDetailsToClipboard}
                  className="bg-white/5 hover:bg-white/10 text-secondary hover:text-white text-xs font-medium py-2 px-3 rounded-lg border border-white/10 transition-all cursor-pointer"
                >
                  {copied ? "Copied! ✓" : "Copy Details 📋"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 sm:mt-8 flex flex-col gap-4 sm:gap-6"
        >
          <label htmlFor="name" className="flex flex-col">
            <span className="text-white text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Your Name</span>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-black-100 py-3 sm:py-3.5 px-4 sm:px-5 text-white placeholder:text-secondary rounded-lg outline-none border border-white/5 focus:border-[#915EFF] transition-colors text-xs sm:text-sm font-medium w-full"
              required
            />
          </label>

          <label htmlFor="email" className="flex flex-col">
            <span className="text-white text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Your Email</span>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-black-100 py-3 sm:py-3.5 px-4 sm:px-5 text-white placeholder:text-secondary rounded-lg outline-none border border-white/5 focus:border-[#915EFF] transition-colors text-xs sm:text-sm font-medium w-full"
              required
            />
          </label>

          <label htmlFor="message" className="flex flex-col">
            <span className="text-white text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Your Message</span>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell me about your project, team, or opportunity..."
              className="bg-black-100 py-3 sm:py-3.5 px-4 sm:px-5 text-white placeholder:text-secondary rounded-lg outline-none border border-white/5 focus:border-[#915EFF] transition-colors text-xs sm:text-sm font-medium resize-none w-full"
              required
            />
          </label>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl text-white font-bold shadow-lg shadow-purple-600/30 w-full sm:w-fit transition-all duration-200 cursor-pointer disabled:opacity-50 text-sm flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <span>🚀</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={openGmailDirect}
              className="bg-white/5 hover:bg-white/10 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl border border-white/10 transition-colors text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Direct to Gmail</span>
              <span>✉️</span>
            </button>
          </div>
        </form>
      </motion.div>

      {/* Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 w-full xl:h-auto md:h-[500px] sm:h-[400px] h-[300px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
