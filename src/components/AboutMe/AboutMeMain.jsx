import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";

const AboutMeMain = () => {
  
  return (
    <div className="flex sm:flex-col md:flex-row gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center">
      <div>
        <AboutMeImage />
      </div>
      <div>
        <AboutMeText />
      </div>
    </div>
  );
};

export default AboutMeMain;
