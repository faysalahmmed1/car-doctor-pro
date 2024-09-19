import { getServicesDetails } from '@/servicess/getServices';
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
        <div className='bg-stone-500'>
            <div>
                <h1>hello</h1>
                <h1>{title}</h1>
                <img src={img} alt="" />
                <p>{price}</p>
                <p>{description}</p>
            </div>

            <div className='text-center'>
                <Link href={`/checkout/${_id}`}><button className="btn btn-primary">Check Out</button></Link>
            </div>
        </div>
    );
};

export default page;