

// import { useState, forwardRef } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";




// const Contact = forwardRef((props, ref) => {
//     const formInitialDetails = {
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         message: ''
//     };

//     const [formDetails, setFormDetails] = useState(formInitialDetails);
//     const [buttonText, setButtonText] = useState('Send');
//     const [status, setStatus] = useState({});

//     const onFormUpdate = (category, value) => {
//         setFormDetails({
//             ...formDetails,
//             [category]: value
//         });
//     };

//     const onSubmit = async (event) => {
//         event.preventDefault();
//         setButtonText("Sending...");
//         const formData = new FormData(event.target);

//         formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");

//         const object = Object.fromEntries(formData);
//         const json = JSON.stringify(object);

//         const res = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json"
//             },
//             body: json
//         }).then((res) => res.json());

//         setButtonText("Send");
//         if (res.success) {
//             setStatus({ success: true, message: 'Message sent successfully, Thank you for contacting me.' });
//         } else {
//             setStatus({ success: false, message: 'Something went wrong, please try again later.' });
//         }
//     };

//     return (
//         <section className="contact" id="Contact" ref={ref}>
//             <Container>
//                 <Row className="align-items-center">
//                     <Col md={6}>
//                         <img src={contactImg} alt="Contact Us" />
//                     </Col>
//                     <Col md={6}>
//                         <h2>Get In Touch</h2>
//                         <form onSubmit={onSubmit}>
//                             <Row>
//                                 <Col sm={6} className="px-1">
//                                     <input
//                                         type="text"
//                                         value={formDetails.firstName}
//                                         placeholder="Your Name"
//                                         name="name"
//                                         onChange={(e) => onFormUpdate('firstName', e.target.value)}
//                                     />
//                                 </Col>
//                                 <Col sm={6} className="px-1">
//                                     <input
//                                         type="email"
//                                         value={formDetails.email}
//                                         placeholder="Email Address"
//                                         name="email"
//                                         onChange={(e) => onFormUpdate('email', e.target.value)}
//                                     />
//                                 </Col>
//                                 <Col sm={6} className="px-1">
//                                     <input
//                                         type="tel"
//                                         value={formDetails.phone}
//                                         placeholder="Phone Number"
//                                         name="phone"
//                                         onChange={(e) => onFormUpdate('phone', e.target.value)}
//                                     />
//                                 </Col>
//                                 <Col>
//                                     <textarea
//                                         rows="6"
//                                         value={formDetails.message}
//                                         placeholder="Message"
//                                         name="message"
//                                         onChange={(e) => onFormUpdate('message', e.target.value)}
//                                     ></textarea>
//                                     <button type="submit">
//                                         <span>{buttonText}</span>
//                                     </button>
//                                 </Col>
//                                 {status.message && (
//                                     <Col>
//                                         <p className={status.success === false ? "danger" : "success"}>
//                                             {status.message}
//                                         </p>
//                                     </Col>
//                                 )}
//                             </Row>
//                         </form>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     );
// });
// export default Contact;

// // Add a display name for debugging purposes
// Contact.displayName = "Contact";
