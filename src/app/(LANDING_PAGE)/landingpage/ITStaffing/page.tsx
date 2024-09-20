import React from 'react'
import Hero from '../componets/ITStaffingUI/Hero'
import ChooseUs from '../componets/ITStaffingUI/ChooseUs'
import WhatWeServe from '../componets/ITStaffingUI/WhatWeServe'
import Cta from '../componets/ITStaffingUI/Cta'
import Footer from '@/app/ui/footer/Footer'

const page = () => {
  return (
    <div>
        <Hero />
        <ChooseUs />
        <WhatWeServe />
        <Cta />
        <Footer />
    </div>
  )
}

export default page