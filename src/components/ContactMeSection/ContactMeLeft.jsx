import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div>
      <div>
        <h2 className="text-orange-400 text-4xl mb-4">Get In Touch</h2>
        <p className="text-white">
          Feel free to reach out if you&apos;d like to collaborate
          <br />
          you are just a few clicks away!
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
