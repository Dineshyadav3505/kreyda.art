import React from 'react';
import Profile from './Profile';

const Aboutus = () => {
  return (
    <>
    <div className='min-h-screen bg-[#B3BDCD] -mt-5 rounded-t-3xl px-5 py-5'>
        <div className="">
            <h1 className='capitalize text-[10vw] '>about us</h1>
        </div>
        <div className="">
            <h1 className='text-black text-[7vw] mt-5'>“We are a small team of experts from Ukraine, specializing in developing modern products that push the boundaries of design. We help small businesses, startups, and other brands to grow and win by turning ideas into functional solutions.</h1>
            <h1 className='text-black text-[7vw] mt-10'>We closely collaborate with our clients to understand the needs and goals of the product, as communication is the key to the success of any project.“</h1>
        </div>

        <Profile/>
    </div>

    
    </>
  );
}

export default Aboutus;
