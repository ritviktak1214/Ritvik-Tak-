import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { menu, close } from "../assets";
import { navLinks, personalInfo } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 py-3 sm:py-4 px-4 sm:px-8 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="flex items-center gap-2.5 sm:gap-3 shrink-0"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-400 flex items-center justify-center font-black text-white text-sm sm:text-base shadow-md shrink-0">
            RT
          </div>
          <div className="flex flex-col">
            <p className="text-white text-[15px] sm:text-[17px] font-bold tracking-wide cursor-pointer whitespace-nowrap">
              Ritvik Tak <span className="text-[#915EFF] font-semibold text-xs sm:text-sm">| AI Engineer</span>
            </p>
            <span className="hidden xs:inline text-[11px] sm:text-xs text-secondary font-light">
              Computer Vision & Edge AI
            </span>
          </div>
        </Link>

        {/* Desktop Menu (visible on lg: 1024px and above) */}
        <ul className="hidden lg:flex flex-row items-center gap-6 xl:gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-[14px] xl:text-[15px] font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                active === nav.title ? "text-[#915EFF] font-semibold" : "text-secondary hover:text-white"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-md hover:shadow-purple-500/25 inline-block shrink-0"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile & Tablet Hamburger Button (below lg: 1024px) */}
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white p-2"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle navigation menu"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-5 h-5 object-contain"
            />
          </button>

          {/* Mobile Dropdown Drawer */}
          {toggle && (
            <div className="p-6 bg-tertiary/95 backdrop-blur-xl border border-white/10 fixed top-16 right-4 left-4 sm:left-auto sm:w-[260px] rounded-2xl shadow-2xl flex flex-col gap-3.5 z-50">
              <ul className="flex flex-col gap-2.5">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`text-[15px] font-medium cursor-pointer transition-colors py-1 ${
                      active === nav.title ? "text-[#915EFF] font-bold" : "text-secondary hover:text-white"
                    }`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`} className="block w-full">{nav.title}</a>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${personalInfo.email}`}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-center text-white text-xs font-semibold px-4 py-2.5 rounded-xl mt-1 shadow-md"
                onClick={() => setToggle(false)}
              >
                Get in Touch
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
