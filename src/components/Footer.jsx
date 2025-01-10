import { Col, Container, Row } from "react-bootstrap";
// import Resume from "./Resume";
import logox from "../assets/img/Jos Logo cut2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/git-icon.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
// import { MailchimpForm } from "./MailchimpForm";
import { Newsletter } from "./Newsletter";
// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

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
      <Newsletter />
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col sm={6} className="text-center text-sm-end">
              <div className="flex items-center justify-center gap-4 text-2xl text-gray-300">
                <img className="w-16 ml-0 mt-6" src={logox} alt="Logo" />

                <nav className=" flex items-center justify-between py-4 px-10 text-neutral-300 shadow-lg">
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
                    className={` bottom-10 left-5 right-0 bg-neutral-950 p-4 md:hidden transition-transform ${
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
            </Col>

            <Col sm={6} className="text-center text-sm-end">
             <h1 className="text-2xl font-bold ">Yoseph Awoke Fentie</h1>
             <h1 className="text-2xl font-light mt-2">Address: Addis Ababa, Ethiopia</h1>
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/yosephawoke/">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://github.com/YosephAwoke">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="https://www.instagram.com/yoseph.awoke/">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <p>Copyright 2024. All Rights Reserved</p>
            </Col>
          
          </Row>
        </Container>
      </footer>

      {/* <h1 className="my-10 text-center text-xl "> Thanks for visiting!</h1>
          <h1 className="my-10 text-center text-l "> Contact</h1>

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
          </div> */}
    </div>
  );
};

export default Footer;
