// src/Components/Particles.js
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="particle-wrapper">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: { value: "transparent" },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 80, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#00ffe1" },
            links: {
              color: "#00ffe1",
              distance: 120,
              enable: true,
              opacity: 0.5,
              width: 1.5,
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              outModes: { default: "bounce" },
            },
            number: {
              value: 90,
              density: {
                enable: true,
                area: 800,
              },
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 4 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;
