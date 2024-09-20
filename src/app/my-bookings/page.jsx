
"use client"

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';


const page = () => {
    const session = useSession()
    const [bookings, setBookings] = useState([]);

    const loadData = async () => {
        const resp = await fetch(`http://localhost:3000/my-bookings/api/f@gmail.com`);
        const data = await resp.json()
        setBookings(data?.Bookings);
    };

    const handleDelete = async (id) => {
        try {
          const response = await fetch(`http://localhost:3000/my-bookings/api/delete-booking/${id}`, {
            method: 'DELETE',
          });
      
          const data = await response.json();
      
          if (data?.response?.deletedCount > 0) {
            loadData(); 
          } else {
            console.error('Failed to delete the booking');
          }
        } catch (error) {
          console.error('Error deleting booking:', error);
        }
      };
      

    useEffect(() => {
        loadData()
    }, [session])

    return (
        <div className='container mx-auto text-center bg-white text-black'>
            <div className='relative w-full h-72 text-center items-center ml-16 '>
                <Image
                    className='absolute h-72 w-full rounded-2xl items-center bg-base-100 object-cover'
                    src={'/assets/images/about_us/parts.jpg'}
                    alt='service'
                    width={2000} height={1200}
                    style={{ width: "90vw" }}
                />


            </div>
            <h1 className='text-primary font-semibold text-4xl mt-5'>MY BOOKINGS</h1>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-separate border-spacing-0">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                    Service Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                    Price
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                    Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {bookings?.map(({ _id, serviceTitle, price, date }) => (
                                <tr key={_id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{serviceTitle}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex space-x-3">
                                            <button className="btn bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                                                Edit
                                            </button>
                                            <button onClick={() => handleDelete(_id)} className="btn bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default page;
