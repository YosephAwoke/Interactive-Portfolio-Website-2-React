import { Col, } from "react-bootstrap";
// import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Newsletter = () => {
 

  const handleDownload = () => {
    // This is where you define the path to your resume file
    const resumeLink = "/resume/Yoseph Awoke Fentie.pdf"; // Replace with actual path
    const link = document.createElement("a");
    link.href = resumeLink;
    link.download = "Yoseph_Awoke_Resume.pdf"; // Name for the downloaded file
    link.click();
  };

  return (
    <Col >
      <div className="items-center justify-center flex flex-col">
        
        <div className="newsletter-bx new-email-bx ">
              <h3 className=" flex justify-between items-center font-semibold text-sm lg:text-2xl "> Download My Resume to Know More About Me
              <button className="ml-5" type="submit" onClick={handleDownload}>
                  Download Resume
              </button>
              </h3>
          
            
              
                
        </div>
        
      </div>
       
    </Col>
  );
};

// Define prop types
Newsletter.propTypes = {
  onValidated: PropTypes.func.isRequired,
  status: PropTypes.string,
  message: PropTypes.string,
};

// Define default props (if needed)
Newsletter.defaultProps = {
  status: null,
  message: null,
};
