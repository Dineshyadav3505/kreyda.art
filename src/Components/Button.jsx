import React from 'react';

const Button = ({ title = 'hello' }) => {
  return (
  <button className={`px-3 text-[3vw] text-zinc-900 rounded-2xl uppercase font-medium ${title.length === 0 ? '' : 'border-zinc-900 border-[1px]'} mr-2`}>{title}</button>  );
}

export default Button;
