import { useContext } from 'react';
import { ThemeContext } from '../../context/Theme';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className='flex items-center justify-center'>
      <div
        className={`relative inline-flex items-center cursor-pointer transition-colors ${
          darkMode ? 'bg-blue-100' : 'bg-neutral-200'
        } rounded-full w-16 h-7 p-1 px-3`}
        onClick={() => setDarkMode(!darkMode)}
      >
        <Moon
          fill='#210071'
          className={`text-blue-800 w-6 h-6 transition-transform duration-300 ease-in-out ${
            darkMode ? 'translate-x-7 opacity-1' : 'translate-x-0 opacity-0'
          }`}
        />

        <Sun
          className={`text-neutral-500 w-6 h-6 transition-transform duration-300 ease-in-out ${
            darkMode ? 'translate-x-0 opacity-0' : '-translate-x-7 opacity-1'
          }`}
        />
      </div>
    </div>
  );
};

export default DarkModeToggle;
