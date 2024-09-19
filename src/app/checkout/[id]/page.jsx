"use client"
import { getServicesDetails } from '@/servicess/getServices';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const checkout = ({ params }) => {
    const { data } = useSession();
    const [service, setService] = useState({});

    const loadService = async () => {
        const details = await getServicesDetails(params.id);
        setService(details.service);
    };
    const { _id, title, img, price, description } = service || {};

    const handleBooking = async (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        loadService();
    }, [params])


    return (
        <div className='container mx-auto bg-base-100'>
            <div className='relative w-full h-72 text-center items-center ml-16 '>
                <Image
                    className='absolute h-72 w-full rounded-2xl items-center bg-base-100 object-cover'
                    src={img}
                    alt='service'
                    width={2000} height={1200}
                    style={{ width: "90vw" }}
                />

            </div>

            <div className='text-center'>
                <h1 className='text-primary text-6xl mt-2'>Check Out</h1>
            </div>


            <div className='bg-slate-300 my-12 p-12 mx-auto max-w-4xl text-black'>
                <form onSubmit={handleBooking}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-5 '>
                        <div>
                            <input defaultValue={data?.user?.name}  type="text" name='name' placeholder="Your Name" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <input defaultValue={new Date().toISOString().split("T")[0]} type="date" name="date" placeholder="Select Date" className="input input-bordered w-full" />
                        </div>

                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-5'>
                        <div>
                            <input defaultValue={data?.user?.email}  type="email" name='email' placeholder="Your Email" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <input defaultValue={price}
                                type="number" name="amount" placeholder="Due Amount" className="input input-bordered w-full" min="0"
                                step="0.01"
                            />
                        </div>

                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-5'>
                        <div>
                            <input type="number" name='phone' placeholder="Your phone" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <input
                                type="text" name="address" placeholder="present Address" className="input input-bordered w-full" min="0"
                                step="0.01"
                            />
                        </div>

                    </div>

                    <div className='mb-6'>
                        <textarea
                            placeholder="Your Message"
                            className="textarea textarea-bordered w-full h-24"></textarea>
                    </div>

                    <div className='text-center'>
                        <button className='btn btn-primary text-white sm:w-auto lg:w-full md:w-auto'>Order Confirm</button>
                    </div>
                </form>
            </div>




        </div>
    );
};

export default checkout;