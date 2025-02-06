// import { EXPERIENCES } from "../constants";
import ExperienceRoute from "./ExprienceSection/ExperienceRoute";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pt-8">
      <ExperienceRoute />
      {/* <h1 className="my-10 text-center text-4xl text-cyan-400">Experience</h1> */}
      {/* <div className="">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-neutral-400"> {experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
                <p className="mb-4 text-neutral-400">{experience.description}</p>
                {experience.technologies.map((tech, index) => (
                  <span key={index} className="inline-block bg-neutral-800 rounded-full px-2 py-1 text-sm font-medium text-purple-400 mr-2 mb-2">
                    {tech}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Experience;
