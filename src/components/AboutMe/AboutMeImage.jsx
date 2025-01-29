const AboutMeImage = () => {
  return (
    <div className="md:mr-12    justify-center h-[400px] w-[300px] relative">
      <div className=" h-[400px] w-[600px] rounded-[100px] absolute overflow-hidden">
        <img
          src="/about2.png"
          alt="about me image"
          className="h-[300px] lg:h-[400px] max-w-screen-sm flex items-start justify-start object-cover "
        />
      </div>
      {/* <div className="h-[450px] w-[250px] bg-cyan-400 bottom-[-30px] left-[-10px] rounded-bl-[120px] rounded-tr-[120px] absolute rounded-br-[20px] rounded-tl-[20px] -z-10"></div> */}
      
    </div>
  );
};

export default AboutMeImage;
