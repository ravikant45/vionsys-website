'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

import AOS from 'aos';
import ServicesTemplateFour from '@/app/ui/services/ServicesTemplateFour'
import React from 'react'

const page: React.FC = () => {
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
            <ServicesTemplateFour />
        </div>
    )
}

export default page