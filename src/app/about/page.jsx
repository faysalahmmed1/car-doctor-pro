import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className='bg-white text-black text-center'>

            <div className="min-h-screen bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Car Doctor Pro</h1>
                        <p className="text-gray-600 text-lg mb-6">
                            Welcome to Car Doctor Pro, your trusted partner in car diagnostics and repair.
                            With years of experience in the automotive industry, we are dedicated to providing
                            top-notch services to keep your vehicle running smoothly.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
                                <p className="text-gray-600">
                                    Our mission is to deliver reliable, efficient, and affordable car repair and
                                    maintenance services. We strive to ensure customer satisfaction by providing
                                    personalized solutions to every car issue.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Us?</h2>
                                <p className="text-gray-600">
                                    Car Doctor Pro stands out with our expert technicians, state-of-the-art diagnostic
                                    tools, and commitment to transparency. We believe in honest work, and you can count
                                    on us for timely and accurate repairs.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-primary font-semibold m-5 mb-4 text-4xl">Our Team</h2>
                       

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Team Member 1 */}
                            <div className="text-center">
                                <Image width={100} height={48} src="/assets/images/team/1.jpg" alt="John Doe" className="rounded-full mx-auto w-32 h-32 mb-4" />
                                <h3 className="text-xl font-medium text-gray-800">John Doe</h3>
                                <p className="text-gray-600">Lead Mechanic</p>
                            </div>

                            {/* Team Member 2 */}
                            <div className="text-center">
                                <Image width={100} height={48} src="/assets/images/team/2.jpg" alt="Jane Smith" className="rounded-full mx-auto w-32 h-32 mb-4" />
                                <h3 className="text-xl font-medium text-gray-800">Jane Smith</h3>
                                <p className="text-gray-600">Diagnostic Specialist</p>
                            </div>

                            {/* Team Member 3 */}
                            <div className="text-center">
                                <Image width={100} height={48} src="/assets/images/team/3.jpg" alt="Mike Johnson" className="rounded-full mx-auto w-32 h-32 mb-4" />
                                <h3 className="text-xl font-medium text-gray-800">Mike Johnson</h3>
                                <p className="text-gray-600">Customer Relations</p>
                            </div>
                        </div>

                    </div>


                    <div className="min-h-screen bg-gray-100 py-12">
                        <div className="container mx-auto px-4">
                            {/* Other content like mission, team, etc. */}

                            {/* Developer Profile Section */}
                            <div className="bg-white shadow-lg rounded-lg p-8 mt-12">
                                <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
                                    Developed By
                                </h2>
                                <div className="flex flex-col items-center text-center">
                                   
                                    <Image
                                    width={100} height={48}
                                        src="/assets/images/developer/faysal.png"
                                        alt="Developer Name"
                                        className="rounded-full w-32 h-32 mb-4 shadow-md"
                                    />
                                    <h3 className="text-xl font-medium text-gray-800">Faysal Ahmmed</h3>
                                    <p className="text-gray-600 mb-4">MERN Stack Developer</p>

                                    {/* Social Links */}
                                    <div className="flex space-x-6">
                                        {/* Facebook */}
                                        <a
                                            href="https://www.facebook.com/fkfisu"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 transition-colors"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path
                                                    d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.129V8.414c0-3.1 1.892-4.79 4.657-4.79 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.505 0-1.796.716-1.796 1.764v2.31h3.588l-.467 3.622h-3.121V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z"
                                                />
                                            </svg>
                                        </a>

                                        {/* LinkedIn */}
                                        <a
                                            href="https://www.linkedin.com/in/faysalcse/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-700 hover:text-blue-900 transition-colors"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path
                                                    d="M22.23 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.226.793 24 1.77 24h20.458C23.207 24 24 23.226 24 22.271V1.729C24 .774 23.206 0 22.23 0zM7.078 20.452H3.597V9.03h3.481v11.422zM5.335 7.504a2.024 2.024 0 01-2.02-2.02c0-1.114.906-2.02 2.02-2.02 1.115 0 2.02.906 2.02 2.02a2.022 2.022 0 01-2.02 2.02zm15.123 12.948h-3.477v-5.642c0-1.345-.027-3.072-1.87-3.072-1.87 0-2.157 1.46-2.157 2.969v5.745h-3.477V9.03h3.34v1.561h.048c.465-.877 1.6-1.797 3.294-1.797 3.522 0 4.173 2.317 4.173 5.328v6.33z"
                                                />
                                            </svg>
                                        </a>

                                        {/* GitHub */}
                                        <a
                                            href="https://github.com/faysalahmmed1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-900 hover:text-gray-700 transition-colors"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path
                                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.776.419-1.305.763-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.527.117-3.18 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.004-.404c1.02.004 2.047.137 3.004.404 2.29-1.553 3.296-1.23 3.296-1.23.653 1.653.242 2.877.12 3.18.77.84 1.232 1.91 1.232 3.22 0 4.61-2.804 5.623-5.475 5.92.43.37.814 1.102.814 2.222 0 1.606-.014 2.902-.014 3.293 0 .322.218.694.824.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Other content */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;