import React, {
  useEffect,
  useState,
} from 'react';

import CountUp from 'react-countup';

const Count = () => {
    const [countOn, setCountOn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if(scrollPosition > 100) {
                setCountOn(true);
            }
            else {
                setCountOn(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return() => {
            window.addEventListener("scroll", handleScroll);
        }
    }, []);

  return (
    <div className='w-[100vw] relative flex bg-slate-100 justify-center items-center'>
        <div className='w-[80%] p-10 z-10 gap-10 justify-center items-center text-heading_clr my-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1'>
            <div data-aos='fade-up' className='flex flex-col justify-center items-center gap-4 bg-white p-4 rounded-lg border shadow-md hover:scale-110'>
                <span className='text-2xl'>
                    {countOn && <CountUp start={1} end={5} duration={5}/>}+
                </span>
                <div className='flex justify-center items-center gap-2 flex-col'>
                     <p className='text-center'>Years Helping Businesses</p>
                </div>
            </div>

            <div data-aos='fade-up' className='flex flex-col justify-center items-center gap-4 bg-white p-4 rounded-lg border shadow-md hover:scale-110'>
                <span className='text-2xl'>
                    {countOn && <CountUp start={1} end={50} duration={5}/>}+
                </span>
                <div className='flex justify-center items-center gap-2 flex-col'>
                     <p className='text-center'>Employees</p>
                </div>
            </div>

            <div data-aos='fade-up' className='flex flex-col justify-center items-center gap-4 bg-white p-4 rounded-lg border shadow-md hover:scale-110'>
                <span className='text-2xl'>
                    {countOn && <CountUp start={1} end={26} duration={5}/>}
                </span>
                <div className='flex justify-center items-center gap-2 flex-col'>
                     <p className='text-center'>Complete Projects</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Count
