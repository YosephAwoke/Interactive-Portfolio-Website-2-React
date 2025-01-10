import "./App.css";
import { useState, useEffect, useRef } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Skills from "./components/Skills";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import ProjectsMade from "./components/ProjectsMade";
import Contact from "./components/Contact";
import Footer from "./components/Footer";




const App = () => {

  const contactRef = useRef(null);
  const [contactLoaded, setContactLoaded] = useState(false); // New state variable

  useEffect(() => {
      // Check if contactRef is attached after every render
      if (contactRef.current) {
        setContactLoaded(true);
      }
  });

  const scrollToContact = () => {
      if (contactLoaded) { // Only scroll if the ref is attached
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
      }
  };

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
          <Hero scrollToContact={scrollToContact}/>
        </div>
        <div id="skills">
          <Technologies />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <ProjectsMade />
        </div>
        <div  >
          <Contact ref={contactRef} />

        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
