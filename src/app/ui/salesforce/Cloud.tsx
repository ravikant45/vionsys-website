import React from 'react';

import { MdOutlineCloud } from 'react-icons/md';

function Cloud() {
    return (
        <div className="bg-white py-10">
            <div className="max-w-screen px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
                <div className="text-center">
                    <h3 className="text-xl sm:text-2xl leading-normal font-extrabold tracking-tight text-gray-900">
                        Salesforce <span className="text-indigo-600">Cloud Services</span>
                    </h3>
                </div>

                <div className="mt-12">
                    <ul className="grid md:grid-cols-2 grid-cols-1 gap-x-8">
                        <li className="bg-gray-100 p-5 mb-20">
                            <div className="flex flex-col items-center">
                                <div className="flex-shrink-0 relative top-0 -mt-16">
                                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                        <MdOutlineCloud size={30}/>
                                    </div>
                                </div>
                                <div className="mt-1">
                                    <h4 className="text-lg leading-6 text-center font-semibold text-gray-900">Sales Cloud</h4>
                                    <p className="my-2 text-sm leading-6 text-gray-500">Transform your sales process with Sales Cloud, a comprehensive sales CRM platform that empowers your team to sell smarter and faster. From lead management to pipeline forecasting, Sales Cloud provides the tools you need to close deals and drive revenue.</p>
                                </div>
                            </div>
                        </li>
                        <li className="bg-gray-100 p-5 mb-20">
                            <div className="flex flex-col items-center">
                                <div className="flex-shrink-0 relative top-0 -mt-16">
                                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                        <MdOutlineCloud size={30}/>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-lg leading-6 text-center font-semibold text-gray-900">Service Cloud</h4>
                                    <p className="my-2 text-sm leading-6 text-gray-500">Deliver exceptional customer service experiences with Service Cloud. This powerful customer service platform enables you to support customers across multiple channels, resolve issues faster with AI-powered tools, and build lasting customer relationships.</p>
                                </div>
                            </div>
                        </li>
                        <li className="bg-gray-100 p-5 mb-20 md:mb-0">
                            <div className="flex flex-col items-center">
                                <div className="flex-shrink-0 relative top-0 -mt-16">
                                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                        <MdOutlineCloud size={30}/>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-lg leading-6 text-center font-semibold text-gray-900">Marketing Cloud</h4>
                                    <p className="my-2 text-sm leading-6 text-gray-500">Engage customers at every touchpoint with Marketing Cloud. This integrated marketing platform allows you to create personalized, data-driven marketing campaigns, automate customer journeys, and measure the impact of your marketing efforts. </p>
                                </div>
                            </div>
                        </li>
                        <li className="bg-gray-100 p-5">
                            <div className="flex flex-col items-center">
                                <div className="flex-shrink-0 relative top-0 -mt-16">
                                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                        <MdOutlineCloud size={30}/>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-lg leading-6 text-center font-semibold text-gray-900">Platform and App Cloud</h4>
                                    <p className="my-2 text-sm leading-6 text-gray-500">Customize and extend Salesforce to fit your unique business needs with Platform and App Cloud. Build custom applications, integrate with third-party systems, and extend the power of Salesforce with low-code development tools.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Cloud;
