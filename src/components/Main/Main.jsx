import React from 'react';
import { icons } from '../../assets/icons';
import { Compass, Mic, SendHorizonal } from 'lucide-react';

const Main = () => {
  return (
    <main className='min-h-screen flex-1 relative'>
      <header className='flex items-center justify-between text-xl p-5 text-neutral-700'>
        <h1 className='font-medium'>Gemini</h1>
        <img
          src={icons.user_icon}
          alt='User Icon'
          className='w-10 rounded-full'
        />
      </header>
      <div className='max-w-[900px] mx-auto'>
        <section className='my-60 text-[56px] text-center text-neutral-600 font-medium p-5'>
          <p>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#6b45f2] via-[#9a3bd4] to-[#dc5267]'>
              Hello, Dev.
            </span>
          </p>
          <p>How can I help?</p>
        </section>
      </div>
      <footer className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[900px] px-5'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('submitted');
          }}
          className='flex items-center justify-between gap-5 bg-neutral-100 py-3 px-5 rounded-[50px]'
        >
          <input
            type='text'
            placeholder='Enter a prompt here'
            className='flex-1 bg-transparent border-0 outline-0 p-2 text-md text-gray-800'
            aria-label='Prompt Input'
          />
          <div className='flex items-center gap-1'>
            <button
              className='cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-full p-2'
              aria-label='Gallery'
            >
              <img
                src={icons.gallery_icon}
                alt='Gallery Icon'
                className='w-6'
              />
            </button>
            <button
              className='cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-full p-2'
              aria-label='Microphone'
            >
              <Mic color='#2f3137' />
            </button>
          </div>
        </form>
        <p className='text-sm text-neutral-500 text-center font-light py-4'>
          Gemini can make mistakes, so double-check it
        </p>
      </footer>
    </main>
  );
};

export default Main;
