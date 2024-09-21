"use client";
import { getServicesDetails } from '@/services/getServices';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Checkout = ({ params }) => {
    const { data } = useSession();
    const [service, setService] = useState({});

    const { _id, title, img, price, description } = service || {};

    useEffect(() => {
        const loadService = async () => {
            const details = await getServicesDetails(params.id);
            setService(details.service);
        };
        loadService();
    }, [params.id]);

    const handleBooking = async (event) => {
        event.preventDefault();
        const newBooking = {
            email: data?.user?.email,
            name: data?.user?.name,
            address: event.target.address.value,
            phone: event.target.phone.value,
            date: event.target.date.value,
            serviceTitle: title,
            serviceID: _id,
            price: price
        };
        console.log(newBooking);

        const resp = await fetch('http://localhost:3000/checkout/api/new-book', {
            method: 'POST',
            body: JSON.stringify(newBooking),
            headers: {
                "content-type": "application/json"
            }
        });
        event.target.reset();
        let timerInterval;
        Swal.fire({
            title: "Booking Successfully...",
            html: "Please wait a few  <b></b> seconds..",
            timer: 1500,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
    };

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
                            <input defaultValue={data?.user?.name} type="text" name='name' placeholder="Your Name" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <input defaultValue={new Date().toISOString().split("T")[0]} type="date" name="date" placeholder="Select Date" className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-5'>
                        <div>
                            <input defaultValue={data?.user?.email} type="email" name='email' placeholder="Your Email" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <input defaultValue={price}
                                readOnly
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
                                type="text" name="address" placeholder="Present Address" className="input input-bordered w-full"
                            />
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

export default Checkout;
