'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

import AOS from 'aos';

import ThreeDCard from './ui/about/ThreeDCard';
import AboutOurCompany from './ui/home/AboutOurCompany';
import ChooseUs from './ui/home/ChooseUs';
import Count from './ui/home/Count';
import Hero from './ui/home/Hero';
import OurClients from './ui/home/OurClients';
import TrustUs from './ui/home/TrustUs';
import WeProvide from './ui/home/WeProvide';
import WorkWithUs from './ui/home/WorkWithUs';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: 'ease-in-sine',
      offset: 100,
      delay: 10,
    });
    AOS.refresh();
  }, [])
  return (
    <div className='pt-16 overflow-x-hidden'>
      <Hero />
      <Count />
      <AboutOurCompany />
      <ThreeDCard />
      <OurClients/>
      <WeProvide />
      <ChooseUs />
      <TrustUs />
      <WorkWithUs />
    </div>
  );
}
