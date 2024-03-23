import { motion } from 'framer-motion';
import React from 'react';

const Navbar = () => {
  return (
    
    <nav className= ' absolute z-20 py-8 px-5 flex justify-between left-0 right-0  '>
        <div className="logo"><img className=' h-10' src="https://assets-global.website-files.com/6527b46c9f9e668d86dfbe29/655e3c3f71236d83f3434eb0_gdfgdf1.svg" alt="" /></div>

        <div className="link flex gap-3 items-center">
            <a className='px-4 py-1  font-serif border-[2px] text-[2.5vw] rounded-3xl capitalize sm:text-[1.2vw]' href="/"> contact Us</a>
            <a href="/" > <span className='text-[2.5vw]  font-serif sm:text-[1.2vw] capitalize hidden sm:block '> menu</span> </a>
            <motion.div whileHover={{ transform: "rotate(90deg)" }} className="h-10 w-10 bg-black rounded-full flex justify-center items-center "> <i class="ri-menu-5-fill"></i></motion.div>
        </div>
    </nav>
  );
}

export default Navbar;
