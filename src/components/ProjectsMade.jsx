import { useState } from "react";
import TrackVisibility from "react-on-screen";
import Projectx from "./Projectx";

const ProjectsMade = () => {
  const [activeTab, setActiveTab] = useState("first");

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
            <h3 className="text-xl font-semibold mb-4">Graphic Design Projects</h3>
            <p>Here are some of my creative graphic design projects.</p>
          </div>
        );
      case "third":
        return (
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-4">Deep Learning Projects</h3>
            <p>These are some innovative deep learning projects.</p>
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
              <h2 className="text-xl md:text-3xl">Projects</h2>
              <p className="text-gray-400 text-lg leading-relaxed mt-6 mb-10">
                Experienced in all stages of the creative and development cycle, I excel in both programming and graphic design. Proficient in Python, React, Kotlin, and Adobe Creative Suite, I bring ideas to life through design and code. I thrive in fast-paced environments, consistently delivering innovative solutions.
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
