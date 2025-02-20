import { useState } from "react";

import logo from "../assets/Jos Logo cut low.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close the menu after clicking
  };

  return (
    <nav className="fixed top-0 left-0 right-5  z-50 text-neutral-300 shadow-lg">
      <div className="flex items-center justify-between mt-2 px-7 max-w-[1600px]   bg-neutral-950 mx-auto md:px-20 lg:px-40 rounded-r-full rounded-l-full border-[0.5px] border-orange-500">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-18" src={logo} alt="logo" />
        </div>

        {/* Desktop Navigation + Social Icons */}
        <div className="hidden md:flex items-center justify-between flex-1 ">
          {/* Navigation Links */}
          <div className="flex items-center gap-8 ml-20 text-lg">
            <button
              className="text-gray-300 hover:text-cyan-400 transition duration-300 "
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>
            <button
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </button>
            <button
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
            <button
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-2xl text-gray-300">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-cyan-400 transition duration-300" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-cyan-400 transition duration-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-cyan-400 transition duration-300" />
            </a>
          </div>
        </div>
        <div className=" md:flex items-center gap-8 lg:ml-10 text-lg">
          <button
            className=" px-4 py-2 rounded-full text-xl font-bold text-white border-cyan-500 border flex item-center gap-1 bg-gradient-to-r from-cyan-500 to-orange-400 hover:border-orange-400 hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow"
            onClick={() => scrollToSection("contact")}
          >
            Hire Me
          </button>
        </div>

        <div>
          {/* Hamburger Icon (Visible on Mobile) */}
          <button
            className=" flex lg:hidden sm:block p-4 bg-black items-center justify-center rounded-full border-[0.5px] border-orange-400  text-3xl "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        {/* Mobile Navigation Links */}
        <div
          className={`absolute mt-10 top-16  left-0 right-0 bg-neutral-950 p-4 md:hidden transition-transform ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-4 text-center ">
            <button
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>
            <button
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </button>
            <button
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
            <button
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </div>

          {/* Social Icons for Mobile */}
          <div className="mt-4 flex justify-center gap-4 text-2xl text-gray-300">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-cyan-400 transition duration-300" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-cyan-400 transition duration-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-cyan-400 transition duration-300" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
