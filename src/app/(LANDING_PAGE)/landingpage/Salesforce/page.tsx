'use client'
import React, { useState } from 'react'
import Hero from '../componets/SalesforceUI/Hero'
import Services from '../componets/SalesforceUI/Services'
import ContactUs from '../componets/WebDevelopmentUI/ContactUs'
import SalesforceOfferings from '../componets/SalesforceUI/SalesforceOfferings'
import ClientsServices from '@/utils/ClientsServices'
import SalesforceChooseUs from '../componets/SalesforceUI/SalesforceChooseUs'
import Cta from '../componets/ITStaffingUI/Cta'
import SalesforceCta from '../componets/SalesforceUI/SalesforceCta'

const page = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div id='contactbg' className='pt-16 overflow-hidden'>
            <Hero showModal={showModal} setShowModal={setShowModal} />
            <Cta showModal={showModal} setShowModal={setShowModal} />
            <SalesforceOfferings />
            <ClientsServices />
            <Services />
            <SalesforceChooseUs />
            <SalesforceCta />
            <ContactUs />
        </div>
    )
}

export default page
