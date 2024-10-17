import { useContext } from 'react';
import { ThemeContext } from '../../../context/Theme';

const ButtonInput = ({ label, icon: Icon }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <button
      className={`cursor-pointer bg-gray-100 dark:bg-darkmode-secondary hover:bg-gray-200 rounded-full transition-colors duration-300 ease `}
      aria-label={label}
    >
      <Icon color={darkMode ? '#bbbbbc' : '#2f3137'} className='w-5 lg:w-6' />
    </button>
  );
};

export default ButtonInput;
