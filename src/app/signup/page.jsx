"use client"
import SocialSignIn from '@/components/Shared/SocialSignIn/SocialSignIn';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';

const page = () => {
    const handleSignUp = async (event) => {
        event.preventDefault();
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
        };

        const resp = await fetch('http://localhost:3000/signup/api', {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "content-type": "application/json"
            }
        });
        console.log(resp)
        if (resp.status === 200) {
            event.target.reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Sign-Up Successful",
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    return (
        <div className='container mx-auto bg-base-300 py-12 px-12'>
            <div className='grid  sm:grid-cols-1 lg:grid-cols-2 container mx-auto'>
                <div>
                    <Image src={'/assets/images/login/login.svg'} width={460} height={502} alt='login' />
                </div>
                <div className='border border-sky-400 p-12'>
                    <h6 className='text-center text-primary font-semibold text-3xl'>Login</h6>

                    <form onSubmit={handleSignUp}>
                        <label className='text-black' htmlFor="">Name</label>
                        <input type="text" name='name' placeholder="your name" className="input input-bordered w-full text-black mt-3 mb-2" />
                        <label className='text-black' htmlFor="">Email</label>
                        <input type="email" name='email' placeholder="your Email" className="input input-bordered w-full text-black mt-3 mb-2" />

                        <label className='text-black' htmlFor="">Password</label>
                        <input type="password" name='password' placeholder="your password" className="input input-bordered w-full text-black mt-3 " />

                        <button type='submit' className="btn btn-primary w-full mt-5">Sign Up</button>
                    </form>

                    <div className='text-black text-center mt-4'>
                        <h1>or Sign in With</h1>
                    </div>


                    <SocialSignIn></SocialSignIn>
                    <h1 className='text-black text-center mt-4'>Already have an Account?<Link className='text-primary' href={'/login'}>Login</Link></h1>
                </div>

            </div>
        </div>
    );
};

export default page;