import React from 'react';

const Loader = () => {
  return (
    <div className='w-full flex flex-col gap-3'>
      <hr className='h-5 rounded-sm border-0 bg-[800px_50px] bg-neutral-200 bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] animate-loading' />
      <hr className='h-5 rounded-sm border-0 bg-[800px_50px] bg-neutral-200 bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] animate-loading' />
      <hr className='h-5 rounded-sm border-0 bg-[800px_50px] bg-neutral-200 bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] animate-loading' />
    </div>
  );
};

export default Loader;
