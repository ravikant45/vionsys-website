import React from 'react'
import Hero from '../componets/digitalMarketingUI/Hero'
import ServiceOverview from '../componets/digitalMarketingUI/Overview'
import Features from '../componets/digitalMarketingUI/Features'
import Cta from '../componets/digitalMarketingUI/Cta'

const page = () => {
  return (
    <div>
      <Hero/>
      <ServiceOverview/>
      <Features/>
      <Cta/>
    </div>
  )
}

export default page
