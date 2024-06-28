'use client'
import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { Card } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';

import ClientImage1 from '../../../../public/assets/clients/client-1.png';
import ClientImage2 from '../../../../public/assets/clients/client-2.png';
import ClientImage3 from '../../../../public/assets/clients/client-3.png';
import ClientImage4 from '../../../../public/assets/clients/client-4.png';
import ClientImage5 from '../../../../public/assets/clients/client-5.png';
import ClientImage6 from '../../../../public/assets/clients/client-6.png';
import ClientImage7 from '../../../../public/assets/clients/client-7.png';
import ClientImage8 from '../../../../public/assets/clients/client-8.png';
import ClientImage9 from '../../../../public/assets/clients/client-9.png';
import ClientImage10 from '../../../../public/assets/clients/client-10.png';
import ClientImage11 from '../../../../public/assets/clients/client-11.png';

const OurClients = () => {
    const [width, setWidth] = useState(0);
    const slider_wrapper = useRef<any>();
    useEffect(() => {
        setWidth(slider_wrapper.current?.scrollWidth - slider_wrapper.current?.offsetWidth);
    }, []);
    const MyClients = [
        {
            id: 1,
            logo: ClientImage9
        },
        {
            id: 2,
            logo: ClientImage10
        },
        {
            id: 3,
            logo: ClientImage11
        },
        {
            id: 4,
            logo: ClientImage1
        },
        {
            id: 5,
            logo: ClientImage2
        },
        {
            id: 6,
            logo: ClientImage3
        },
        {
            id: 7,
            logo: ClientImage4
        },
        {
            id: 8,
            logo: ClientImage5
        },
        {
            id: 9,
            logo: ClientImage6
        }
        ,
        {
            id: 10,
            logo: ClientImage7
        },
        {
            id: 11,
            logo: ClientImage8
        },
        
    ]
    return (
        <section className="w-[100vw] overflow-x-hidden flex justify-center items-center px-6 py-14 bg-[#fd4343] bg-[linear-gradient(45deg,_#fd4343_0%,_#ffbde9_50%,_#8983fb_100%)]">
            <motion.div
                ref={slider_wrapper}
                className='w-[100%] cursor-grab overflow-hidden'
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="flex items-center gap-4"
                >
                    {
                        MyClients.map((item) => (
                            <Card
                                key={item.id}
                                data-aos="zoom-in"
                                className="min-w-40 md:min-w-60 h-40 flex justify-center items-center bg-[rgba(255,_255,_255,_.5)]"
                            >
                                <Image src={item.logo} className="pointer-events-none" priority alt="" />
                            </Card>
                        ))
                    }
                </motion.div>
            </motion.div>
        </section>
    )
}

export default OurClients