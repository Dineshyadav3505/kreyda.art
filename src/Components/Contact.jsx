import React from 'react';

const Contact = () => {
  return (
    
    <div className=' bg-[#000] -mt-5 rounded-t-3xl px-5 py-16'>
        <div className="">
            <h1 className='capitalize text-[5.8vw] '>Please tell us about your project</h1>
        </div>

        <form action="">
            <h4 className='text-2xl pt-10 '>Service</h4>
            <input type="checkbox" id="myCheckbox"/>

            <h4 className='text-2xl pt-10 '>Budget in USD</h4>

            <input className='w-full text-2xl mt-14 bg-black border-b-[1px] border-zinc-700' type="text" placeholder='Name' />
            <input className='w-full text-2xl mt-14 bg-black border-b-[1px] border-zinc-700' type="email" placeholder='Email' />
            <input className='w-full text-2xl mt-14 bg-black border-b-[1px] border-zinc-700' type="text" placeholder='Project details (optional)' />
            <button className='mt-14 text-5xl mb-16 ' type="submit">hello</button>

        </form>
    

      
    </div>

  );
}

export default Contact;
