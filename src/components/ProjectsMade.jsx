import { useState } from "react";
import TrackVisibility from "react-on-screen";
import Projectx from "./Projectx";

const ProjectsMade = () => {
  const [activeTab, setActiveTab] = useState("first");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };
  
  const handleClosePopup = () => {
    setSelectedImage(null);
  };
  
  const renderContent = () => {
      switch (activeTab) {
        case "first":
          return (
            <div className="text-white">
              <Projectx />
            </div>
          );
        case "second":
          return (
          <div className="text-white">
            <p className="mb-6 text-xl text-center font-semibold">
              Here are some of my creative graphic design projects.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
          {
            id: 1,
            imgSrc: "../projects/graphics/Flyer for Telegram Channel v2.jpg",
            description: "Project 1 Description",
          },
          {
            id: 2,
            imgSrc: "../projects/project-2.jpg",
            description: "Project 2 Description",
          },
          {
            id: 3,
            imgSrc: "../projects/project-3.jpg",
            description: "Project 3 Description",
          },
          {
            id: 4,
            imgSrc: "../projects/project-4.jpg",
            description: "Project 4 Description",
          },
          {
            id: 5,
            imgSrc: "../projects/project-1.jpg",
            description: "Project 5 Description",
          },
          {
            id: 6,
            imgSrc: "../projects/project-2.jpg",
            description: "Project 6 Description",
          },
              ].map((project) => (
          <div key={project.id} className="relative group">
            <img
              src={project.imgSrc}
              alt={`Graphic Project ${project.id}`}
              className="w-11/12 h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105 cursor-pointer"
              onClick={() => handleImageClick(project.imgSrc)}
            />
            <div className="w-11/12 h-full absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-white text-lg font-semibold text-center px-4">
                {project.description}
              </p>
            </div>
          </div>
              ))}
            </div>

            {selectedImage && (
              <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleClosePopup}
              >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected Graphic"
              className="max-w-full max-h-full rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={handleClosePopup}
            >
              &times;
            </button>
          </div>
              </div>
            )}
          </div>
        );
      case "third":
        return (
          <div className="text-white">
            <p className="mb-6 text-xl text-center font-semibold">
              Dive into groundbreaking deep learning projects that demonstrate cutting-edge AI advancements.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
          {
            id: 1,
            imgSrc: "../projects/project-2.jpg",
            title: "Deep Learning Based Image Classification and Information App for Ethiopian Traditional Medicinal Plants (ETMPs)",
            description: "This pioneering project introduces a novel dataset and preprocessing techniques for Ethiopian Traditional Medicinal Plants (ETMPs). It leverages transfer learning and fine-tuning to train a robust model, enabling users to classify plants and access detailed information by simply taking a picture. The app is deployed across web and mobile platforms for seamless accessibility.",
            techs: ["Python", "TensorFlow", "Keras", "React", "Node.js", "MongoDB", "Kotlin"],
          },
          {
            id: 2,
            imgSrc: "../projects/project-2.jpg",
            title: "AI-Powered Image Recognition Project for Ethiopian Historical Artifacts",
            description: "An advanced image recognition system designed to identify Ethiopian historical artifacts using cutting-edge deep learning techniques. This project pushes the boundaries of computer vision and cultural preservation. The Project also includes a web and mobile app that allows users to explore and learn about Ethiopian history and culture.  ",
            techs: ["Python",  "OpenCV", "TensorFlow", "Keras", "React", "Node.js", "MongoDB", "Kotlin"],
          },
          {
            id: 3,
            imgSrc: "../projects/project-2.jpg",
            title: "CNN based model for detection of COVID-19 from Chest X-ray images",
            description: "A deep learning project that uses Convolutional Neural Networks (CNNs) to detect COVID-19 from chest X-ray images. The model is trained on a large dataset of X-ray images and achieves high accuracy in identifying COVID-19 cases. This project is a valuable tool for healthcare professionals and researchers in the fight against the pandemic.",
            techs: ["Python", "NLTK", "Transformers", "React", "Node.js", "MongoDB", "Kotlin"],
          },
          
              ].map((project) => (
          <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech, index) => (
                <span
            key={index}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-base font-semibold py-1 px-3 rounded-full"
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
      default:
        return null;
    }
  };

  return (
    <section className="w-full pt-32 " id="Projects">
      <div className="container mx-auto px-4">
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={`text-center ${
                isVisible ? "animate__animated animate__slideInUp" : ""
              }`}
            >
              <h2 className="text-4xl md:text-4xl  text-cyan-400">Projects</h2>
              <p className="text-gray-400 text-lg leading-relaxed mt-6 mb-10">
                Experienced in all stages of the creative and development cycle,
                I excel in both programming and graphic design. Proficient in
                Python, React, Kotlin, and Adobe Creative Suite, I bring ideas
                to life through design and code. I thrive in fast-paced
                environments, consistently delivering innovative solutions.
              </p>
            </div>
          )}
        </TrackVisibility>
        <div className="flex lg:ml-14 lg:mr-14 justify-center mb-10 bg-white/10 rounded-full overflow-hidden border border-white border-opacity-50">
          {["Full-Stack Development", "Graphic Design", "Deep Learning"].map(
            (tabName, index) => {
              const key = ["first", "second", "third"][index];
              return (
                <button
                  key={key}
                  className={`flex-1 py-4 text-white text-sm lg:text-xl font-medium text-center transition duration-300 ${
                    activeTab === key
                      ? "bg-gradient-to-r from-pink-500 to-purple-600"
                      : "hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600"
                  }`}
                  onClick={() => setActiveTab(key)}
                >
                  {tabName}
                </button>
              );
            }
          )}
        </div>
        <div className="mt-10">{renderContent()}</div>
      </div>
    </section>
  );
};

export default ProjectsMade;
