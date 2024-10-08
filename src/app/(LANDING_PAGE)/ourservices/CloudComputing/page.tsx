'use client'
import React, { useState } from 'react'
import Hero from '../componets/CloudComputingUI/Hero';
import ContactUs from '../componets/WebDevelopmentUI/ContactUs';
import ClientsServices from '@/utils/ClientsServices';
import CloudServices from '../componets/CloudComputingUI/CloudServices';
import HowWeWork from '../componets/CloudComputingUI/HowWeWork';
import CloudChooseUs from '../componets/CloudComputingUI/CloudChooseUs';
import CloudCta from '../componets/CloudComputingUI/CloudCta';

const page = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='overflow-hidden'>
      <Hero showModal={showModal} setShowModal={setShowModal} />
      <CloudServices />
      <HowWeWork />
      <ClientsServices />
      <CloudChooseUs />
      <CloudCta />
      <ContactUs />
    </div>
  )
}

export default page;