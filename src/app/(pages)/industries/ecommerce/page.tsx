import React from 'react'
import EcomHeroSection from "@/app/ui/industries/eCommerceSector/ecomHeroSection" ;
import EcomOurServices from "@/app/ui/industries/eCommerceSector/ecomOurServices";
import EcomContactUs from '@/app/ui/industries/eCommerceSector/ecomContactUs';
import { Metadata } from 'next';
import { BaseUrl } from '@/app/sitemap';

export const metadata: Metadata = {
  title: " E-Commerce Tech Innovations ",
  description: "We offer sophisticated services tailored to the eCommerce sector, including seamless website development, mobile app integration and advanced cloud solutions Our expertise in data analytics and business intelligence helps you to you gain valuable insights into customer behavior while our security solutions protect against fraud and cyber threats -Can increase in-store productivity, streamline operations, and provide exceptional shopping experiences. Partner with us to drive growth, improve conversion rates, and stay ahead of the competitive eCommerce landscape with innovative technology solutions.",
  alternates: {
    canonical: `${BaseUrl}/industries/ecommerce`
  },
  openGraph: {
    images: "/opangraph.png",
    description: "We provide comprehensive services for the eCommerce segment, such as custom website and mobile app development, platform integration, and complex analytics. Our solutions are designed to enhance user experience, improve productivity, and secure communications. We use advanced fraud prevention tools and cloud-based scalability to help you meet the demands of today’s customers while earning your business. Find out how Vionsys can transform your eCommerce strategy, increase sales and maintain a competitive edge in today’s fast-paced digital marketplace with our expert technology solutions. "
  }
};

const page = () => {
  return (
    <section className='overflow-x-hidden'>
    <EcomHeroSection/>
    <EcomOurServices/>
    <EcomContactUs/>
    </section>
  )
}

export default page;