import { useContext } from 'react';
import { Context } from '../../context/Context';
import { ButtonInput, InputChat } from '../../components';
import { icons } from '../../assets/icons';
import { Mic } from 'lucide-react';

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
        className='flex items-center justify-between gap-5 bg-input py-3 px-5 rounded-[50px]'
      >
        <InputChat />

        <div className='flex items-center gap-0 lg:gap-1 '>
          <ButtonInput label={'Gallery'} classes={'p-2'}>
            <img
              src={icons.gallery_icon}
              alt='Gallery Icon'
              className='w-5 lg:w-6'
            />
          </ButtonInput>

          <ButtonInput label={'Microphone'} classes={'p-1 lg:p-2'}>
            <Mic color='#2f3137' className='w-5 lg:w-6' />
          </ButtonInput>
        </div>
      </form>
      <p className='text-sm text-neutral-500 text-center font-light py-4'>
        Gemini can make mistakes, so double-check it
      </p>
    </footer>
  );
};

export default FooterMainContent;
