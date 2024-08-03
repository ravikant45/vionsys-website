import Cta from '@/app/ui/industries/Bankingservice/Cta'
import Hero from '@/app/ui/industries/Bankingservice/Hero'
import Ourservice from '@/app/ui/industries/Bankingservice/Ourservice'
import React from 'react'

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