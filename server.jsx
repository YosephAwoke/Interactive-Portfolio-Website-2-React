
import express from "express";
import nodemailer from "nodemailer"; // Correct import
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables at the top

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Use environment variables
    pass: process.env.EMAIL_PASS, // Use environment variables
  },
});

// Verify Transporter
contactEmail.verify((error) => {
  if (error) {
    console.log("Error setting up transporter:", error);
  } else {
    console.log("Ready to Send Emails");
  }
});

// Contact Route
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;

  const mail = {
    from: `${firstName} ${lastName}`,
    to: process.env.EMAIL_USER, // Send to your email
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p>Name: ${firstName} ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.status(200).json({ message: "Message Sent Successfully" });
    }
  });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});






// import express, { Router, json } from "express";
// const router = Router();
// import cors from "cors";
// import createTransport  from "nodemailer";
// import dotenv from "dotenv";


// // server used to send send emails
// const app = express();
// app.use(cors());
// app.use(json());
// app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS);
// dotenv.config();

// const contactEmail = createTransport({
//   service: 'gmail',
//   auth: {
//     user: "yosephawoke88@gmail.com",
//     pass: "onhz xwye zqxw pchv"
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// router.post("/contact", (req, res) => {
//   const name = req.body.firstName + req.body.lastName;
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;
//   const mail = {
//     from: name,
//     to: "yosephawoke88@gmail.com",
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json(error);
//     } else {
//       res.json({ code: 200, status: "Message Sent" });
//     }
//   });
// });