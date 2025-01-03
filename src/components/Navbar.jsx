// import logo from "../assets/Jos Logo cut low.png";
// import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

// const Navbar = () => {

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <nav className=" mb-20 flex items-center justify-between py-6">
//       <div className="flex flex-shrink-0 items-center">
//         <img className="mx-2 w-23" src={logo} alt="logo" />
//       </div>

//       {/* Navigation Links */}
//       <div className="flex gap-8">
//         <button
//           className="text-gray-700 hover:text-blue-500 transition duration-300"
//           onClick={() => scrollToSection("home")}
//         >
//           Home
//         </button>
//         <button
//           className="text-gray-700 hover:text-blue-500 transition duration-300"
//           onClick={() => scrollToSection("skills")}
//         >
//           Skills
//         </button>
//         <button
//           className="text-gray-700 hover:text-blue-500 transition duration-300"
//           onClick={() => scrollToSection("experience")}
//         >
//           Experience
//         </button>
//         <button
//           className="text-gray-700 hover:text-blue-500 transition duration-300"
//           onClick={() => scrollToSection("projects")}
//         >
//           Projects
//         </button>
        
//       </div>

//       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//         <FaLinkedin />
//         <FaGithub />
//         <FaInstagram />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import logo from "../assets/Jos Logo cut low.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close the menu after clicking
  };

  return (
    <nav className="relative flex items-center justify-between py-4 px-6 bg-neutral-950 text-neutral-300 shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <img className="w-16" src={logo} alt="logo" />
      </div>

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

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-2xl text-gray-300">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
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

        {/* Social Icons for Mobile */}
        <div className="mt-4 flex justify-center gap-4 text-2xl text-gray-300">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
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
    </nav>
  );
};

export default Navbar;



