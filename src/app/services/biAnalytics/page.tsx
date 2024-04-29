import ServicesTemplateThree from '@/app/ui/services/ServicesTemplateThree'
import React from 'react';
import { BiAndAnalyticsData } from '@/app/ui/services/data/BiAndAnalytics';

const page = () => {
    return (
        <main className='pt-16'>
            <ServicesTemplateThree data={BiAndAnalyticsData} />
        </main>
    )
}

export default page