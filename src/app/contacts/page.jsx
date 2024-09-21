import React from 'react';

const page = () => {
    return (
        <div className='bg-white text-black text-center'>
            <div className="min-h-screen flex items-center justify-center bg-gray-200">
                <div className="bg-base-300 shadow-xl rounded-lg max-w-3xl w-full p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2>
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-700">Contact Information</h3>
                        <p className="mt-2 text-sm text-gray-600">FAMB TECH.LMT</p>
                        <p className="text-sm text-gray-600">City, North Badda, 1212</p>
                        <p className="text-sm text-gray-600 mt-1">Email: faysalahmmedcse@gmail.com</p>
                        <p className="text-sm text-gray-600">Phone: 01616**1943</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;