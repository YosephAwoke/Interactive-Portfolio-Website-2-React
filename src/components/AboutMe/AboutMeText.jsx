const AboutMeText = () => {
  return (
    
      <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
        <h2 className="text-6xl text-cyan-400 mb-10">About Me</h2>
        <p className="text-white">
          Experienced in all stages of the creative and development cycle, I
          excel in both programming and graphic design. Proficient in Python,
          React, Kotlin, and Adobe Creative Suite, I bring ideas to life through
          design and code. I thrive in fast-paced environments, consistently
          delivering innovative solutions
        </p>
        <button className="border border-orange round-full py-2 px-4 text-lg flex item-center mt-10 hover:bg-orange-300 transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan  ">
          My Project
        </button>
      </div>
 
  );
};

export default AboutMeText;
