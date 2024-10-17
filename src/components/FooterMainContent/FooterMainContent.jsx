import { useContext } from 'react';
import { Context } from '../../context/Context';
import { ButtonInput, InputChat } from '../../components';
import { Mic, ImagePlus } from 'lucide-react';

const FooterMainContent = () => {
  const { onSent, input } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSent(input);
  };
  return (
    <footer className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[900px] px-5'>
      <form
        onSubmit={handleSubmit}
        className='flex items-center justify-between gap-5 bg-input dark:bg-darkmode-secondary py-3 px-5 rounded-[50px] transition-colors duration-300 ease'
      >
        <InputChat />

        <div className='flex items-center gap-4 '>
          <ButtonInput label={'Gallery'} icon={ImagePlus} />
          <ButtonInput label={'Microphone'} icon={Mic} />
        </div>
      </form>
      <p className='text-sm text-neutral-500 dark:text-neutral-400 text-center font-light py-4 transition-colors duration-300 ease'>
        Gemini can make mistakes, so double-check it
      </p>
    </footer>
  );
};

export default FooterMainContent;
