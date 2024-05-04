import React from 'react';

import { LayoutGrid } from '@/components/ui/layout-grid';

import Business_Systems
  from '../../../../public/assets/Home/Business-Systems.jpg';
import Data_Security from '../../../../public/assets/Home/Data-Security.jpg';
import Network_Monitoring
  from '../../../../public/assets/Home/Network-Monitoring-2.jpg';
import Network_Security
  from '../../../../public/assets/Home/Network-Security.jpg';
import Business_System
  from '../../../../public/assets/Home/Protect_Business.jpeg';
import Small_Business
  from '../../../../public/assets/Home/Small-Business-1.jpeg';

const SkeletonOne = () => {
  return (
    <div>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-2xl text-white">Network Security</p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-2xl text-white">Data Security</p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-2xl text-white bg-black opacity-60">Small Business Owners</p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-2xl text-white bg-black opacity-60">Run your Business</p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold text-2xl text-white bg-black opacity-60">Network Monitoring</p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail: Business_System,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: Network_Security,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: Data_Security,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail: Small_Business,
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1",
    thumbnail: Business_Systems,
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail: Network_Monitoring,
  },
];

function TrustUs() {
  return (
    <div className='grid md:grid-cols-3 px-2 py-4 grid-cols-1 justify-items-center items-center'>
      <div className="h-screen w-full col-span-2 md:order-1 order-2">
        <LayoutGrid cards={cards} />
      </div>
      <div className='order-1 md:order-2'>
        <p data-aos="fade-left" className='underline font-extrabold text-MainHeading'>Why trust us?</p>
        <p data-aos="fade-right" className='text-SubHeading mt-5 font-bold'>Achieve digital transformation for your retail business services</p>
        <p data-aos="zoom-out" className='text-paragraph mt-5 mb-5'>Trust on us for your IT requirements, backed by our track record of successful projects, commitment to data security, adherence to high service quality standards, and dedication to fostering enduring client partnerships founded on trust and reliability.</p>
      </div>
    </div>
  )
}

export default TrustUs
