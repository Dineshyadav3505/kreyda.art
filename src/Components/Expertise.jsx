import React from 'react';
import Experinces from './Experinces';

const Expertise = () => {
  return (
    <div className='min-h-screen bg-[#FFFFFF] -mt-5 rounded-t-3xl  py-5'>
        <div className=" flex flex-col items-center">
            <h1 className='capitalize text-[10vw] text-zinc-500 '>expertise</h1>
            <h1 className='text-black text-[6vw] mt-5 text-center px-5 '>Our vast experience and range of services help solve complex business problems with a personalized approach to each task</h1>

        </div>

        <Experinces/>

        <button></button>


      
    </div>
  );
}

export default Expertise;
