import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import SoftwareTestingImage from "/public/assets/services/Testing/software-testing-banner.jpg";
import QualityAssuranceImage from "/public/assets/services/Testing/QAassurance.jpg";
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdOutlineViewCompactAlt } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { CgPerformance } from "react-icons/cg";
import { LuFunctionSquare } from "react-icons/lu";
import { TbTestPipe } from "react-icons/tb";
import { FaUnity } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import ScheduleMeetAndContactCTA from '@/utils/ScheduleMeetAndContactCTA';
const page: React.FC = () => {
    const services = [
        {
            id: 1,
            title: "Web Automation Testing",
            description: "Transform your software testing with our Web Automation Testing service, streamlining processes for enhanced efficiency. By automating tests, we ensure swift, accurate results, empowering seamless software performance.",
            icon: <div className='p-4 bg-gray2 rounded-full relative z-20 '><TbAutomaticGearbox size={35} className='text-orange' /></div>
        },
        {
            id: 2,
            title: "Compatibility Testing for Web Applications",
            description: "Ensuring that web applications function seamlessly across different web browsers, devices, and screen resolutions to provide a consistent user experience.",
            icon: <div className='p-4 bg-gray2 rounded-full relative z-20 '><MdOutlineViewCompactAlt size={35} className='text-orange' /></div>
        },
        {
            id: 3,
            title: "Usability Testing",
            description: "Assessing the user interface and experience of web applications to ensure intuitive navigation, efficient workflow, and overall user satisfaction.",
            icon: <div className='p-4 bg-gray2 rounded-full relative z-20'><MdOutlineVerifiedUser size={35} className='text-orange' /></div>
        },
        {
            id: 4,
            title: "Performance Testing",
            description: "Evaluating the speed, responsiveness, and scalability of web applications under various load conditions to ensure optimal performance.",
            icon: <div className='p-4 bg-gray2 rounded-full relative z-20 '><CgPerformance size={35} className='text-orange' /></div>
        },
        {
            id: 5,
            title: "Functional Testing",
            description: "Systematically verifying each feature of the web application to ensure it operates as intended according to specifications.",
            icon: <div className='p-4 bg-gray2 rounded-full relative z-20'><LuFunctionSquare size={35} className='text-orange' /></div>
        },
        {
            id: 6,
            title: "Regression Testing",
            description: " Detecting and preventing the introduction of defects or errors in web applications due to recent code changes or updates.",
            icon: <div className='p-4 bg-gray2 rounded-full relative z-20'><TbTestPipe size={35} className='text-orange' /></div>
        },
        {
            id: 7,
            title: "Unit Testing",
            description: "Unit testing involves verifying individual components of the web application's code to ensure they function correctly in isolation. These tests are automated and focus on identifying and addressing bugs early in the development process.",
            icon: <div className='p-4 bg-gray2 rounded-full relative z-20'><FaUnity size={35} className='text-orange' /></div>
        },
        {
            id: 8,
            title: "Security Testing",
            description: " Identifying and addressing potential security vulnerabilities in web applications to safeguard against cyber threats and protect sensitive data.",
            icon: <div className='p-4 bg-gray2 rounded-full relative z-20'><MdOutlineSecurity size={35} className='text-orange' /></div>
        },


    ]
    return (
        <main className='pt-16 overflow-x-hidden'>
            {/* Hero Section  */}
            <section className='w-[100vw] md:h-[100vh] h-[50vh] '>
                <div className='relative w-full h-full flex justify-start items-center'>
                    <Image src={SoftwareTestingImage} alt="" className='w-full h-full  z-0' />
                    <div className='bg-transparent z-10 text-white absolute top-0  h-full flex flex-col justify-center items-start w-full px-4'>
                        <div className='md:w-[60%] w-full flex flex-col gap-2 p-2'>
                            <h4 data-aos="fade-left" className='md:text-4xl text-xl font-bold text-orange '>Ensuring Software Stability Through Rigorous Testing</h4>
                            <p data-aos="fade-right" className='text-md'>
                                At Vionsys IT Solutions India Pvt Ltd, we redefine software testing and quality assurance with a tailored approach that merges innovation and expertise. With a relentless pursuit of perfection, we meticulously assess, refine, and optimize your software, ensuring robustness, security, and exceptional performance. Trust us to elevate your software to new heights of reliability and user satisfaction, empowering your business for success in today's dynamic digital landscape.</p>
                            <div>
                                <Button data-aos="fade-right">Contact us</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Why to choose us for the software testing */}
            <section className='w-[100vw]'>
                <div className='w-full flex flex-col gap-8 justify-center items-center md:px-4 md:py-6 py-3 px-2'>
                    <h2 data-aos="fade-down" className='md:text-3xl text-xl font-bold text-orange'>Why Vionsys Excels as Your QA and Testing Partner?</h2>
                    <div className='w-full grid md:grid-cols-2 grid-cols-1  gap-4 md:px-12'>
                        {/* left side */}
                        <div className='flex flex-col gap-2'>
                            <p data-aos="fade-left">Vionsys emerges as your top-tier QA and testing partner, guaranteeing unparalleled expertise. With our commitment to excellence, bolstered by cutting-edge tools and meticulous methodologies, we ensure software reliability and seamless user experiences, driving unparalleled business success.</p>
                            <ul data-aos="zoom-in" className='ml-4 list-disc'>
                                <li>Expertise in QA and testing.</li>
                                <li>Access to cutting-edge testing tools.</li>
                                <li>Comprehensive QA solutions.</li>
                                <li>Reliable and consistent results.</li>
                            </ul>
                        </div>

                        {/* right side */}
                        <div className='md:px-8'>
                            <Image data-aos="zoom-out" src={QualityAssuranceImage} alt="" className='w-full rounded-md' />
                        </div>
                    </div>
                </div>
            </section>


            {/* Our Testing Services */}
            <section className='w-[100vw] dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center'>
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className='w-full flex flex-col justify-center items-center gap-4 md:px-4 px-2 md:py-6 py-2'>
                    <h3 className='text-orange font-bold md:text-3xl text-xl relative z-20'>Our Software Testing Services</h3>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8'>
                        {
                            services.map((service) => (
                                <div data-aos="flip-left" key={service.id} className='flex flex-col justify-center items-center gap-2'>
                                    {service.icon}
                                    <h4 className='text-blue3 font-bold relative z-20 bg-clip-text'>{service.title}</h4>
                                    <p className='text-center text-sm relative z-20 bg-clip-text'>{service.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* process for implementation */}
            <section>

            </section>

            {/* Schedule a meet and contact us */}
            <ScheduleMeetAndContactCTA />
        </main>
    )
}

export default page;