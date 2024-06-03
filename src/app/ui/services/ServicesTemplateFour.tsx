import Image from 'next/image';
import React from 'react';
import AnnounceMentImage from "/public/assets/services/DigitalMarketing/digitalMarketingAnnouncement.jpg";
import SeoImage from "/public/assets/services/DigitalMarketing/seo.jpg";
import SocialMediaImage from "/public/assets/services/DigitalMarketing/socialMediaAllInOne.png";
import EmailMarketingImage from "/public/assets/services/DigitalMarketing/emailMarketing.png";
import ContentMarketingImage from "/public/assets/services/DigitalMarketing/contentMarketing.png";
import ScheduleMeetAndContactCTA from '@/utils/ScheduleMeetAndContactCTA';

const ServicesTemplateFour: React.FC = () => {
    return (
        <main>
            {/* First section */}
            <section className='w-[100vw] md:h-screen mmd:h-[70vh] ssm:[60vh] h-[50vh]'>
                <div className='w-full h-full relative bg-black'>
                    <Image src={AnnounceMentImage} alt="" className='w-full h-full md:opacity-60 opacity-30 z-0' />
                    <div className='bg-transparent z-10 text-white absolute top-0  h-full flex flex-col justify-center items-end w-full px-4'>
                        <div className='md:w-[43%] w-full flex flex-col gap-2'>
                            <h3 data-aos="fade-left" className='font-bold md:text-3xl text-lg'>Integrated Digital Marketing Services</h3>
                            <p data-aos="fade-right" className='text-sm'>Whether you are a small business or a large corporation, we are equipped to boost your digital marketing success. What sets us apart in India's digital marketing landscape is our commitment to staying ahead of trends. Alongside traditional services like SEO and PPC, we excel in social media, email and content marketing. With our innovative strategies, we're ready to enhance your online presence and drive results.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Second section (search Engine optimization)*/}
            <section className='w-[100vw] h-auto bg-black'>
                <div className='w-full h-full grid md:grid-cols-3 justify-center items-center grid-cols-1 bg-[#fbda4b] md:py-2 py-4'>
                    <div className='col-span-2  z-10 text-black  top-0  h-full flex flex-col justify-center items-start w-full md:px-6 px-4'>
                        <div className='w-full flex flex-col gap-2'>
                            <h3 data-aos="fade-left" className='font-bold md:text-3xl text-lg'>Search Engine Optimization (SEO)</h3>
                            <p data-aos="fade-right" className='text-base'>In the realm of digital marketing, our SEO service is your gateway to enhanced online visibility and sustainable growth. Leveraging cutting-edge strategies and meticulous attention to detail, we optimize your website to secure higher rankings on search engine results pages. Through comprehensive keyword research, on-page optimization and strategic link-building, we propel your brand to the forefront of search engine algorithms. Our dedicated team of experts is committed to delivering tangible results, driving targeted traffic and maximizing your ROI. With our tailored approach and continuous refinement, we ensure that your online presence remains competitive and adaptable in the ever-evolving landscape of search engine optimization. Trust us to navigate the complexities of SEO and unlock the full potential of your digital marketing efforts.</p>
                        </div>
                    </div>
                    <Image data-aos="zoom-in" src={SeoImage} alt="" className='col-span-1  z-0' />
                </div>
            </section>

            {/* Social media marketing */}
            <section className='w-[100vw] h-auto bg-[#d7a38b]'>
                <div className='grid md:grid-cols-3 grid-cols-1 justify-center items-center py-2'>
                    <Image data-aos="zoom-out" src={SocialMediaImage} alt="" className='md:w-[500px] md:h-[500px]' />
                    <div className='col-span-2 flex flex-col text-white gap-4 px-4'>
                        <h3 data-aos="fade-left" className='font-bold md:text-3xl text-lg'>Social Media Marketing</h3>
                        <p data-aos="fade-right" className='text-base'>
                            In the dynamic realm of digital marketing, our Social Media Marketing (SMM) service is your key to cultivating a vibrant online presence and fostering meaningful connections with your target audience. Through innovative strategies and compelling content, we harness the power of social media platforms to amplify your brand's message and drive engagement. From crafting engaging posts to managing ad campaigns and analyzing performance metrics, our dedicated team of SMM experts is committed to maximizing your brand's reach and impact. With a tailored approach and a keen understanding of emerging trends, we ensure that your social media presence remains relevant, authentic and impactful. Trust us to elevate your brand's visibility and influence in the ever-evolving landscape of social media marketing.</p>
                    </div>
                </div>
            </section>

            {/* Email Marketing */}
            <section className='w-[100vw] h-auto bg-[#8cd4f7]'>
                <div className='w-full grid md:grid-cols-2 grid-cols-1 justify-between items-center gap-4 py-4'>
                    <div className='col-span-1 flex flex-col text-black gap-4 md:px-6 px-2'>
                        <h3 data-aos="fade-left" className='font-bold md:text-3xl text-lg'>Email Marketing</h3>
                        <p data-aos="fade-right" className='text-base'>
                            In the digital marketing sphere, our Email Marketing service stands as a beacon for fostering direct and personalized connections with your audience. Through strategic campaigns and compelling content, we harness the power of email to nurture customer relationships and drive conversions. With tailored strategies and meticulous attention to detail, we ensure that your email campaigns resonate with your audience, delivering measurable results and driving business growth. Trust us to elevate your email marketing efforts and unlock the full potential of your brand's communication strategy.</p>
                    </div>
                    <Image data-aos="zoom-out" src={EmailMarketingImage} alt="" className='md:w-[500px] md:h-[360px]' />
                </div>
            </section>

            {/* Content Marketing */}
            <section className='w-[100vw] h-auto bg-[#d6d4f9]'>
                <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center py-2'>
                    <Image data-aos="zoom-out" src={ContentMarketingImage} alt="" className='' />
                    <div className='col-span-1 flex flex-col text-black gap-4 px-4 relative md:-left-28'>
                        <h3 data-aos="fade-left" className='font-bold md:text-3xl text-lg'>Content Marketing</h3>
                        <p data-aos="fade-right" className='text-base '>
                            Within the realm of digital marketing, our Content Marketing service serves as the cornerstone for building brand authority and driving engagement. Through strategic storytelling and compelling content creation, we captivate your audience and establish your brand as a thought leader in your industry. With a focus on delivering valuable and relevant content, we aim to educate, inspire and engage your audience, driving organic growth and fostering long-term customer relationships. Trust us to craft tailored content strategies that resonate with your audience and elevate your brand's presence in the digital landscape.</p>
                    </div>
                </div>
            </section>

            {/* FAQ section for digital marketing */}
            <section id="faq" className="relative mx-auto py-12 md:px-20 px-4 w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex flex-col items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <h3 data-aos="zoom-out" className="text-orange text-center text-3xl font-extrabold decoration-orange lg:text-left xl:text-4xl z-10">
                    Frequently Asked Questions
                </h3>


                <div data-aos="fade-left" className="my-6 z-10">
                    <div className="rounded-t-2xl bg-teal-600/80  w-full cursor-pointer select-none border-2 border-teal-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-teal-600/80 hover:text-white">
                        <h4 className="text-lg font-medium">What are the key digital marketing channels and strategies?</h4>
                    </div>
                    <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-teal-600/30 bg-teal-100/50 px-4 py-4 text-teal-800">
                        <h5>
                            Key channels include social media, email marketing, SEO, PPC advertising and content marketing. Strategies involve creating engaging content, targeting specific demographics and leveraging data analytics for optimization.
                        </h5>
                    </div>
                </div>

                <div data-aos="fade-right" className="my-6 z-10">
                    <div className="rounded-t-2xl bg-teal-600/80 w-full cursor-pointer select-none border-2 border-teal-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-teal-600/80 hover:text-white">
                        <h4 className="text-lg font-medium">How can businesses measure the success of digital marketing efforts?</h4>
                    </div>
                    <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-teal-600/30 bg-teal-100/50 px-4 py-4 text-teal-800">
                        <h5>Success can be measured through metrics like website traffic, conversion rates, click-through rates and return on investment (ROI). Tools such as Google Analytics provide valuable insights into user behavior and campaign performance.</h5>
                    </div>
                </div>

                <div data-aos="fade-left" className="my-6 z-10">
                    <div className="rounded-t-2xl bg-teal-600/80 w-full cursor-pointer select-none border-2 border-teal-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-teal-600/80 hover:text-white">
                        <h4 className="text-lg font-medium">What are common challenges in digital marketing and how to overcome them?</h4>
                    </div>
                    <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-teal-600/30 bg-teal-100/50 px-4 py-4 text-teal-800">
                        <h5>
                            Challenges include fierce competition, changing algorithms and audience saturation. Overcome by staying updated on industry trends, creating unique and valuable content, engaging with your audience authentically and adapting strategies based on data-driven insights.
                        </h5>
                    </div>
                </div>

            </section>

            {/* Schedule a meet or contact us section */}
            <ScheduleMeetAndContactCTA />
        </main>
    )
}

export default ServicesTemplateFour;