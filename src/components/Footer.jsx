
// import Resume from "./Resume";
import logox from "../assets/img/Jos Logo cut2.png";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
// import { MdOutlineMarkEmailRead } from "react-icons/md";
// import { FaPhoneSquare } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";

// import { MailchimpForm } from "./MailchimpForm";
import { Newsletter } from "./Newsletter";
// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    // setIsMenuOpen(false); // Close the menu after clicking
  };

  return (
    <div>
      <div className="flex justify-center animate-updown">
      <Newsletter  />
      </div>
      <footer className="footer bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-2xl p-4 py-20 lg:py-15">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 flex flex-wrap lg:flex-nowrap justify-between ">
              <div className="w-full lg:w-1/2">
                <button
                  onClick={() => scrollToSection("home")}
                  className=" flex items-center"
                >
                  <img
                    src={logox}
                    width={100}
                    
                    alt="Jos Logo"
                  />
                  <span className="self-center text-4xl font-extralight whitespace-nowrap dark:text-white">
                    Yoseph Awoke
                  </span>
                </button>
              </div>
              {/* <div className="ml-6 w-full lg:w-1/2">
                <h2 className="ml-10 mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-lg">
                  CONTACT ME
                </h2>
                <button className=" flex items-center ml-10">
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRttWZrqWvXBQbNwtnkbDRxWLDbhslFLlCPQJRbJJNdlJQbPLxsBVQNhpTRXxnVTTBTJzqg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdOutlineMarkEmailRead className="hover:text-blue-500 transition duration-300 text-pink-400 flex size-7" />
                  </a>
                  <span className="ml-4 self-center text-xl font-extralight whitespace-nowrap dark:text-white">
                    yosephawoke8@gmail.com
                  </span>
                </button>
                <button className=" flex items-center ml-10 mt-3">
                  <a target="_blank" rel="noopener noreferrer">
                    <FaPhoneSquare className="hover:text-blue-500 text-green-400 transition duration-300 flex size-7" />
                  </a>
                  <span className="ml-4 self-center text-xl font-extralight whitespace-nowrap dark:text-white">
                    +251920409888
                  </span>
                </button>
                <button className=" flex items-center ml-10 mt-3">
                  <a
                    href="https://www.google.com/search?q=addis+ababa+ethiopia+location&oq=addis+ababa+ethiopia+lo&gs_lcrp=EgRlZGdlKgcIARAAGIAEMgYIABBFGDkyBwgBEAAYgAQyCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhge0gEJMTI3MTlqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8#eim=CAE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLocationDot className="hover:text-blue-500 text-red-400 transition duration-300 flex size-7" />
                  </a>
                  <span className="ml-4 self-center text-xl font-extralight whitespace-nowrap dark:text-white">
                    Addis Ababa, Ethiopia
                  </span>
                </button>
              </div> */}
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-40 sm:grid-cols-4">
              <div className="lg:w-1/2">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white text-lg">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 text-lg">
                  <li className="mb-4">
                    <a
                      onClick={() => scrollToSection("home")}
                      className="hover:underline"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => scrollToSection("home")}
                      className="hover:underline"
                    >
                      Skills
                    </a>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"></h2>
                <ul className="text-gray-500 dark:text-gray-400 text-lg">
                  <li className="mt-11">
                    <a
                      onClick={() => scrollToSection("home")}
                      className="hover:underline"
                    >
                      Experiences
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      onClick={() => scrollToSection("home")}
                      className="hover:underline"
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="lg:w-1/2">
                <h2 className="mb-6  font-semibold text-gray-900 text-lg uppercase dark:text-white">
                  Follow Me
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 text-lg ">
                  <li className="mb-4">
                    <a
                      href="https://github.com/YosephAwoke"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/yosephawoke/"
                      className="hover:underline"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li className="mt-4">
                    <a
                      href="https://www.instagram.com/yoseph.awoke/"
                      className="hover:underline"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-m text-gray-300 sm:text-center ">
              © 2024 <a className="hover:underline">Yoseph Awoke™</a>. All
              Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              {/* Social Icons */}
              <div className="flex items-center gap-4 text-2xl text-gray-300">
                <h2 className="font-light text-xl">Lets keep in touch on socials:</h2>
                <a
                  href="https://www.linkedin.com/in/yosephawoke/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="hover:text-blue-500 transition duration-300" />
                </a>
                <a
                  href="https://github.com/YosephAwoke"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="hover:text-gray-800 transition duration-300" />
                </a>
                <a
                  href="https://www.instagram.com/yoseph.awoke/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="hover:text-pink-500 transition duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
