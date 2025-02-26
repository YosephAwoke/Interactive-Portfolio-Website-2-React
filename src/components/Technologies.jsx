

import { Col, Container, Row } from "react-bootstrap";

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import "../App.css";

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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const Technologies = () => {
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
    <section className="skill" id="Skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2 className="my-10 text-5xl text-cyan-400 md:text-2xl ">My Skills</h2>

              <p className="text-sm md:text-base">
                Experienced in all stages of the creative and development cycle,
                I excel in both programming and graphic design. Proficient in
                Python, React, Kotlin, and Adobe Creative Suite, I bring ideas
                to life through design and code. I thrive in fast-paced
                environments, consistently delivering innovative solutions.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image0" />
                  <h5 className="text-sm md:text-base">
          
                    Full Stack Development
                  </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image2" />
                  <h5 className="text-sm md:text-base"> Graphic Design</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image3" />
                  <h5 className="text-sm md:text-base"> Deep Learning</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image4" />
                  <h5 className="text-sm md:text-base">
                
                    Mobile App Development
                  </h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>

      <img className="background-image-left" src={colorSharp} alt="Image" />

      <div className=" border-b  border-neutral-800">
        {/* Full-Stack Development Section */}
        <h1 className="mb-8 text-xl md:text-2xl text-center lg:text-center">
          Technologies Used for Full-Stack Development
        </h1>
        <div className="flex flex-wrap items-center justify-center lg:justify-center gap-4 ">
          {/* React */}
          <div className="flex flex-col items-center">
            <div className="p-2 md:p-4 border-4 rounded-2xl border-neutral-800">
              <RiReactjsLine className="text-4xl md:text-6xl text-cyan-400" />
            </div>
            <p className="mt-2 text-center  text-neutral-400">React</p>
          </div>
          {/* Next.js */}
          <div className="flex flex-col items-center">
            <div className="p-2 md:p-4 border-4 rounded-2xl border-neutral-800">
              <TbBrandNextjs className="text-4xl md:text-6xl" />
            </div>
            <p className="mt-2 text-center  text-neutral-400">Next.js</p>
          </div>
          {/* MongoDB */}
          <div className="flex flex-col items-center">
            <div className="p-2 md:p-4 border-4 rounded-2xl border-neutral-800">
              <SiMongodb className="text-4xl md:text-6xl text-green-500" />
            </div>
            <p className="mt-2 text-center  text-neutral-400">MongoDB</p>
          </div>
          
          <div className="flex flex-col items-center ">
            <div className="p-2 md:p-4 border-4 rounded-2xl border-neutral-800">
              <FaNodeJs className="text-4xl md:text-6xl text-green-500" />
            </div>
            <p className="mt-2 text-center  text-neutral-400">Node.js</p>
          </div>
          {/* PostgreSQL */}
          <div className="flex flex-col items-center">
            <div className="p-2 md:p-4 border-4 rounded-2xl border-neutral-800">
              <BiLogoPostgresql className="text-4xl md:text-6xl text-sky-700" />
            </div>
            <p className="mt-2 text-center  text-neutral-400">PostgreSQL</p>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8">
          {/* Graphic Design Section */}
          <div className="w-full lg:w-1/2">
            <h1 className="mb-8  text-xl md:text-2xl text-center lg:text-center">
              For Graphic Design
            </h1>
            <div className="flex flex-wrap items-center justify-center lg:justify-center gap-4">
              {/* Photoshop */}
              <div className="flex flex-col items-center">
                <div className="p-2 md:p-4 border-4 rounded-2xl border-neutral-800">
                  <SiAdobephotoshop className="text-3xl md:text-5xl text-blue-500" />
                </div>
                <p className="mt-2 text-sm md:text-base text-center  text-neutral-400">
                  Photoshop
                </p>
              </div>
              {/* Illustrator */}
              <div className="flex flex-col items-center">
                <div className="p-2 md:p-4 border-4 rounded-2xl border-neutral-800">
                  <SiAdobeillustrator className="text-3xl md:text-5xl text-orange-500" />
                </div>
                <p className="mt-2 text-sm md:text-base text-center  text-neutral-400">
                  Illustrator
                </p>
              </div>
              {/* Premiere */}
              <div className="flex flex-col items-center">
                <div className="p-2 md:p-4 border-4 rounded-2xl border-neutral-800">
                  <SiAdobepremierepro className="text-3xl md:text-5xl text-purple-500" />
                </div>
                <p className="mt-2 text-sm md:text-base text-center  text-neutral-400">
                  Premiere
                </p>
              </div>
              {/* After Effects */}
              <div className="flex flex-col items-center">
                <div className="p-2 md:p-4 border-4 rounded-2xl border-neutral-800">
                  <SiAdobeaftereffects className="text-3xl md:text-5xl text-indigo-500" />
                </div>
                <p className="mt-2 text-sm md:text-base text-center  text-neutral-400">
                  After Et
                </p>
              </div>
              {/* Figma */}
              <div className="flex flex-col items-center">
                <div className="p-2 md:p-4 border-4 rounded-2xl border-neutral-800">
                  <PiFigmaLogoFill className="text-3xl md:text-5xl text-blue-400" />
                </div>
                <p className="mt-2 text-sm md:text-base text-center  text-neutral-400">
                  Figma 
                </p>
              </div>
            </div>
          </div>

          {/* Deep Learning Section */}
          <div className="w-full lg:w-1/2">
            <h1 className="mb-8  text-xl md:text-2xl text-center lg:text-center">
              For Deep Learning
            </h1>
            <div className="flex flex-wrap items-center justify-center lg:justify-center gap-4">
              {/* TensorFlow */}
              <div className="flex flex-col items-center">
                <div className="p-2 md:p-4 border-4 rounded-2xl border-neutral-800">
                  <SiTensorflow className="text-4xl md:text-6xl text-orange-600" />
                </div>
                <p className="mt-2 text-sm md:text-base text-center  text-neutral-400">
                  TensorFlow
                </p>
              </div>
              {/* PyTorch */}
              <div className="flex flex-col items-center">
                <div className="p-2 md:p-4 border-4 rounded-2xl border-neutral-800">
                  <SiPytorch className="text-4xl md:text-6xl text-red-500" />
                </div>
                <p className="mt-2 text-sm md:text-base text-center  text-neutral-400">
                  PyTorch
                </p>
              </div>
              {/* OpenCV */}
              <div className="flex flex-col items-center">
                <div className="p-2 md:p-4 border-4 rounded-2xl border-neutral-800">
                  <SiOpencv className="text-4xl md:text-6xl text-teal-500" />
                </div>
                <p className="mt-2 text-sm md:text-base text-center  text-neutral-400">
                  OpenCV
                </p>
              </div>
              {/* Keras */}
              <div className="flex flex-col items-center">
                <div className="p-2 md:p-4 border-4 rounded-2xl border-neutral-800">
                  <SiKeras className="text-4xl md:text-6xl text-red-400" />
                </div>
                <p className="mt-2 text-sm md:text-base text-center  text-neutral-400">
                  Keras
                </p>
              </div>
              {/* Pandas */}
              <div className="flex flex-col items-center">
                <div className="p-2 md:p-4 border-4 rounded-2xl border-neutral-800">
                  <SiPandas className="text-4xl md:text-6xl text-blue-600" />
                </div>
                <p className="mt-2 text-sm md:text-base text-center  text-neutral-400">
                  Pandas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
