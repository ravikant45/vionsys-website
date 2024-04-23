import { BackgroundGradient } from '@/components/ui/background-gradient';
import React, {
    useEffect,
    useState,
} from 'react';

import CountUp from 'react-countup';
import { FaProjectDiagram } from 'react-icons/fa';
import {
    IoBagCheck,
    IoPeopleSharp,
} from 'react-icons/io5';

const Count = () => {
    const [countOn, setCountOn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition > 100) {
                setCountOn(true);
            }
            else {
                setCountOn(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div className='w-[100vw] relative flex  justify-center items-center dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] overflow-x-hidden'>

            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className='w-[80%] p-5 z-10 gap-10 justify-center items-center text-heading_clr my-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1'>
                <BackgroundGradient>
                    <div data-aos='fade-up' className='flex flex-col justify-center items-center gap-4 bg-white p-4 rounded-3xl border shadow-md hover:scale-110'>
                        <IoBagCheck className='h-8 w-8 text-orange' />
                        <span className='text-4xl'>
                            {countOn && <CountUp start={1} end={5} duration={5} />}+
                        </span>
                        <div className='flex justify-center items-center gap-2 flex-col'>
                            <p className='text-center'>Years Experiences</p>
                        </div>
                    </div>
                </BackgroundGradient>

                <BackgroundGradient>
                    <div data-aos='fade-up' className='flex flex-col justify-center items-center gap-4 bg-white p-4 rounded-3xl border shadow-md hover:scale-110'>
                        <IoPeopleSharp className='h-8 w-8 text-orange' />
                        <span className='text-4xl'>
                            {countOn && <CountUp start={1} end={50} duration={5} />}+
                        </span>
                        <div className='flex justify-center items-center gap-2 flex-col'>
                            <p className='text-center'>Employees</p>
                        </div>
                    </div>
                </BackgroundGradient>

                <BackgroundGradient>
                    <div data-aos='fade-up' className='flex flex-col justify-center items-center gap-4 bg-white p-4 rounded-3xl border shadow-md hover:scale-110'>
                        <FaProjectDiagram className='h-8 w-8 text-orange' />
                        <span className='text-4xl'>
                            {countOn && <CountUp start={1} end={26} duration={5} />}
                        </span>
                        <div className='flex justify-center items-center gap-2 flex-col'>
                            <p className='text-center'>Completed Projects</p>
                        </div>
                    </div>
                </BackgroundGradient>


            </div>
        </div>
    )
}

export default Count
