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
    <nav className="fixed top-0 left-0 right-0  z-50 bg-neutral-950 text-neutral-300 shadow-lg">
      <div className="flex items-center justify-between py-4 px-6 lg:px-40">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-18" src={logo} alt="logo" />
        </div>

        {/* Desktop Navigation + Social Icons */}
        <div className="hidden md:flex items-center justify-between flex-1">
          {/* Navigation Links */}
          <div className="flex items-center gap-8 ml-20 text-lg">
            <button
              className="text-gray-300 hover:text-blue-500 transition duration-300"
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              className="text-gray-300 hover:text-blue-500 transition duration-300"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>
            <button
              className="text-gray-300 hover:text-blue-500 transition duration-300"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </button>
            <button
              className="text-gray-300 hover:text-blue-500 transition duration-300"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
            {/* <button
            className="text-gray-300 hover:text-blue-500 transition duration-300"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </button> */}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-2xl text-gray-300">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-500 transition duration-300" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-gray-800 transition duration-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-500 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Hamburger Icon (Visible on Mobile) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Navigation Links */}
        <div
          className={`absolute mt-10 top-16 left-0 right-0 bg-neutral-950 p-4 md:hidden transition-transform ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-4 text-center">
            <button
              className="text-gray-300 hover:text-blue-500 transition duration-300"
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>
            <button
              className="text-gray-300 hover:text-blue-500 transition duration-300"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>
            <button
              className="text-gray-300 hover:text-blue-500 transition duration-300"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </button>
            <button
              className="text-gray-300 hover:text-blue-500 transition duration-300"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
            <button
              className="text-gray-300 hover:text-blue-500 transition duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </button>
          </div>

          {/* Social Icons for Mobile */}
          <div className="mt-4 flex justify-center gap-4 text-2xl text-gray-300">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-500 transition duration-300" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-gray-800 transition duration-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-500 transition duration-300" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
