import React from 'react'
import EcomHeroSection from "@/app/ui/industries/eCommerceSector/ecomHeroSection" ;
import EcomOurServices from "@/app/ui/industries/eCommerceSector/ecomOurServices";
import EcomContactUs from '@/app/ui/industries/eCommerceSector/ecomContactUs';
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