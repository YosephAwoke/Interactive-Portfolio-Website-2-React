// import React from 'react';
import PropTypes from "prop-types";
import { motion, useInView } from "framer-motion";
import Carousel from "react-multi-carousel";
// import { useEffect } from "react";
import { useRef } from "react";
import {
  // Main Skills Icons
  Phone,
  Cpu,
  Shield,
  // Backend Icons
  Server,
  Code2,
  Terminal,
  TrendingUp,
  Database,
  FileCode2,
  Rocket,
  // Frontend Icons
  FileCode,
  Layout,
  LayoutDashboard,
  Atom,
  // Language Icons
  Globe,
} from "lucide-react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { PiFigmaLogoFill } from "react-icons/pi";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
} from "react-icons/si";
import {
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiKeras,
  SiPandas,
} from "react-icons/si";
// import { Button } from '@/components/ui/button'; // Assuming you have shadcn/ui installed

// Reusable component for progress bars
const ProgressBar = ({ title, percentage, years, icon: Icon }) => {
  const progressRef = useRef(null);
  const isInView = useInView(progressRef, { once: true });

  return (
    <div className="flex items-center gap-2 w-full" ref={progressRef}>
      {Icon && (
        <div className="w-9 h-9 rounded-full flex items-center justify-center">
          <Icon className="w-10 h-10 text-4xl md:text-6xl" />
        </div>
      )}
      <div className="flex-1">
        <h4 className="text-sm font-medium text-gray-200 mb-1">{title}</h4>
        <div className="relative w-full bg-gray-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 h-2 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: isInView ? `${percentage}%` : "0%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-sm text-gray-400">{years}</span>
          <span className="text-sm text-gray-300">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  years: PropTypes.string.isRequired,
};
// Reusable component for main skill cards

const SkillCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="w-full h-full">
      <motion.div
        className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl p-6 shadow-lg border border-gray-700
                 flex flex-col items-center justify-center text-center overflow-visible"
        whileHover={{
          scale: 0.9, // Slightly enlarge on hover
          y: -5, // Move up slightly
        }}
        transition={{
          duration: 0.3, // Quick animation
          ease: "easeInOut",
        }}
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4 shadow-md">
          {Icon && <Icon className="w-10 h-10 text-white" />}
        </div>
        <h3 className="text-xl font-bold text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </motion.div>
    </div>
  );
};

