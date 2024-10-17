import { useContext } from 'react';
import { Context } from '../../context/Context';
import { MessageSquare } from 'lucide-react';

const ChatHistory = () => {
  const { onSent, prevChats, setRecentChat } = useContext(Context);
  return (
    <div className='flex flex-col'>
      <p className='mt-6 mb-2 ps-3  text-gray-700 dark:text-neutral-200 transition-all duration-300 ease'>
        Recent
      </p>
      {prevChats?.map((chat, index) => (
        <button
          className='flex items-start gap-3 p-3 pe-5 bg-gray-100 dark:bg-darkmode-secondary hover:bg-gray-200 dark:hover:bg-darkmode-hover rounded-[50px] text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 cursor-pointer animate-fadeIn transition-all duration-300 ease'
          aria-label='Open Recent Chat'
          key={index}
          onClick={() => {
            onSent(chat);
            setRecentChat(chat);
          }}
        >
          <MessageSquare className='w-5' />
          <p>{chat.length > 20 ? `${chat.slice(0, 20)}...` : chat}</p>
        </button>
      ))}
    </div>
  );
};

export default ChatHistory;