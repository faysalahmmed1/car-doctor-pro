import { getServicesDetails } from '@/servicess/getServices';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';


export const metadata = {
    title: 'Service Details',
    description: 'Service Details page'
}

const page = async ({ params }) => {
    const details = await getServicesDetails(params.id);
    const { _id, title, img, price, description } = details.service;
    return (
        <div className="bg-stone-500 p-4 sm:p-8  sm:flex-row">
            <h1 className="text-4xl sm:text-3xl font-semibold text-primary text-center">{title}</h1>
            <div className='"bg-stone-500 p-4 sm:p-8 flex flex-col sm:flex-row'>
                <div className="space-y-4 sm:w-1/2">

                    <Image width={100} height={48} className="rounded-md" src={img} alt={title} />
                    
                </div>

                <div className="sm:w-1/2 text-center sm:text-left mt-6 sm:mt-0 sm:ml-8">
                <p className="text-3xl text-white font-medium mb-3">Price: {price}</p>
                    <p className="text-base text-gray-200 mb-4">{description}</p>
                    <Link href={`/checkout/${_id}`}>
                        <button className="btn btn-primary w-full sm:w-auto">Check Out</button>
                    </Link>
                </div>
            </div>

        </div>

    );
};

export default page;