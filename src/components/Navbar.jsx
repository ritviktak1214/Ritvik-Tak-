import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {  menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 z-20 py-5 px-6 transition-all ${scrolled ? "bg-blue-900 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img loading="lazy" src={logo} alt="logo" className="w-9 h-9 object-contain" /> */}
          <p className="text-white text-lg font-bold cursor-pointer">
            Ritvik Tak <span className="hidden sm:inline">| Web Developer</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-lg font-medium cursor-pointer ${
                active === nav.title ? "text-white" : "text-gray-400"
              } hover:text-white`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <img loading="lazy"
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Dropdown */}
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-gray-800 absolute top-20 right-4 min-w-[160px] rounded-xl shadow-lg flex-col gap-4`}
          >
            <ul className="flex flex-col">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`text-base font-medium cursor-pointer ${
                    active === nav.title ? "text-white" : "text-gray-400"
                  } hover:text-white mb-2`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
