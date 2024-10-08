/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useState } from 'react'
import Hero from '../componets/CrmUI/Hero'
import ChooseUs from '../componets/CrmUI/ChooseUs'
import ContactUs from '../componets/WebDevelopmentUI/ContactUs'
import ClientsServices from '@/utils/ClientsServices'
import CrmServices from '../componets/CrmUI/CrmServices'
import CrmImage from '../componets/CrmUI/CrmImage'
import CrmCta from '../componets/CrmUI/CrmCta'

const page = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className='overflow-hidden'>
            <Hero showModal={showModal} setShowModal={setShowModal} />
            <CrmServices />
            <ChooseUs />
            <CrmImage />
            <ClientsServices />
            <CrmCta />
            <ContactUs/ >
        </div>
    )
}

export default page
