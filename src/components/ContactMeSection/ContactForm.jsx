import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleMessage = (e) => {
    setMessage(e.target.value);
  }
  

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rq3xr13", "template_p6k7la3", form.current, {
        publicKey: "3QaUexof11dJE9PNj",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message sent successfully!");
          
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan-400 font-bold text-lg">
        {success}
      </p>
      <form
        className="flex flex-col gap-4 py-3  text-white"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-gray-400 bg-opacity-50 px-2 placeholder-opacity-100 placeholder-gray-300"
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-gray-400 bg-opacity-50 px-2 placeholder-opacity-100 placeholder-gray-300"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          type="text"
          cols="50"
          rows="9"
          placeholder="Message"
          required
          className="rounded-lg bg-gray-400 bg-opacity-50 p-2 placeholder-opacity-100 placeholder-gray-300"
          value={message}
          onChange={handleMessage}
        ></textarea>
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan-400 text-white h-12 font-bold text-xl hover:bg-cyan-800 bg-cyan-500 transition-all duration-500 "
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
