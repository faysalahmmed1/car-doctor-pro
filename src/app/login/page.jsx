"use client"
import Image from 'next/image';
import React from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import SocialSignIn from '@/components/Shared/SocialSignIn/SocialSignIn';



const page = () => {

    const router = useRouter();

    const handleLongin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const resp = await signIn("credentials", {
            email,
            password,
            redirect: false,

        });
        event.target.reset();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Log-In Successfully",
            showConfirmButton: false,
            timer: 1500
        });

        if (resp.status === 200) {
            router.push('/');
        }

    };




    return (
        <div className='container mx-auto bg-base-300 py-12 px-12'>
            <div className='grid grid-cols-2 container mx-auto'>
                <div>
                    <Image src={'/assets/images/login/login.svg'} width={460} height={502} alt='login' />
                </div>
                <div className='border border-sky-400 p-12'>
                    <h6 className='text-center text-primary font-semibold text-3xl'>Login</h6>
                    <form onSubmit={handleLongin}>
                        <label className='text-black' htmlFor="">Email</label>
                        <input type="email" name='email' placeholder="your Email" className="input input-bordered w-full text-black mt-3 mb-2" />

                        <label className='text-black' htmlFor="">Password</label>
                        <input type="password" name='password' placeholder="your password" className="input input-bordered w-full text-black mt-3 " />

                        <button type='submit' className="btn btn-primary w-full mt-5">Login</button>
                    </form>

                    <div className='text-black text-center mt-4'>
                        <h1>or Sign in With</h1>
                    </div>


                    <SocialSignIn></SocialSignIn>
                    <h1 className='text-black text-center mt-4'>have an Account?<Link className='text-primary' href={'/signup'}>Sign Up</Link></h1>
                </div>

            </div>
        </div>
    );
};

export default page;