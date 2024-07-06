import React from 'react';
import Hero from '../componets/webdevelopmentUI/Hero';
import ServiceOverview from '../componets/webdevelopmentUI/ServiceOverview';
import Features from '../componets/webdevelopmentUI/Features';
import Cta from '../componets/webdevelopmentUI/Cta';


const Page: React.FC = () => {
  return (
    <div>
      <Hero />
      <ServiceOverview/>
      <Features/>
      <Cta/>
    </div>
  );
}

export default Page;

