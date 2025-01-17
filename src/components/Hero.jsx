import { HERO_CONTENT } from "../constants";
import profilephoto from "../assets/josX.PNG";
import { ArrowRightCircle } from "react-bootstrap-icons";
import PropTypes from "prop-types";
import { PiRectangleThin } from "react-icons/pi";

const Hero = ({ scrollToContact }) => {
  return (
    <div className="border-b border-neutral-900 pb-15 pt-20 mt-32 lg:mb-25">
      <div className="flex flex-wrap">
        <div className=" lg:w-1/2">
          <div className="w-full flex flex-col item-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-10 lg:text-8xl">
              Yoseph Awoke
            </h1>
            <span
              className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 
            bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer and Grapics Designer
            </span>
            <p className="my-2  flex justify-center py-6 font-light text-blueGray-300 text-l lg:text-xl">
              {HERO_CONTENT}
            </p>
          </div>
          <div className="flex justify-start">
            <button
              className="px-6 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-blue-600 via-violet-700 to-purple-500 hover:bg-slate-600 rounded-full blueShadow text-white  sm:text-lg md:text-xl font-bold flex items-center  space-x-2"
              onClick={scrollToContact}
            >
              Let&apos;s Connect  <span className="ml-4"><ArrowRightCircle size={30} /></span> 
            </button>
          </div>
          
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 h-full flex items-center justify-center ">
          <div className="flex justify-center animate-updown">
            <img src={profilephoto} alt="Yoseph Awoke" />
          </div>
          <div className="absolute -z-10 flex justify-center items-center animate-pulse">
            <PiRectangleThin className="md:h-[80%] sm:h-[110%] min-h-[600px] w-auto text-cyan-300 blur-lg animate-[spin_30s_linear_infinite]"/>
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
