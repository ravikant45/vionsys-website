import React from 'react';
import { LayoutGrid } from '@/components/ui/layout-grid2';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import CRM from '/public/assets/Home/CRM.png';
import Service from '/public/assets/Home/Service.jpg';
import AI from '/public/assets/Home/AI.jpg';
import Salesforce from '/public/assets/Home/SalesforceImg.jpg';
  
type Card = {
    id: number;
    content: JSX.Element | React.ReactNode | string;
    className: string;
    thumbnail: StaticImageData;
  };

  const SkeletonOne = () => {
    return (
      <div>
      </div>
    );
  };
   
  const SkeletonTwo = () => {
    return (
      <div>
      </div>
    );
  };
  const SkeletonThree = () => {
    return (
      <div>
      </div>
    );
  };
  const SkeletonFour = () => {
    return (
      <div>
      </div>
    );
  };
  
   
  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail: CRM,
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail: Service,
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail: AI,
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail: Salesforce,
    },
  ];

const AboutOurCompany = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 bg-white justify-items-center items-center overflow-x-hidden'>
             <div className="h-[80vh] md:w-[50vw] w-[100vw] col-span-1">
                <LayoutGrid cards={cards} />
             </div>
            <div className='col-span-1 px-5'>
                <h4 data-aos="fade-right" className='font-extrabold text-MainHeading'>About Our Company</h4>
                <h5 data-aos="fade-left" className='text-lg mt-5 text-SubHeading font-bold'>Elevating your business through exemplary IT services is our unwavering passion and commitment.</h5>
                <div data-aos="fade-down" className='text-paragraph mt-5 pb-4'>Vionsys IT Solutions India Pvt. Ltd. is a leading provider of comprehensive IT services including software development, cloud solutions, cybersecurity and IT consulting. With our experienced team, we deliver tailored solutions for businesses, ensuring efficiency, reliability and scalability in the digital age.</div>
                <Link href='/about'>
                <Button data-aos="zoom-in" className='text-lg'>Learn More</Button>
                </Link>
            </div>
        </div>
    )
}

export default AboutOurCompany;