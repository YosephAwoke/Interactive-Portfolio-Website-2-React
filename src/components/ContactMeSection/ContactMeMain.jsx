import ContactMeLeft from "./ContactMeLeft"
import ContactMeRight from "./ContactMeRight"


const ContactMeMain = () => {
  return (
    <div id="contact" className="max-w-[1200px] mx-auto px-4 items-center justify-center mt-[100px]">
      <h2 className="text-6xl text-cyan-500 mb-10 text-center"> Contact Me</h2>
        <div className="flex justify-between gap-24 bg-gradient-to-r from-[#882962] to-[#5f40e6] via-[#523eac] via-[-5.91%] via-[111.58%]  p-8 rounded-2xl lg:flex-row sm:flex-col">

          <ContactMeLeft />
          <ContactMeRight />
        </div>
      
    </div>
  )
}

export default ContactMeMain;