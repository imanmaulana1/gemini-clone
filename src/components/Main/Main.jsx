import { useContext } from 'react';
import { icons } from '../../assets/icons';
import { AlignJustify, Mic, Plus } from 'lucide-react';
import { Context } from '../../context/Context';


const Main = () => {
  const {
    onSent,
    recentChat,
    showResult,
    resultData,
    input,
    setInput,
    loading,
    newChat,
    setShowSidebar,
  } = useContext(Context);

  return (
    <main className='min-h-screen flex-1 relative'>
      <header className='flex items-center justify-between text-xl py-5 px-3 text-neutral-700'>
        <div className='flex items-center gap-3 relative z-20'>
          <button
            className='block lg:hidden cursor-pointer'
            aria-label='Toggle Menu'
            onClick={() => setShowSidebar((prevState) => !prevState)}
          >
            <AlignJustify className='w-6' />
          </button>

          <h1 className='font-medium'>Gemini</h1>
        </div>
        <div className='flex items-center gap-3'>
          <button
            className='inline-flex lg:hidden w-10 p-0 rounded-full items-center justify-center gap-3 h-10  bg-gray-200 hover:bg-gray-300 text-sm text-neutral-600 hover:text-neutral-700 cursor-pointer transition-colors duration-300 ease'
            aria-label='Start a New Chat'
            onClick={() => newChat()}
          >
            <Plus className='w-5' />
          </button>
          <img
            src={icons.user_icon}
            alt='User Icon'
            className='w-10 rounded-full'
          />
        </div>
      </header>
      <div className='max-w-[900px] mx-auto'>
        {!showResult ? (
          <>
            <section className='my-60 text-3xl sm:text-[40px] lg:text-[56px] lg:leading-tight text-center text-neutral-600 font-medium p-5'>
              <p>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#6b45f2] via-[#9a3bd4] to-[#dc5267]'>
                  Hello, Coder.
                </span>
              </p>
              <p>How can I help?</p>
            </section>
          </>
        ) : (
          <div className='px-[5%] max-h-[75vh] overflow-y-scroll scrollbar'>
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
                  <hr className='h-5 rounded-sm border-0 bg-[800px_50px] bg-neutral-200 bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] animate-loading' />
                  <hr className='h-5 rounded-sm border-0 bg-[800px_50px] bg-neutral-200 bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] animate-loading' />
                  <hr className='h-5 rounded-sm border-0 bg-[800px_50px] bg-neutral-200 bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] animate-loading' />
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
          className='flex items-center justify-between gap-5 bg-input py-3 px-5 rounded-[50px] '
        >
          <input
            type='text'
            placeholder='Enter a prompt here'
            className='w-48 lg:flex-1 bg-transparent border-0 outline-0 p-2 text-md text-gray-800'
            aria-label='Prompt Input'
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <div className='flex items-center gap-0 lg:gap-1 '>
            <button
              className='cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-full p-2'
              aria-label='Gallery'
            >
              <img
                src={icons.gallery_icon}
                alt='Gallery Icon'
                className='w-5 lg:w-6'
              />
            </button>
            <button
              className='cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-full p-1 lg:p-2'
              aria-label='Microphone'
            >
              <Mic color='#2f3137' className='w-5 lg:w-6' />
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
