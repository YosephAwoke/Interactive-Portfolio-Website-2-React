import { Col, } from "react-bootstrap";
// import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Newsletter = () => {
  // const [email, setEmail] = useState('');

  // useEffect(() => {
  //     if (status === 'success') clearFields();
  // }, [status])

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     email &&
  //     email.indexOf("@") > -1 &&
  //     onValidated({
  //         EMAIL: email
  //     })

  // }

  // const clearFields = () => {
  //     setEmail('');
  // }

  const handleDownload = () => {
    // This is where you define the path to your resume file
    const resumeLink = "/resume/Yoseph Awoke Fentie.pdf"; // Replace with actual path
    const link = document.createElement("a");
    link.href = resumeLink;
    link.download = "Yoseph_Awoke_Resume.pdf"; // Name for the downloaded file
    link.click();
  };

  return (
    <Col lg={12}>
      <div >
        <div className="newsletter-bx flex flex-wrap lg:flex-nowrap justify-between gap-">
          
            <h3 className="ml-5 W-full font-semibold text-2xl"> Download My Resume to Know More About Me</h3>
        
          
            <div className="new-email-bx">
              <button type="submit" onClick={handleDownload}>
                Download Resume
              </button>
            </div>
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
