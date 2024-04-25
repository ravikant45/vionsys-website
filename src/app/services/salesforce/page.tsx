import React from 'react';

import SalesforceImg
  from '/public/assets/services/Salesforce/SalesforceImg.jpg';
import Image from 'next/image';

import Cloud from '@/app/ui/salesforce/Cloud';
import Future from '@/app/ui/salesforce/future';
import Provide from '@/app/ui/salesforce/Provide';

const salesforce = () => {
  return (
    <div className='pt-16'>
      <div className='grid overflow-x-hidden md:grid-cols-2 px-6 py-4 grid-cols-1 bg-white justify-items-center items-center'>
        <div className='px-4'>
            <h1 className='text-2xl text-orange font-bold'>Salesforce</h1>
            <h3 className='text-sm py-1 text-gray1 pb-4 italic'>Elevate Your Business with Our Salesforce Services.</h3>
            <p className='text-sm text-black py-8'>Empower your business with our tailored Salesforce services. Streamline operations, boost customer relationships, and drive growth in today's dynamic digital landscape. Let us be your trusted partner in harnessing the full potential of Salesforce.</p>
        </div>
        <div>
            <Image src={SalesforceImg} alt='' width="800" height="800"/>
        </div>
      </div>
      <Future />
      <Cloud />
      <Provide />
    </div>
  )
}

export default salesforce;

