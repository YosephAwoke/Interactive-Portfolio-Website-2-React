import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaPhoneSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="yosephawoke8@gmail.com" Image={MdOutlineMarkEmailRead} />
      <SingleInfo text="+251920409888" Image={FaPhoneSquare} />
      <SingleInfo  text="Addis Ababa, Ethiopia" Image={FaLocationDot}  />
    </div>
  )
}

export default ContactInfo;