import React from 'react'
import AboutUs from '../ui/about/AboutUs'
import About2 from '../ui/about/About2'
import ThreeDCard from '../ui/about/ThreeDCard'
import Visit from '../ui/about/Visit'
import { TypewriterDemo } from '../ui/about/TypeWriterDemo'
import { DirectionAwareHoverDemo } from '../ui/about/DirectionAwareHoverDemo'

const page = () => {
    return (
        <>
            <AboutUs/>
            <About2/>
            <ThreeDCard/>
            <DirectionAwareHoverDemo/>
            <TypewriterDemo/>
            <Visit/>
        </>
    )
}

export default page