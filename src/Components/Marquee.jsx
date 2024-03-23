import React from 'react';

const Marquee = ({ tittle = 'tittle' }) => {
  return (
    <>
        <h1 className='heading text-[20vw] leading-none uppercase'>{tittle} </h1>
        <div className="h-5 w-5 bg-white rounded-full"></div>
    </>
  );
}

export default Marquee;
