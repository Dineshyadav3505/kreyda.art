import React from 'react';

const LandingPage = () => {
  return (
    
    <div className=" w-full h-screen relative ">
        <div className="w-full h-[90%]"> 
            <video className='w-full pt-40  h-full  object-cover bg-center' muted autoPlay src="src/img:vid/kreyda_alpha_0911-vp9-chrome (2).webm"></video>
        </div>

            <div className="absolute top-0 lg:flex ">
                <div className=" px-5 pt-36 lg:px-10  lg:pt-44  lg:w-2/3      ">
                    <h1 className='heading text-zinc-500  text-[14vw] font-bold uppercase leading-none lg:text-[7vw] '>we're a <span className='heading' >creative</span> </h1>
                    <h1 className='heading text-zinc-500  text-[14vw] font-bold uppercase leading-none lg:text-[7vw] ' > <span className='heading'> Agency </span> that  </h1>
                    <h1 className='heading text-zinc-500  text-[14vw] font-bold uppercase leading-none lg:text-[7vw] '> breaks <span className='heading' > design </span> </h1>
                    <h1 className='heading text-zinc-500  text-[14vw] font-bold uppercase leading-none lg:text-[7vw] ' > standards <span className='heading'>  </span>  </h1>

                    <div className="sociallink mt-5  flex gap-4 ">
                    <div className="h-10 w-10 rounded-full border-[.5px] flex justify-center items-center  "> <i class="ri-whatsapp-line"></i> </div>
                    <div className="h-10 w-10 rounded-full border-[.5px] flex justify-center items-center  "> <i class="ri-telegram-line"></i> </div>
                    <div className="h-10 w-10 rounded-full border-[.5px] flex justify-center items-center  "> <i class="ri-mail-send-line"></i> </div>

                </div>
            </div>

                <div className=" pt-56 pl-44  flex  justify-end items-end lg:w-1/2  lg:pb-5 lg:pr-14 ">
                    <h1 className='text-[5vw] lg:text-[2vw] '>A full-service agency designing digital products and experiences for companies and startups around the world</h1>
                </div>
        </div>
    </div>

  );
}

export default LandingPage;
