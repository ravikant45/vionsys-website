import React from 'react'
import FirstSection from '../ui/industries/FirstSection'
import SecondSection from '../ui/industries/SecondSection'
import ThirdSection from '../ui/industries/ThirdSection'

const page = () => {
    return (
        <div className='pt-16 overflow-x-hidden'>
            {/* First Section */}
            <FirstSection />

            {/* Second Section */}
            <SecondSection />

            {/* Third Section */}
            <ThirdSection />
        </div>
    )
}

export default page