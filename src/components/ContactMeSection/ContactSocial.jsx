
import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial Icon={FaGithub} link="https://github.com/YosephAwoke" />
      <SingleContactSocial Icon={FaLinkedin} link="https://www.linkedin.com/in/yosephawoke/" /> 
      <SingleContactSocial Icon={FaInstagram} link="https://www.instagram.com/yoseph.awoke/" /> 
     
    </div>
  )
}

export default ContactSocial;