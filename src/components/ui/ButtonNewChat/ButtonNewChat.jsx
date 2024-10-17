import { Plus } from 'lucide-react';

const ButtonNewChat = ({ collapsed = false, onClick, classes }) => {
  return (
    <button
      className={`${
        collapsed ? 'w-10 px-0 rounded-full' : 'w-auto px-4 rounded-[50px]'
      } inline-flex items-center justify-center gap-3 h-10  bg-gray-200 dark:bg-darkmode-tertiary hover:bg-gray-300 text-sm text-neutral-600 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-600 cursor-pointer transition-colors duration-300 ease ${classes}`}
      aria-label='Start a New Chat'
      onClick={onClick}
    >
      <Plus className='w-5' />
      {!collapsed && <p>New Chat</p>}
    </button>
  );
};

export default ButtonNewChat;
