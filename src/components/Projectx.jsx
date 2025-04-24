import { PROJECTS } from "../constants";

const Projectx = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="text-2xl text-gray-300 text-center font-semibold mb-10 mt-10">Take a look at some of my full-stack development projects.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
        
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-10/12">
              <img
                src={project.image}
                width={130}
                height={130}
                alt={project.title}
                className="w-full h-56 md:h-72 lg:h-72 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-110 duration-300 mb-5"
              />
            </div>

            <div className="w-full text-center">
              <h6 className="mb-2 font-semibold text-center text-xl w-full">{project.title}</h6>
              <p className="mb-4 text-lg text-neutral-400 w-full">{project.description}</p>
              <div className="flex flex-wrap items-center justify-center">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block bg-neutral-800 rounded-full px-2 py-1 text-lg font-medium text-purple-400 mr-2 mb-2 transition-transform transform hover:scale-110 duration-300 animate-updown"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projectx;
