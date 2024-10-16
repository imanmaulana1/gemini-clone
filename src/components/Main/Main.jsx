import { useContext } from 'react';
import { icons } from '../../assets/icons';
import { Mic } from 'lucide-react';
import { Context } from '../../context/Context';
import './Main.css';

const Main = () => {
  const {
    onSent,
    recentChat,
    showResult,
    resultData,
    input,
    setInput,
    loading,
  } = useContext(Context);

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
        {!showResult ? (
          <>
            <section className='my-60 text-3xl sm:text-[40px] lg:text-[56px] lg:leading-tight text-center text-neutral-600 font-medium p-5'>
              <p>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#6b45f2] via-[#9a3bd4] to-[#dc5267]'>
                  Hello, Dev.
                </span>
              </p>
              <p>How can I help?</p>
            </section>
          </>
        ) : (
          <div className='px-[5%] max-h-[75vh] overflow-y-scroll result-scrollbar'>
            <div className='flex items-center gap-5 my-10'>
              <img src={icons.user_icon} alt='' className='w-10 rounded-full' />
              <p className='font-light'>{recentChat}</p>
            </div>
            <div className='flex items-start gap-5'>
              <img
                src={icons.gemini_icon}
                alt=''
                className='w-10 rounded-full'
              />
              {loading ? (
                <div className='w-full flex flex-col gap-3'>
                  <hr className='h-5 rounded-sm border-0 bg-[800px_50px] bg-neutral-200 bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] loading' />
                  <hr className='h-5 rounded-sm border-0 bg-[800px_50px] bg-neutral-200 bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] loading' />
                  <hr className='h-5 rounded-sm border-0 bg-[800px_50px] bg-neutral-200 bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] loading' />
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className='text-md text-black font-light leading-loose '
                ></p>
              )}
            </div>
          </div>
        )}
      </div>
      <footer className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[900px] px-5'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSent(input);
          }}
          className='flex items-center justify-between gap-5 bg-input py-3 px-5 rounded-[50px]'
        >
          <input
            type='text'
            placeholder='Enter a prompt here'
            className='flex-1 bg-transparent border-0 outline-0 p-2 text-md text-gray-800'
            aria-label='Prompt Input'
            onChange={(e) => setInput(e.target.value)}
            value={input}
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
