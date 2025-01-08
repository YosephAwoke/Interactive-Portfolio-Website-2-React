import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import Technologies from "./Technologies";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

      return(

        <section className="skill" id="Skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2 className="text-xl md:text-3xl">Skills</h2>
                        
                            <p className="text-sm md:text-base">Experienced in all stages of the creative and development cycle, I excel in both programming and graphic design. Proficient in Python, React, Kotlin, and Adobe Creative Suite, I bring ideas to life through design and code. I thrive in fast-paced environments, consistently delivering innovative solutions.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item"> 
                                    <img src={meter1} alt="Image0"/>
                                    <h5 className="text-sm md:text-base"> Full Stack Development</h5>
                                </div>
                                <div className="item"> 
                                    <img src={meter2} alt="Image2"/>
                                    <h5 className="text-sm md:text-base"> Graphic Design</h5>
                                </div>
                                <div className="item"> 
                                    <img src={meter3} alt="Image3"/>
                                    <h5 className="text-sm md:text-base"> Deep Learning</h5>
                                </div>
                                <div className="item"> 
                                    <img src={meter3} alt="Image4"/>
                                    <h5 className="text-sm md:text-base"> Mobile App Development</h5>
                                </div>
                            </Carousel>
                        </div> 

                                    
                    </Col>
                    
                </Row>
            </Container>
            <div> <Technologies /></div>  
            <img className="background-image-left" src={colorSharp} alt="Image"/>
        </section>

         

      );


}