
import AboutMeText from "./AboutMeText";

const AboutMe = () => {
  
  return (
    <div className="flex sm:flex-col md:flex-row gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center">
     
      <div>
        <AboutMeText />
      </div>
    </div>
  );
};

export default AboutMe;
