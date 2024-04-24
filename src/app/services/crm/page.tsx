import React from 'react';

import Image from 'next/image';

import Empower from '@/app/ui/crm/Empower';
import Importance from '@/app/ui/crm/Importance';

import CRM from '../../../../public/assets/services/crm/CRM.png';

function page() {
  return (
    <div className='pt-16'>
      <div className='grid overflow-x-hidden md:grid-cols-2 px-6 py-4 grid-cols-1 bg-slate-100 justify-items-center items-center'>
        <div className='px-4'>
            <h1 className='text-2xl text-orange font-bold'>Customer Relationship Management (CRM)</h1>
            <h3 className='text-sm py-1 text-gray1 pb-4 italic'>Selecting Excellence: Elevate Your CRM Experience with Us.</h3>
            <p className='text-sm text-black py-8'>Discover CRM excellence with our innovative methodology, blending precision and innovation for unparalleled success. Seamlessly integrating technology and data-driven insights, we propel businesses to enduring triumphs and elevate customer journeys. Experience the pinnacle of effective work, meticulously designed for sustained growth and unmatched satisfaction.</p>
        </div>
        <div>
            <Image src={CRM} alt='' width="800" height="800"/>
        </div>
      </div>
      <Empower/>
      <Importance />
    </div>
  )
}

export default page
