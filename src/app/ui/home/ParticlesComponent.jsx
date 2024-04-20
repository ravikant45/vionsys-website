'use client';
import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { particles } from '@/config/Particles';
import { loadSlim } from "tsparticles-slim";

import Particles from "react-tsparticles";

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Load the slim version of tsParticles
  }, []);

  // Modify particlesConfig to increase the number of particles
  particles.particles.number.value = 400; // Set the number of particles to 100

  return (
    <Particles
      id="tsparticles"
      options={particles}
      init={particlesInit}
      className="absolute w-full h-screen z-0 bg-transparent overflow-hidden"
    />
  );
};

export default ParticlesComponent;
