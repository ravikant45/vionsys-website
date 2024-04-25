import { Button } from '@/components/ui/button'
import React from 'react'

const ScheduleMeetAndContactCTA: React.FC = () => {
    return (
        < section className="w-[100vw] overflow-x-hidden" >
            {/* Final section contact us and schedule a meeting */}
            <div className="flex justify-center items-center py-4">
                <div className="flex flex-col justify-center items-center gap-4 md:px-8 px-2 py-4 md:w-[70%]">
                    <h4 data-aos="zoom-out" className="md:text-4xl text-lg text-blue3 font-semibold text-center">Excited about the prospect of collaborating? Share your ideas, and let's work together to create something truly remarkable!</h4>
                    <div className="flex gap-4 flex-wrap">
                        <Button data-aos="fade-right">Schedule a meeting</Button>
                        <Button data-aos="fade-left">Contact us</Button>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ScheduleMeetAndContactCTA