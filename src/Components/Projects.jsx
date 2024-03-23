import React from 'react'
import Products from './Products'
import Button from './Button'
import Marquee from './Marquees'

const Projects = () => {
  return (
    <div className='min-h-screen w-full bg-zinc-100 rounded-t-3xl mt-10 px-5 pb-28 '>
      <div className=" pt-10  flex border-b-[.5px] border-zinc-500 ">
        <h1 className='heading w-2/3 text-[13vw] leading-none  text-zinc-900'> FEATURED PROJECTS </h1>
        <div className="h-full w-1/3 flex gap-5 pt-14 items-end">
         <i class="ri-behance-line"></i>
         <i class="ri-dribbble-line"></i>
        </div>
      </div>

      <Products />    
    </div>
  )
}

export default Projects