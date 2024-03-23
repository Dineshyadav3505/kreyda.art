import React from 'react';
import Button from './Button';

const Product = ({ data }) => {
  return (
    <div className='h-96 w-full mt-10 rounded-2xl overflow-hidden'>
      <div className="img h-[75%]">
        <img className='rounded-2xl overflow-hidden' src={data.url} alt="//" />
      </div>
      <h1 className='text-2xl capitalize text-black py-2'>{data.name}</h1>
      <Button title={data.tittle1} />
      <Button title={data.tittle2} />
      <Button title={data.tittle3} />
    </div>
  );
}

export default Product;