import { HERO_CONTENT } from "../constants";
import profilephoto from "../assets/josX.PNG";
import { ArrowRightCircle } from "react-bootstrap-icons";
import PropTypes from "prop-types";

const Hero = ({scrollToContact}) => {
  return (
    <div className="border-b border-neutral-900 pb-12 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col item-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-20 lg:text-8xl">
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
            <button onClick={scrollToContact}>Let&apos;s Connect <ArrowRightCircle size={25} /> </button> 
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img  src= {profilephoto} alt="Yoseph Awoke" />
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
