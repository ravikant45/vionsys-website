import Cta from '@/app/ui/industries/Bankingservice/Cta'
import Hero from '@/app/ui/industries/Bankingservice/Hero'
import Ourservice from '@/app/ui/industries/Bankingservice/Ourservice'
import React from 'react'
import { Metadata } from 'next'
import { BaseUrl } from '@/app/sitemap'

export const metadata: Metadata = {
  title: "Secure IT for Banking Sector",
  description: "Our comprehensive banking services combine sophisticated technologies including AI, blockchain and cloud solutions to increase efficiency and security. We specialize in digital banking transformation, risk management, fraud detection and customer experience optimization. Our tailor-made solutions help you comply with regulations, simplify processes and provide simple, secure transactions. With Vionys, your bank can compete in a rapidly growing economic environment because deliver innovative banking services that enhance growth, improve customer satisfaction, and provide the agility needed to adapt to ever-changing market demands.",
  alternates: {
    canonical: `${BaseUrl}/industries/banking`
  },
  openGraph: {
    images: "/opangraph.png",
    description: "Our expertise in the banking industry includes robust cybersecurity measures, AI-driven analytics and digital transformation solutions that increase operational efficiency. From mobile banking solutions to advanced fraud detection, we provide customized solutions to meet your organization's unique needs Ensure compliance, strengthen customer engagement, and you generate innovation with our cutting-edge technology. Count on Vionsys to provide seamless integration and support as you navigate the complexities of the banking industry. Empower your bank to succeed in a digital-first world and offer exceptional services to your customers. "
  }
};
const page = () => {
  return (
    <div className='pt-18 overflow-x-hidden'>
      <Hero />
      <Ourservice />
      <Cta />
    </div> 
  )
}

export default page