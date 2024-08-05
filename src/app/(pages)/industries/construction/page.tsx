import Herosection from '@/app/ui/industries/construction/Herosection'
import SecondSection from '@/app/ui/industries/construction/SecondSection'
import React from 'react'

const page = () => {
  return (
    <div id="gradient" className='pt-8 overflow-hidden'>
      <Herosection/>
      <SecondSection />
    </div>
  )
}

export default page