SkillCard.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const SkillsSection = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <section className="overflow-visible pt-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          My Skill Set
        </h2>
        {/* Highlighted Skills (Carousel) */}
        <Carousel
          responsive={responsive}
          infinite={true}
          className="skill-slider"
          containerClass="carousel-container"
          itemClass="px-3"
          showDots={true}
          arrows={true}
        >
          <SkillCard
            title="Full Stack Development"
            description="Expert in building and managing full-stack web and mobile applications."
            icon={() => (
              <LayoutDashboard className="text-green-300 w-10 h-10" />
            )}
          />
          <SkillCard
            title="Cloud Services & REST APIs"
            description="Proficient in designing and maintaining scalable cloud services and APIs."
            icon={() => <Server className="text-gray-300 w-10 h-10" />}
          />
          <SkillCard
            title="Artificial Intelligence & Deep Learning"
            description="Skilled in developing and deploying AI and deep learning models."
            icon={() => <Cpu className="text-yellow-300 w-10 h-10" />}
          />
          <SkillCard
            title="Graphics Design & Video Editing"
            description="Experienced in creating graphics and editing videos for various platforms."
            icon={() => (
              <SiAdobephotoshop className=" text-blue-300 w-10 h-10" />
            )}
          />
          <SkillCard
            title="Cloud Computing"
            description="Experienced in deploying and managing cloud-based infrastructures."
            icon={() => <Rocket className="text-purple-300 w-10 h-10" />}
          />
        </Carousel>
        {/* Backend Skills */}
        <div className="">
          <div className=" mb-8">
            <h3 className="text-2xl font-semibold text-gray-200 mb-6 border-b border-gray-700 pb-2 pt-3">
              <span className=" bg-gradient-to-b text-green-400 font-extrabold">
                {" "}
                |
              </span>
              <span className="ml-2">Backend</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[2rem]">
            <ProgressBar
              title="Node.js"
              percentage={95}
              years="6+ years experience"
              icon={() => <FaNodeJs className="text-green-500 w-10 h-10" />}
            />
            <ProgressBar
              title="Java 11+"
              percentage={90}
              years="6+ years experience"
              icon={() => <Code2 className="text-orange-500 w-10 h-10" />}
            />
            <ProgressBar
              title="Python 3.x"
              percentage={85}
              years="4+ years experience"
              icon={() => <Terminal className="text-blue-500 w-10 h-10" />}
            />
            <ProgressBar
              title="MySQL"
              percentage={90}
              years="4+ years experience"
              icon={() => <Database className="text-blue-600 w-10 h-10" />}
            />
            <ProgressBar
              title="Docker"
              percentage={60}
              years="3+ years experience"
              icon={() => <Rocket className="text-blue-400 w-10 h-10" />}
            />
            <ProgressBar
              title="PHP 8.0+"
              percentage={100}
              years="6+ years experience"
              icon={() => <FileCode2 className="text-purple-500 w-10 h-10" />}
            />
            <ProgressBar
              title="Kubernetes"
              percentage={80}
              years="3+ years experience"
              icon={() => <Rocket className="text-blue-400 w-10 h-10" />}
            />
            <ProgressBar
              title="MongoDB"
              percentage={50}
              years="2+ years experience"
              icon={() => <Database className="text-green-500 w-10 h-10" />}
            />
            <ProgressBar
              title="Git"
              percentage={95}
              years="7+ years experience"
              icon={() => <Server className="text-orange-500 w-10 h-10" />}
            />
          </div>
        </div>
        {/* Frontend Skills */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-200 mb-6 border-b border-gray-700 pb-2">
            Frontend
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProgressBar
              title="HTML5"
              percentage={100}
              years="9+ years experience"
              icon={() => <FileCode className="text-orange-500 w-10 h-10" />}
            />
            <ProgressBar
              title="CSS3"
              percentage={65}
              years="9+ years experience"
              icon={() => <Layout className="text-blue-500 w-10 h-10" />}
            />
            <ProgressBar
              title="JavaScript ES6+"
              percentage={90}
              years="7+ years experience"
              icon={() => (
                <LayoutDashboard className="text-yellow-500 w-10 h-10" />
              )}
            />
            <ProgressBar
              title="React"
              percentage={95}
              years="5+ years experience"
              icon={() => <Atom className="text-blue-400 w-10 h-10" />}
            />
            <ProgressBar
              title="Vue.js"
              percentage={40}
              years="1 year experience"
              icon={() => <Atom className="text-green-500 w-10 h-10" />}
            />
            <ProgressBar
              title="Bootstrap"
              percentage={90}
              years="5+ years experience"
              icon={() => <Atom className="text-purple-500 w-10 h-10" />}
            />
          </div>
        </div>
        {/* Deep Learning Skills */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-200 mb-6 border-b border-gray-700 pb-2">
            Deep Learning
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProgressBar
              title="TensorFlow"
              percentage={90}
              years="3+ years experience"
              icon={() => (
                <SiTensorflow className="text-orange-600 w-10 h-10" />
              )}
            />
            <ProgressBar
              title="PyTorch"
              percentage={70}
              years="3+ years experience"
              icon={() => <SiPytorch className="text-red-500 w-10 h-10" />}
            />
            <ProgressBar
              title="OpenCV"
              percentage={80}
              years="2+ years experience"
              icon={() => <SiOpencv className="text-teal-500 w-10 h-10" />}
            />
            <ProgressBar
              title="Keras"
              percentage={90}
              years="3+ years experience"
              icon={() => <SiKeras className="text-red-400 w-10 h-10" />}
            />
            <ProgressBar
              title="Pandas"
              percentage={80}
              years="4+ years experience"
              icon={() => <SiPandas className="text-blue-600 w-10 h-10" />}
            />
          </div>
        </div>
        {/* Graphic Design Skills */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-200 mb-6 border-b border-gray-700 pb-2">
            Graphic Design
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProgressBar
              title="Photoshop"
              percentage={95}
              years="5+ years experience"
              icon={() => (
                <SiAdobephotoshop className="text-blue-500 w-10 h-10" />
              )}
            />
            <ProgressBar
              title="Illustrator"
              percentage={80}
              years="4+ years experience"
              icon={() => (
                <SiAdobeillustrator className="text-orange-500 w-10 h-10" />
              )}
            />
            <ProgressBar
              title="Premiere Pro"
              percentage={85}
              years="3+ years experience"
              icon={() => (
                <SiAdobepremierepro className="text-purple-500 w-10 h-10" />
              )}
            />
            <ProgressBar
              title="After Effects"
              percentage={75}
              years="3+ years experience"
              icon={() => (
                <SiAdobeaftereffects className="text-indigo-500 w-10 h-10" />
              )}
            />
            <ProgressBar
              title="Figma"
              percentage={80}
              years="4+ years experience"
              icon={() => (
                <PiFigmaLogoFill className="text-blue-400 w-10 h-10" />
              )}
            />
          </div>
        </div>
        }
        <div>
          <h3 className="text-2xl font-semibold  text-gray-200 mb-8 border-b border-gray-700 pb-2">
            Languages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <Globe className="w-10 h-10 text-blue-400" />
                <h4 className="text-lg font-semibold text-gray-200">
                  <span className="font-bold">English</span> -{" "}
                  <span className="italic">Native</span>{" "}
                  <span className="text-base font-medium text-cyan-300">
                    - Native speaker with excellent communication and writing
                    skills.
                  </span>
                </h4>
              </div>

              <div className="flex items-center gap-4">
                <Globe className="w-10 h-10 text-blue-400" />
                <h4 className="text-lg font-semibold text-gray-200">
                  <span className="font-bold">Amharic</span> -{" "}
                  <span className="italic">Fluent</span>{" "}
                  <span className="text-base font-medium text-cyan-300">
                    - Fluent speaker with strong communication and comprehension
                    skills.
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
