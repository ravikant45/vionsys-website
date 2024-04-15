'use client';
import AOS from 'aos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import 'aos/dist/aos.css';

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
    <div data-aos="fade-up" className='h-screen'>
      Hello
    </div>
  );
}
