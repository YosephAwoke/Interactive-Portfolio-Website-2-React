import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-orange-300 text-4xl font-bold mb-4 shadow-black">Get In Touch</h2>
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
 