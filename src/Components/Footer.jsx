import React from 'react';

const Footer = () => {
  return (
    <div className='bg-white h-20 -mt-10 rounded-t-3xl px-5 py-10 '>
        <div className="">
            <h1 className='text-[5.8vw] text-black '>Get in touch</h1>

        </div>
        <div className=" flex">
            <div className="w-1/2 mt-10 flex flex-col  ">
                <a className='text-black mr-10 ' href="/">telegram</a>
                <a className='text-black mr-10 ' href="/">whatsapp</a>
                <a className='text-black mr-10 ' href="/">x</a>
                <a className='text-black mr-10 ' href="/">linkedin</a>
                <a className='text-black mr-10 ' href="/">behance</a>
                <a className='text-black mr-10 ' href="/">dribbble</a>
            </div>
            <div className="w-1/2 mt-10 flex flex-col">
            <a className='text-black mr-10 ' href="/">protfolio</a>
            <a className='text-black mr-10 ' href="/">about</a>
            <a className='text-black mr-10 ' href="/">expertise</a>
            <a className='text-black mr-10 ' href="/">Contact us</a>
            </div>
        </div>
        
        <div className='h-7 my-5 flex gap-2 items-center'>
            <img className=' h-full  ' src="src/img:vid/6544e4c925ec4a0c3d4bfd69_Frame 48096485.svg" alt="/" />
            <div className="h-4 w-4 rounded-full overflow-hidden">
                <div className="h-1/2 bg-blue-600"></div>
                <div className="h-1/2 bg-yellow-600"></div>

            </div>
        </div>


        <p className='text-sm text-zinc-500 py-3'> kreyda 2024</p>
      
    </div>
  );
}

export default Footer;
