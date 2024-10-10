'use client'
import React, { useState } from 'react'
import Hero from '../componets/CloudComputingUI/Hero';
import ContactUs from '../componets/WebDevelopmentUI/ContactUs';
import ClientsServices from '@/utils/ClientsServices';
import CloudServices from '../componets/CloudComputingUI/CloudServices';
import HowWeWork from '../componets/CloudComputingUI/HowWeWork';
import CloudChooseUs from '../componets/CloudComputingUI/CloudChooseUs';
import CloudCta from '../componets/CloudComputingUI/CloudCta';
import PopUp from '../PopUp';

const page = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='overflow-hidden'>
      <Hero showModal={showModal} setShowModal={setShowModal} />
      <CloudServices showModal={showModal} setShowModal={setShowModal} />
      <HowWeWork />
      <ClientsServices />
      <CloudChooseUs />
      <CloudCta showModal={showModal} setShowModal={setShowModal} />
      <ContactUs />
      <PopUp showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default page;