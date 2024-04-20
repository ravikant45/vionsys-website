import { Button } from '@/components/ui/button';
import React from 'react';

const AboutOurCompany = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 bg-white justify-items-center items-center'>
            {/* <div className='md:p-5 '>
                <Image src={About} alt="" />
            </div> */}
            <div className="grid grid-cols-3 gap-x-6 gap-y-0 m-14 ">
                <div className='relative md:w-32 md:h-32 [clip-path:polygon(0%_25%,0%_75%,50%_100%,100%_75%,100%_25%,50%_0)] hover:scale-125 md:translate-x-20 transition-all duration-300 ease-linear'>
                    <img src="https://picsum.photos/id/1040/300/300" alt="" className="transform transition duration-200 cursor-pointer" />
                </div>
                <div className='relative md:w-32 md:h-32 [clip-path:polygon(0%_25%,0%_75%,50%_100%,100%_75%,100%_25%,50%_0)] hover:scale-125 md:translate-x-20 transition-all duration-300 ease-linear'>
                    <img src="https://picsum.photos/id/1040/300/300" alt="" className="transform transition duration-200 cursor-pointer" />
                </div> <br />
                <div className='relative md:w-32 md:h-32 [clip-path:polygon(0%_25%,0%_75%,50%_100%,100%_75%,100%_25%,50%_0)] hover:scale-125 transition-all duration-300 ease-linear'>
                    <img src="https://picsum.photos/id/1040/300/300" alt="" className="transform transition duration-200 cursor-pointer" />
                </div>
                <div className='relative md:w-32 md:h-32 [clip-path:polygon(0%_25%,0%_75%,50%_100%,100%_75%,100%_25%,50%_0)] hover:scale-125 transition-all duration-300 ease-linear'>
                    <img src="https://picsum.photos/id/1040/300/300" alt="" className="transform transition duration-200 cursor-pointer" />
                </div>
                <div className='relative md:w-32 md:h-32 [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)] hover:scale-125 transition-all duration-300 ease-linear'>
                    <img src="https://picsum.photos/id/1040/300/300" alt="" className="transform transition duration-200 cursor-pointer" />
                </div>
                <div className='relative md:w-32 md:h-32 [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)] hover:scale-125 md:translate-x-20 transition-all duration-300 ease-linear'>
                    <img src="https://picsum.photos/id/1040/300/300" alt="" className="transform transition duration-200 cursor-pointer" />
                </div>
                <div className='relative md:w-32 md:h-32 [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)] hover:scale-125 md:translate-x-20 transition-all duration-300 ease-linear'>
                    <img src="https://picsum.photos/id/1040/300/300" alt="" className="transform transition duration-200 cursor-pointer" />
                </div>
            </div>
            <div className='w-4/5'>
                <h4 className='underline font-bold md:text-2xl text-xl mt-7 text-black'>About Our Company</h4>
                <h5 className='text-lg mt-5 text-black'>Elevating your business through exemplary IT services is our unwavering passion and commitment.</h5>
                <div className='text-sm mt-5 text-gray1 pb-4'>Vionsys IT solutions INDIA Pvt. Ltd. is a leading IT company providing comprehensive solutions. From software development and cloud services to cybersecurity and IT consulting, we offer a wide range of expertise. Our experienced team delivers tailored solutions, ensuring efficiency, reliability, and scalability, to empower businesses to thrive in the digital era.</div>
                <Button>Learn More</Button>
            </div>
        </div>
    )
}

export default AboutOurCompany