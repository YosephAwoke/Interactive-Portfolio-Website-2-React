import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto px-4 items-center justify-center pt-20 "
    >
      <h2 className="text-4xl font-bold text-cyan-500 mb-2 text-center pt-10"> Contact Me</h2>
      <div className="flex justify-between gap-24 bg-gradient-to-r from-[#882962] to-[#5f40e6] via-[#523eac] via-[-5.91%] via-[111.58%]  p-8 rounded-2xl lg:flex-row flex-col md:flex-col bg-transparent">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
