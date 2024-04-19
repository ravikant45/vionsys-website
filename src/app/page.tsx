'use client';
import AOS from 'aos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Hero from './ui/home/Hero';
import AboutOurCompany from './ui/home/AboutOurCompany';

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
    <div className='pt-20'>
      <Hero />
      <AboutOurCompany />
    </div>
  );
}
