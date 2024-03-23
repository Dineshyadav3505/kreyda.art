import React from 'react';
import Marquee from './Marquee';

const Marquees = ( {tittle} ) => {
  return (
    <div className= ' rounded-t-3xl bg-[#A5B7C6] py-8 -mt-10 flex overflow-hidden text-wrap items-center gap-3' >
        <Marquee  tittle={tittle} />
  
      
    </div>
  );
}

export default Marquees;
