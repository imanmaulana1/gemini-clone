import { AlignJustify } from 'lucide-react';
const ButtonHamburger = ({ onClick, classes }) => {
  return (
    <button
      className={`block text-neutral-600 dark:text-white cursor-pointer ${classes}`}
      aria-label='Toggle Menu'
      onClick={onClick}
    >
      <AlignJustify className='w-6' />
    </button>
  );
};

export default ButtonHamburger;
