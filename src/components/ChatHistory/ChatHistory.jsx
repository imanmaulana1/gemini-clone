import { useContext } from 'react';
import { Context } from '../../context/Context';
import { MessageSquare } from 'lucide-react';

const ChatHistory = () => {
  const { onSent, prevChats, setRecentChat } = useContext(Context);
  return (
    <div className='flex flex-col'>
      <p className='mt-6 mb-2 ps-3  text-gray-700'>Recent</p>
      {prevChats?.map((chat, index) => (
        <button
          className='flex items-start gap-3 p-3 pe-5 bg-gray-100 hover:bg-gray-200 rounded-[50px] text-neutral-500 hover:text-neutral-700 cursor-pointer animate-fadeIn'
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
