import logox from "../assets/img/Jos Logo cut2.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close the menu after clicking
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <img
        className="my-10  justify-center flex flex-col "
        width={200}
        align="center"
        src={logox}
        alt="logo"
      />
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8">
        <div className="w-full lg:w-1/2">
          <h1 className="my-10 text-center text-xl "> Thanks for visiting!</h1>
          <h1 className="my-10 text-center text-l "> Thanks for visiting!</h1>

          <div className="flex items-center justify-center gap-4 text-2xl text-gray-300">
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

        <div className="w-full lg:w-1/2">
          <nav className="relative flex items-center justify-between py-4 px-6 bg-neutral-950 text-neutral-300 shadow-lg">
            {/* Desktop Navigation + Social Icons */}
            <div className="hidden md:flex items-center justify-between flex-1">
              {/* Navigation Links */}
              <div className="flex items-center gap-8 ml-20">
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
            </div>

            {/* Hamburger Icon (Visible on Mobile) */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Mobile Navigation Links */}
            <div
              className={`absolute top-16 left-0 right-0 bg-neutral-950 p-4 md:hidden transition-transform ${
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
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
