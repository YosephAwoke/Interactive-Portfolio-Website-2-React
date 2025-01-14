
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine); // Initialize the tsParticles engine
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          image: "url('/path-to-your-background-image.jpg')", // Add your background image
          position: "center",
          size: "cover",
          repeat: "no-repeat",
        },
        particles: {
          number: {
            value: 80, // Number of particles
            density: {
              enable: true,
              value_area: 800, // Area density
            },
          },
          color: {
            value: "#ffffff", // Particle color
          },
          shape: {
            type: "circle", // Particle shape
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 2, // Movement speed
            direction: "none", // Particle direction
            random: false,
            straight: false,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse", // Effect on hover
            },
            onclick: {
              enable: true,
              mode: "push", // Effect on click
            },
          },
        },
        detectRetina: true, // Adjust for high DPI displays
      }}
    />
  );
};

export default ParticleBackground;
