"use client"
import React, { StrictMode, useState } from 'react';
import Hero from '../componets/SoftwareDevelopmentUI/Hero'
import ServiceSolutions from '../componets/SoftwareDevelopmentUI/ServiceSolutions';
import WhatWeServe from '../componets/ITStaffingUI/WhatWeServe'
import CTA from '../componets/SoftwareDevelopmentUI/CTA';
import Banner from '../componets/SoftwareDevelopmentUI/Banner';
import ChooseUs from '../componets/SoftwareDevelopmentUI/ChooseUs';
import ContactUs from '../componets/WebDevelopmentUI/ContactUs';
import InfiniteMovingCardsDemo from '@/app/ui/home/Clients';
import Technologies from '../componets/SoftwareDevelopmentUI/Technologies';
const SoftwareDevelopment = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div id='gradient' className='overflow-x-hidden' >
        <Hero showModal={showModal} setShowModal={setShowModal}/>
        <ServiceSolutions />
        <InfiniteMovingCardsDemo />
        <WhatWeServe />
        <Banner />
        <Technologies/>
        <ChooseUs />
        <CTA />
        <ContactUs/>
    </div>
  )
}

export default SoftwareDevelopment