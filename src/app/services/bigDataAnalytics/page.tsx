import ServicesTemplateThree from '@/app/ui/services/ServicesTemplateThree';
import React from 'react';
import { BigData } from '@/app/ui/services/data/BigData';
const page = () => {
    return (
        <main className='pt-16'>
            <ServicesTemplateThree data={BigData} />
        </main>
    )
}

export default page