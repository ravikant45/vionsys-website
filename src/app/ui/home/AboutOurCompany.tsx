import React from 'react'
import About from '../../../../public/assets/about.jpg';
import Image from 'next/image';
const AboutOurCompany = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 bg-slate-100 justify-items-center items-center overflow-hidden'>
            <div className='md:p-5 pt-16'>
                <Image src={About} alt="" />
            </div>
            <div className='w-4/5'>
                <h4 className='underline font-semibold text-xl mt-7'>About Our Company</h4>
                <h5 className='text-lg mt-5'>Elevating your business through exemplary IT services is our unwavering passion and commitment.</h5>
                <div className='text-sm mt-5'>Vionsys IT solutions INDIA Pvt. Ltd. is a leading IT company providing comprehensive solutions. From software development and cloud services to cybersecurity and IT consulting, we offer a wide range of expertise. Our experienced team delivers tailored solutions, ensuring efficiency, reliability, and scalability, to empower businesses to thrive in the digital era.</div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 border border-blue-700 rounded mt-8">Learn more</button>
            </div>
        </div>
    )
}

export default AboutOurCompany