import { useContext } from 'react';
import { Context } from '../../../context/Context';

const InputChat = () => {
  const { input, setInput } = useContext(Context);
  return (
    <input
      type='text'
      placeholder='Enter a prompt here'
      className='w-48 lg:flex-1 bg-transparent border-0 outline-0 p-2 text-md text-gray-800 dark:text-gray-300 transition-colors duration-300 ease'
      aria-label='Prompt Input'
      onChange={(e) => setInput(e.target.value)}
      value={input}
    />
  );
};

export default InputChat;
