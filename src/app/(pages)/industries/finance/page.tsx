import Herosection from '@/app/ui/industries/finance/Herosection'
import SecondSec from '@/app/ui/industries/finance/SecondSec'
import React from 'react'
import { Metadata } from 'next'
import { BaseUrl } from '@/app/sitemap'

export const metadata : Metadata= {
  title:"Advanced IT for Finance Sector",
  description:"Our tailored IT services for the financial industry include advanced data analytics, secure cloud computing and AI-driven risk management. Increase productivity, compliance and customer satisfaction with innovative solutions designed to meet your specific needs. Whether you want to modernize an estate plan or implement robust security measures, our experts are here to help you stay ahead in the competitive financial environment. Explore easy integration and development opportunities with us",
  alternates: {
    canonical: `${BaseUrl}/industries/finance`
  },
  openGraph: {
    images: "/opangraph.png",
    description: "We provide state-of-the-art IT solutions such as AI-powered fraud detection, real-time data analytics, and secure cloud infrastructure. Our customized processes increase operational efficiency and ensure compliance, helping you deliver an exceptional customer experience. Compete with our innovative solutions tailored to your unique needs. Trust Vionsys to transform your financial operations and embrace the future of technology with confidence and success. "
  }
};


const page = () => {
  return (
    <div className='pt-10 overflow-hidden'>
      <Herosection/>
      <SecondSec />
    </div>
  )
}

export default page