import { useState } from "react";

const AboutMeText = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close the menu after clicking
  };

  return (
    <div className="flex flex items-center justify-center flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-5xl text-cyan-400 mb-10 ">About Me</h2>
      <p className="text-white text-lg">
      I am Yoseph Awoke Fentie, a passionate and experienced Full-Stack Developer and Graphic Designer with a strong background in React, Node.js, and deep learning. With expertise in MERN stack development, TensorFlow-based AI projects, and UI/UX design, I specialize in building innovative web and mobile applications. I have successfully led projects from data collection and model training to deployment, creating intelligent solutions for real-world challenges. Currently, I work as a Senior ICT Expert at the Prime Minister’s Office of Ethiopia (Unity Park), handling various technical tasks, including web and mobile app development, graphic design, and ERP-related projects. Additionally, I freelance in website development, mobile apps, and branding design, helping businesses establish a strong digital presence. I am always eager to learn, innovate, and collaborate on impactful technology solutions.


      </p>
      <button className="border border-orange-400 rounded-full py-2 px-4 text-lg flex items-center mt-10  mb-10 hover:bg-orange-500 transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan-300" onClick={() => scrollToSection("projects")}>
        My Project
      </button>
      
    </div>
  );
};

export default AboutMeText; 
