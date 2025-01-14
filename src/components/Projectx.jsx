import { PROJECTS } from "../constants";

const Projectx = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
    
      <div className="">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-5 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400"> {project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-block bg-neutral-900 rounded-full px-2 py-1 text-sm font-medium text-purple-400 mr-2 mb-2"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projectx;
