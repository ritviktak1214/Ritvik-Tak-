import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
//template_rqzs024
//service_shf6uuh
//Kfu721dFIsR2hPUnh
    emailjs
      .send('service_shf6uuh','template_rqzs024',
        {
          from_name: form.name,
          to_name: "Ritvik Tak",
          from_email: form.email,
          to_email: "thakur.ritvik9440@gmail.com",
          message: form.message,
        },
       'Kfu721dFIsR2hPUnh'
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="xl:mt-12 flex flex-col-reverse xl:flex-row gap-10 overflow-hidden">
      {/* Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-blue-950 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
          noValidate
        >
          {/** Name */}
          <label htmlFor="name" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-blue-900 py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none font-medium"
              required
            />
          </label>

          {/** Email */}
          <label htmlFor="email" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-blue-900 py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none font-medium"
              required
            />
          </label>

          {/** Message */}
          <label htmlFor="message" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={7}
              placeholder="What do you want to say?"
              className="bg-blue-900 py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none font-medium resize-none"
              required
            />
          </label>

          {/** Submit Button */}
          <button
            type="submit"
            className="bg-blue-900 py-3 px-8 rounded-xl text-white font-bold shadow-md shadow-primary w-fit transition-colors hover:bg-primary"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
