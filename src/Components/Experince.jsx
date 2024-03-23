import { motion } from 'framer-motion';
import React from 'react';

const Experince = ({item,  index}) => {
  return (
    
    <div className="px-5 py-4" style={{ backgroundColor: [item.bg] }}  >
      <h1 className='text-black text-4xl capitalize py-2'>{item.title1} </h1>

      <div className=" flex items-center gap-2 flex-wrap ">
        <h5 className='text-black flex items-center gap-2 text-[3vw]  uppercase '> {item.title2}     {item.title2.length === 0 ? null : <div className="h-1 w-1 bg-black rounded-full"></div>}    </h5>
        <h5 className='text-black flex items-center gap-2 text-[3vw] uppercase '> {item.title3}     {item.title4.length === 0 ? null : <div className="h-1 w-1 bg-black rounded-full"></div>}    </h5>
        <h5 className='text-black flex items-center gap-2 text-[3vw]  uppercase '> {item.title4}     {item.title5.length === 0 ? null : <div className="h-1 w-1 bg-black rounded-full"></div>}    </h5>
        <h5 className='text-black flex items-center gap-2 text-[3vw]  uppercase '> {item.title5}     {item.title6.length === 0 ? null : <div className="h-1 w-1 bg-black rounded-full"></div>}    </h5>
      </div>


    </div>
  );
}

export default Experince;
