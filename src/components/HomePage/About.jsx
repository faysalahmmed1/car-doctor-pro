import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='text-slate-900   m-5 rounded-2xl'>
            <h1 className='text-2xl text-center underline text-red-600'>About Us</h1>
            <div className='container mx-auto '>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div className='items-center mx-auto m-10'>
                        <Image alt='per' src='/assets/images/about_us/person.jpg' width={460} height={473} />
                    </div>
                    <div className='m-10'>
                        
                        <h1 className='text-4xl'>We are qualified & of experience in this field</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className='btn btn-primary mt-2'>Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;