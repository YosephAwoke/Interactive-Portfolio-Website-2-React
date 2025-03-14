import { HERO_CONTENT } from "../constants";
import profilephoto from "../assets/josX.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import PropTypes from "prop-types";
import { PiRectangleThin } from "react-icons/pi";
import { useState } from "react";

const Hero = ({ scrollToContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownload = () => {
    // This is where you define the path to your resume file
    const resumeLink = "/resume/Yoseph Awoke Fentie.pdf"; // Replace with actual path
    const link = document.createElement("a");
    link.href = resumeLink;
    link.download = "Yoseph_Awoke_Resume.pdf"; // Name for the downloaded file
    link.click();
  };
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close the menu after clicking
  };

  return (
    <div className="border-b border-neutral-900  pt-20 mt-32 ">
      <div className="flex flex-wrap">
        <div className=" lg:w-1/2">
          <div className="w-full flex flex-col item-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-10 lg:text-8xl">
              Yoseph Awoke
            </h1>
            <span
              className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 
            bg-clip-text text-4xl tracking-tight text-transparent mx-4 "
            >
              Full Stack Developer | Grapics Designer
            </span>
            <p className="my-2 mx-5 flex justify-between items-center py-6 font-light text-blueGray-300 text-l lg:text-xl">
              {HERO_CONTENT}
            </p>
          </div>
          <div className="flex justify-start">
            <div className="w-full lg:w-1/2 ">
            <button
              className="ml-5 px-10 py-3 sm:px-5 sm:py-4 bg-gradient-to-r from-blue-600 via-violet-700 to-purple-500 hover:bg-slate-600 rounded-full blueShadow text-white  sm:text-sm md:text-lg  flex items-center  space-x-2"
              onClick={handleDownload}
            >
              Download CV 
            </button>
            </div>
            <div className="ml-[-50]   lg:w-1/2 ">
            <button
              className=" px-5  sm:px-5 sm:py-4 bg-gradient-to-r from-blue-600 via-violet-700 to-purple-500 hover:bg-slate-600 rounded-full blueShadow text-white  sm:text-sm md:text-lg  flex items-center  space-x-2"
              onClick={() => scrollToSection("contact")}
            >
              Let&apos;s Connect  <span className="ml-4"><ArrowRightCircle size={30} /></span> 
            </button>
            </div>
          </div>
          
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 h-full flex items-center justify-center ">
          <div className="flex justify-center animate-updown">
            <img src={profilephoto} alt="Yoseph Awoke" />
          </div>
          <div className="absolute -z-10 flex justify-center items-center animate-pulse">
            <PiRectangleThin className="md:h-[80%] sm:h-[110%] min-h-[250px] w-full text-cyan-300 blur-lg animate-[spin_30s_linear_infinite]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// Define prop types
Hero.propTypes = {
  scrollToContact: PropTypes.func.isRequired,
};
