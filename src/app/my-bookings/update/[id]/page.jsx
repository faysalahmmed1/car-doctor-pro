"use client";

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState, useCallback } from 'react';
import Swal from 'sweetalert2';

const Page = ({ params }) => {
    const { data: session } = useSession();
    const [booking, setBooking] = useState({});

    const loadBooking = useCallback(async () => {
        const bookingDetails = await fetch(`http://localhost:3000/my-bookings/api/booking/${params.id}`);
        const response = await bookingDetails.json();
        setBooking(response.response);
    }, [params.id]);

    const handleUpdateBooking = async (event) => {
        event.preventDefault();
        const updatedBooking = {
            date: event.target.date.value,
            phone: event.target.phone.value,
            address: event.target.address.value
        };
        
        const resp = await fetch(`http://localhost:3000/my-bookings/api/booking/${params.id}`, {
            method: "PATCH",
            body: JSON.stringify(updatedBooking),
            headers: {
                "content-type": "application/json",
            }
        });
        
        if (resp.status === 200) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Update Successfully",
                showConfirmButton: false,
                timer: 2000
            });
        }
    };

    useEffect(() => {
        loadBooking();
    }, [loadBooking]);

    return (
        <div className='container mx-auto bg-base-100'>
            <div className='bg-slate-300 p-12 mx-auto max-w-4xl text-black'>
                <form onSubmit={handleUpdateBooking}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-5'>
                        <div>
                            <input defaultValue={booking?.name} type="text" name='name' placeholder="Your Name" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <input
                                defaultValue={booking?.date}
                                type="date" name="date" placeholder="Select Date" className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-5'>
                        <div>
                            <input defaultValue={booking?.email} type="email" name='email' placeholder="Your Email" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <input
                                defaultValue={booking?.price}
                                readOnly
                                type="number" name="amount" placeholder="Due Amount" className="input input-bordered w-full" min="0"
                                step="0.01"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-5'>
                        <div>
                            <input
                                defaultValue={booking?.phone}
                                type="number" name='phone' placeholder="Your phone" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <input
                                defaultValue={booking?.address}
                                type="text" name="address" placeholder="Present Address" className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className='text-center'>
                        <button className='btn btn-primary text-white sm:w-auto lg:w-full md:w-auto'>Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
