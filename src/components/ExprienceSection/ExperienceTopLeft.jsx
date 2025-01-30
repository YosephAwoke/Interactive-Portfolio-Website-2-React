import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange-500 font-bold uppercase text-3xl font-special text-center">Since 2018</p>
      <div className="flex justify-center  items-center gap-4">
        <ExperienceInfo number="6" text="Years of Experience" />
        <p className="font-bold text-6xl text-lightBlue-300">-</p>
        <ExperienceInfo text="More than" />
        <ExperienceInfo number="20" text="Projects Completed" />
      </div>
      <p className="text-center text-white text-sm">
        With over 5 years of expereience of building dynamic and user-friendly Web
        applications and also becoming proficient as Graphics Designer
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
