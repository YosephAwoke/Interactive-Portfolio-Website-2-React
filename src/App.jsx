// import React from "react";
// import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
// import Technologies from "./components/Technologies";
import './App.css';
import ProjectsMade from "./components/ProjectsMade";
import  Footer  from "./components/Footer";
// import { ProjectsMade } from "./components/ProjectsMade";

const App = () => {
  return (
    <div className="overflow-hidden text-neutral-300 antialiased slection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,
      rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        ></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />

        <div id="home">
          <Hero />
        </div>
        <div id="skills">
          <Skills />
        </div>
        
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <ProjectsMade  />
        </div>
        <div >
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
