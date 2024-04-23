import React from 'react'
import AboutUs from '../ui/about/AboutUs'
import About2 from '../ui/about/About2'
import About4 from '../ui/about/ThreeDCard'
import ThreeDCard from '../ui/about/ThreeDCard'
import Visit from '../ui/about/Visit'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import { TypewriterDemo } from '../ui/about/TypeWriterDemo'

const page = () => {
    return (
        <>
            <AboutUs/>
            <About2/>
            <ThreeDCard/>
            <TypewriterDemo/>
            <Visit/>
        </>
    )
}

export default page