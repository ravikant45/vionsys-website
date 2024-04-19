'use client';
import React, {
  useEffect,
  useState,
} from 'react';

import { loadFull } from 'tsparticles';

import { particles } from '@/config/Particles';
import { Container } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  if (!init) {
    return <></>; // Return nothing until initialization is complete
  }

  // Increase the number of particles by adjusting the value property
  const increasedParticles = {
    ...particles,
    particles: {
      ...particles.particles,
      number: {
        ...particles?.particles?.number,
        value: 100, // Adjust the value to increase the number of particles
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={increasedParticles}
    />
  );
};

export default ParticlesComponent;
