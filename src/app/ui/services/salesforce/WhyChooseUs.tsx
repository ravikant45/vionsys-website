import Image from 'next/image';
import React from 'react'

const offerings = [
    {
      title: 'Skilled Professionals',
      description: [
        'We are working professionals who have dignified experience in their own field of interest. Our Salesforce Consulting Companies In USA, Middle East understand the most basic to the advanced needs of the clients.',
        'We go through the client’s entire business plan and then suggest necessary modifications, eliminations, and adoption if any needed. We aim at driving the highest possible extent of business-boosting possibilities toward our clients.',
      ],
      image: '/assets/services/Salesforce/Team Of Professionals.jpg',
      reverse: false,
      alt: 'Team Of Professionals',
    },
    {
      title: 'Expertise Built Over Years',
      description: [
        'We’ve successfully served clients worldwide. We have not left even a single client unsatisfied or being in doubt. We have helped a vast range of clients, and they have rated our services with the best reviews. You can visit our portfolio and testimonial to reach our past clients and know what kind of services we offer.',
      ],
      image: '/assets/services/Salesforce/Years Of Expertise.jpg',
      reverse: true,
      alt: 'Years Of Expertise',
    },
    {
      title: 'Preferred Consulting Partner',
      description: [
        'Our services stand out as some of the best among Salesforce consulting companies in the USA and the Middle East. We charge fee that will easily affordable and much less then what others are charging. We are not just aimed at making money; we are here to make public relations (PR). This can only be possible by delivering satisfaction in terms of offering the best services.',
      ],
      image: '/assets/services/Salesforce/Affordable Consulting Partner.jpg',
      reverse: false,
      alt: 'Affordable Consulting Partner',
    },
    {
        title: 'Guaranteed Satisfaction',
        description: [
          'We deliver Salesforce Consulting services that are both on-time and cost-efficient, with results that matter; we focus on making our clients reach the maximum possible extent of service satisfaction. We have satisfied hundreds of clients, and they are now our regular clients. They directly contact us for any UK Consulting, and the best benefit that we got from serving best is referrals. We have tested the joy of getting satisfactory reviews from our clients, and we never even tempted to change this taste.',
        ],
        image: '/assets/services/Salesforce/Satisfaction Assured.jpg',
        reverse: true,
        alt: 'Satisfaction Assured',
      },
      {
        title: 'Trusted Services for Your Success',
        description: [
          'We believe in delivering on our promises, not making empty ones. We are genuinely serving the businesses with our world-class Salesforce Consulting Services for the last few years. We only commit to what is confident; we gained this confidence by successfully making the business of our clients reach their desired stages. Once we have committed to any achievement, then you can stay assured to get there within the suggested time-frame.',
        ],
        image: '/assets/services/Salesforce/Services You Can Rely Upon.jpg',
        reverse: false,
        alt: 'Services You Can Rely Upon',
      },
      {
        title: 'Premium Quality Services',
        description: [
          "No matter where you are, we challenge you to find a service provider that matches the quality we deliver. We don’t just claim to offer 'Premium Quality Services'—we’ve proven it. Feel free to ask our past clients about our successes and achievements.",
        ],
        image: '/assets/services/Salesforce/Unmatched Quality Services.jpg',
        reverse: true,
        alt: 'Services You Can Rely Upon',
      },
  ];

function WhyChooseUs() {
    return (
      <div id='WhyChooseUs' className="h-full bg-[#1a0c05]">
        <div className='mx-auto px-4 py-16 max-w-6xl'>
        <div className="text-center mb-12">
          {/* <p className="text-white font-medium tracking-wider uppercase text-sm mb-1">WHY US?</p> */}
          <h2 className="text-3xl font-bold text-orange">Why Choose Us</h2>
        </div>
  
        <div className="space-y-24">
          {offerings.map(({ title, description, image, reverse, alt }, index) => (
            <div
              key={index}
              className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}
            >
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold text-orange">{title}</h3>
                {description.map((text, i) => (
                  <p key={i} className="text-gray-200">{text}</p>
                ))}
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
  <div className="relative w-[90vw] md:w-full max-w-md h-[250px] sm:h-[300px] md:h-80 shadow-lg rounded-lg overflow-hidden">
    <Image src={image} alt={alt} fill className="object-contain" />
  </div>
</div>

            </div>
          ))}
        </div>
        </div>
      </div>
    );
}

export default WhyChooseUs
