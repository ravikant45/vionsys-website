import Herosection from '@/app/ui/industries/construction/Herosection'
import SecondSection from '@/app/ui/industries/construction/SecondSection'
import React from 'react'
import { Metadata } from 'next'
import { BaseUrl } from '@/app/sitemap'

export const metadata: Metadata = {
  title: "Tech-Driven Construction Solutions ",
  description: "Our tailored services for the construction industry include advanced project management tools, real-time data analytics and cloud-based solutions. We increase operational efficiency, streamline business processes and improve overall collaboration. Our technology solutions support complex construction design, infrastructure and safety management on site. With Vionsys, you can improve productivity, reduce costs, and stay on top of industry trends. Partnering with us to integrate innovative IT solutions drives growth and increases efficiency in your construction business, allowing you to win in a competitive market.",
  alternates: {
    canonical: `${BaseUrl}/industries/construction`
  },
  openGraph: {
    images: "/opangraph.png",
    description: "We deliver sophisticated IT services tailored to the construction industry, including digital project management, IoT integration and data-driven analytics. Our solutions streamline operations, optimize resource management and provide seamless communication between teams. With Vionsys, you can modernize production processes, ensure safety compliance, and optimize project timelines. Find out how our advanced technologies can help you manage complex projects, reduce operating costs and maintain a competitive edge in manufacturing. Use our expertise to maximize success and innovation in your manufacturing process."
  }
};
const page = () => {
  return (
    <div id="gradient" className='pt-8 overflow-hidden'>
      <Herosection/>
      <SecondSection />
    </div>
  )
}

export default page