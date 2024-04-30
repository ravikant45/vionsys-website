import React from 'react';

import Custom from '/public/assets/services/Salesforce/Custom.jpg';
import Customer from '/public/assets/services/Salesforce/Customer.png';
import Emerging from '/public/assets/services/Salesforce/Emerging.jpeg';
import Expansion from '/public/assets/services/Salesforce/Expansion.png';
import Growth from '/public/assets/services/Salesforce/Growth.png';
import IntegrationAI
  from '/public/assets/services/Salesforce/IntegrationAI.jpg';
import Security from '/public/assets/services/Salesforce/Security.jpeg';
import Image from 'next/image';

function Future() {
  return (
    <div className='px-10 py-12 text-center bg-slate-100 pb-10'>
      <h1 className='text-2xl font-bold text-orange text-center py-2'>Companies utilizing Salesforce are poised for favorable future outcomes</h1>
      <p data-aos="fade-right" className='text-lg text-gray1 font-normal'>As a company leveraging Salesforce, it's essential to recognize that your future success hinges on your ability to adapt to evolving market trends, embrace new technologies, and prioritize customer-centric strategies. By remaining agile and fully harnessing the capabilities of the Salesforce platform, you can position yourself for long-term success in an increasingly competitive landscape.</p>

      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        {/* Image Column */}
        <div className="w-[300] h-44 lg:w-1/2 lg:h-[50vh]">
          <Image className="h-full w-full object-cover" src={Growth} alt='' />
        </div>
        {/* Text Column */}
        <div className="max-w-lg bg-white md:max-w-2xl border-2 hover:shadow-md hover:shadow-blue2 md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-28 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          {/* Text Wrapper */}
          <div className="flex flex-col p-7 md:px-2">
            <h2 className="text-xl font-medium uppercase text-indigo-600 lg:text-2xl">Continued Growth</h2>
            <p className="mt-5 text-gray1 text-sm">As cloud-based solutions become more ubiquitous and companies increasingly adopt CRM systems, Salesforce is poised to maintain its growth trajectory. Regular updates and enhancements can further solidify its position in the market, offering users improved efficiency and productivity.</p>
          </div>
        </div>
      </div>


      <div className="relative flex flex-col items-center mx-auto lg:flex-row lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div className="w-full lg:w-1/2">
          <Image className="h-44 lg:h-[50vh] w-full object-cover" src={IntegrationAI} alt='' />
        </div>
        <div className="max-w-lg bg-white md:max-w-2xl border-2 hover:shadow-md hover:shadow-blue2 md:z-5 md:shadow-lg md:absolute md:top-0 md:mt-28 lg:w-3/5 lg:right-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          <div className="flex flex-col p-7 md:px-2">
            <h2 className="text-xl font-medium uppercase text-indigo-600 lg:text-2xl">Artificial Intelligence Integration</h2>
            <p className="mt-5 text-gray1 text-sm">The integration of AI and ML into Salesforce can empower users with predictive analytics and automation capabilities, enabling more informed decision-making and personalized interactions. This trend aligns with the broader industry movement towards data-driven insights and automation.</p>
          </div>
        </div>
      </div>


      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div className="w-[300] h-44 lg:w-1/2 lg:h-[50vh]">
          <Image className="h-full w-full object-cover" src={Expansion} alt='' />
        </div>
        <div className="max-w-lg bg-white md:max-w-2xl border-2 hover:shadow-md hover:shadow-blue2 md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-28 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          <div className="flex flex-col p-7 md:px-2">
            <h2 className="text-xl font-medium uppercase text-indigo-600 lg:text-2xl">Expansion into New Markets</h2>
            <p className="mt-5 text-gray1 text-sm">By diversifying its offerings beyond CRM, Salesforce can cater to a broader range of business needs. Companies that leverage these additional services can potentially streamline their operations and enhance customer experiences across various touchpoints, driving loyalty and satisfaction.</p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center mx-auto lg:flex-row lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div className="w-full lg:w-1/2">
          <Image className="h-44 lg:h-[50vh] w-full object-cover" src={Customer} alt='' />
        </div>
        <div className="max-w-lg bg-white md:max-w-2xl border-2 hover:shadow-md hover:shadow-blue2 md:z-5 md:shadow-lg md:absolute md:top-0 md:mt-28 lg:w-3/5 lg:right-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          <div className="flex flex-col p-7 md:px-2">
            <h2 className="text-xl font-medium uppercase text-indigo-600 lg:text-2xl">Focus on Customer Experience</h2>
            <p className="mt-5 text-gray1 text-sm">In an increasingly competitive landscape, prioritizing customer experience can be a key differentiator for businesses. Salesforce's tools for understanding and engaging with customers can help companies build meaningful relationships, fostering loyalty and advocacy.</p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div className="w-[300] h-44 lg:w-1/2 lg:h-[50vh]">
          <Image className="h-full w-full object-cover" src={Security} alt='' />
        </div>
        <div className="max-w-lg bg-white md:max-w-2xl border-2 hover:shadow-md hover:shadow-blue2 md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-28 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          <div className="flex flex-col p-7 md:px-2">
            <h2 className="text-xl font-medium uppercase text-indigo-600 lg:text-2xl">Data Privacy and Security</h2>
            <p className="mt-5 text-gray1 text-sm">With data privacy regulations becoming more stringent, companies must prioritize robust security measures and compliance strategies. Salesforce users need to ensure that they adhere to regulations like GDPR and CCPA to safeguard customer data and maintain trust.</p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center mx-auto lg:flex-row lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div className="w-full lg:w-1/2">
          <Image className="h-44 lg:h-[50vh] w-full object-cover" src={Emerging} alt='' />
        </div>
        <div className="max-w-lg bg-white md:max-w-2xl border-2 hover:shadow-md hover:shadow-blue2 md:z-5 md:shadow-lg md:absolute md:top-0 md:mt-28 lg:w-3/5 lg:right-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          <div className="flex flex-col p-7 md:px-2">
            <h2 className="text-xl font-medium uppercase text-indigo-600 lg:text-2xl">Integration with Emerging Technologies</h2>
            <p className="mt-5 text-gray1 text-sm">Integrating with emerging technologies like blockchain, IoT, and AR can unlock new opportunities for innovation and differentiation. Companies that embrace these technologies can gain a competitive edge by offering unique solutions and experiences to their customers.</p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
        <div className="w-[300] h-44 lg:w-1/2 lg:h-[50vh]">
          <Image className="h-full w-full object-cover" src={Custom} alt='' />
        </div>
        <div className="max-w-lg bg-white md:max-w-2xl border-2 hover:shadow-md hover:shadow-blue2 md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-28 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          <div className="flex flex-col p-7 md:px-2">
            <h2 className="text-xl font-medium uppercase text-indigo-600 lg:text-2xl">Customization and Flexibility</h2>
            <p className="mt-5 text-gray1 text-sm">Salesforce's customization capabilities enable companies to tailor the platform to their specific needs and workflows. Investing in customizations and integrations can enhance efficiency and agility, allowing businesses to adapt quickly to changing market dynamics and customer demands.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Future;