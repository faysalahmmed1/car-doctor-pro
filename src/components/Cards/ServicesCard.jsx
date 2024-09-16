import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServicesCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card bg-base-100 w-96 shadow-xl text-black">
            <figure>
                <Image  width={314} height={208} src={img} alt='title' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <Link href={'/service'}><button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;