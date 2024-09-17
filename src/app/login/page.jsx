"use client"
import Image from 'next/image';
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import Link from 'next/link';


const page = () => {
    const handleLongin = async () => {
        console.log('clicked')
    }
    return (
        <div className='container mx-auto bg-base-300 py-12 px-12'>
            <div className='grid grid-cols-2 container mx-auto'>
                <div>
                    <Image src={'/assets/images/login/login.svg'} width={460} height={502} alt='login' />
                </div>
                <div className='border-2 p-12'>
                    <h6 className='text-center text-primary font-semibold text-3xl'>Login</h6>
                    <form onSubmit={handleLongin}>
                        <label className='text-black' htmlFor="">Email</label>
                        <input type="email" name='email' placeholder="your Email" className="input input-bordered w-full text-black mt-3 mb-2" />

                        <label className='text-black' htmlFor="">Password</label>
                        <input type="password" name='Password' placeholder="your password" className="input input-bordered w-full text-black mt-3 " />

                        <button type='submit' className="btn btn-primary w-full mt-5">Login</button>
                    </form>

                    <div className='text-black text-center mt-4'>
                        <h1>or Sign in With</h1>
                    </div>


                    <div className='flex text-4xl gap-x-2 text-center justify-center items-center mt-3'>
                        <FcGoogle className='text-primary' />
                        <FaGithub className='text-black' />
                        <FaFacebook className='text-blue-600' />
                    </div>
                    <h1 className='text-black text-center mt-4'>have an Account?<Link className='text-primary' href={'/signup'}>Sign Up</Link></h1>
                </div>

            </div>
        </div>
    );
};

export default page;