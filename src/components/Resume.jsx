// import { Alert, Col, Row } from "react-bootstrap";
// import { useState, useEffect } from "react";
// import "../App.css";

// export const Resume = ({ onValidated, status, message }) => {
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     if (status === "success") clearFields();
//   }, [status]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     email &&
//       email.indexOf("@") > -1 &&
//       onValidated({
//         EMAIL: email,
//       });
//   };

//   const clearFields = () => {
//     setEmail("");
//   };

//   const handleDownload = () => {
//     // This is where you define the path to your resume file
//     const resumeLink = "/resume/Yoseph Awoke Fentie.pdf"; // Replace with actual path
//     const link = document.createElement("a");
//     link.href = resumeLink;
//     link.download = "Yoseph_Awoke_Resume.pdf"; // Name for the downloaded file
//     link.click();
//   };

//   return (
//     <Col lg={12}>
//       <div className="newsletter-bx">
//         <Row>
//           <Col lg={12} md={6} xl={5}>
//             <h3> Download My Resume to Know More About Me</h3>
//             {status === "sending" && <Alert>Downloading...</Alert>}
//             {status === "error" && <Alert variant="danger">{message}</Alert>}
//             {status === "success" && <Alert variant="success">{message}</Alert>}
//           </Col>
//           <Col md={6} xl={7}>
//             <form onSubmit={handleSubmit}>
//               <div className="new-email-bx">
//                 <input
//                   value={email}
//                   type="email"
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Email Address"
//                 />
//                 <button type="submit">Submit</button>
//               </div>
//             </form>
//           </Col>
//           <Col md={6} xl={7}>
//             <div className="new-email-bx">
//               <button type="submit" onClick={handleDownload}>
//                 Download Resume
//               </button>
//             </div>
//           </Col>
//         </Row>
//       </div>
//     </Col>
//   );
// };


