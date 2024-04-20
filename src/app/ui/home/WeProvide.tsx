import React from 'react';

import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import Link from 'next/link';

function WeProvide() {

  const testimonials = [
    {
      name: "Software Development",
      description: "Software development is the creation of computer programs using coding and development methodologies to meet specific user needs, improving efficiency and enabling digital innovation.",
      button: <Link href="/services/softwareDevelopment">Read More</Link>,
    },
    {
      name: "Web Development",
      description: "Web development involves designing, coding, and building websites or web applications, utilizing technologies like HTML, CSS, JavaScript, and backend frameworks.",
      button: <Link href="/services/webDevelopment">Read More</Link>,
    },
    {
      name: "Cloud Computing",
      description: "Cloud computing refers to the delivery of on-demand computing resources, such as storage, servers, and software, over the internet for increased scalability and flexibility.",
      button: <Link href="/services/cloudComputing">Read More</Link>,
    },
  ];
  const tests = [
    {
      name: "Artificial Intelligence",
      description: "AI, or Artificial Intelligence, is a field of computer science that focuses on creating intelligent machines capable of mimicking human behavior.",
      button: <Link href="/services/aiAndIntelligence">Read More</Link>,
    },
    {
      name: "DevOps",
      description: "DevOps combines software development (Dev) and IT operations (Ops) to improve collaboration, efficiency, and automation in the software delivery process.",
      button: <Link href="/services/devOps">Read More</Link>,
    },
    {
      name: "Testing and QA",
      description: "Testing and QA (Quality Assurance) involves systematically evaluating software to ensure it meets quality standards, functions correctly, and meets user requirements.",
      button: <Link href="/services/testingAndQa">Read More</Link>,
    },
  ]
  return (
    <div className='z-0'>
      <div className='pl-24'>
        <p className='underline font-semibold text-xl mt-7 text-orange'>What we provide</p>
        <h1 className='text-3xl mt-5 font-bold'>IT Solutions</h1>
      </div>
      <div className="py-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
        <InfiniteMovingCards
          items={tests}
          direction="left"
          speed="normal"
        />
      </div>
    </div>
  )
}

export default WeProvide;