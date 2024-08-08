import HeroSec from '@/app/ui/industries/health/HeroSec'
import SecondSection from '@/app/ui/industries/health/SecondSection'
import React from 'react'
import { Metadata } from 'next'
import { BaseUrl } from '@/app/sitemap'

export const metadata: Metadata = {
  title: "Healthcare Digital Tech",
  description: "We provide advanced IT services tailored to the healthcare industry, including electronic health record (EHR) systems, telemedicine solutions and data management Our solutions enhance patient care, streamline workflows and ensure that they are law abiding. We protect sensitive information and improve accessibility through robust cybersecurity measures and cloud-based platforms. Partner with Vionsys to implement state-of-the-art technologies that support superior clinical outcomes, operational efficiencies and a seamless healthcare experience. Transform your healthcare strategy and stay on the cutting edge of our innovative IT solutions designed for today’s medical environments.",
  alternates: {
    canonical: `${BaseUrl}/industries/health`
  },
  openGraph: {
    images: "/opangraph.png",
    description: "We provide premier IT solutions for the healthcare industry, including comprehensive EHR systems, telehealth integration, and advanced data analytics. Our technology improves patient care, improves clinical efficiency, and ensures data security and compliance. By leveraging our cloud solutions and cybersecurity expertise, you can streamline operations, improve patient outcomes, and protect critical medical information. Find out how Vionsys can help your healthcare organization achieve operational efficiencies and deliver optimal care with our innovative IT solutions designed for the evolving healthcare industry."
  }
};

const page = () => {
  return (
    <div className='pt-10 overflow-hidden'>
      <HeroSec/>
      <SecondSection/>
    </div>
  )
}

export default page