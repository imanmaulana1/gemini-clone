import { useContext } from 'react';
import { Context } from '../../context/Context';
import { CircleHelp, History, MessageSquare, Settings } from 'lucide-react';

const SidebarMobile = () => {
  const { onSent, prevChats, setRecentChat, showSidebar } = useContext(Context);
  return (
    <nav
      className={`fixed flex flex-col justify-between lg:hidden top-0 bottom-0 w-[80%] pb-8 bg-gray-100 z-10 transition-all duration-300 ease ${
        showSidebar ? 'left-0' : '-left-[80%]'
      }`}
    >
      <div className='flex flex-col overflow-y-scroll h-[30vh] md:h-[60vh] px-2 mt-20 scrollbar'>
        <p className=' ps-4  text-gray-700'>Recent</p>
        {prevChats?.map((chat, index) => (
          <button
            className='flex items-start gap-3 p-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-[50px] text-neutral-500 hover:text-neutral-700 cursor-pointer animate-fadeIn'
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
      <div className='flex flex-col items-start px-2'>
        <button
          className='flex items-start gap-3 p-3 bg-gray-100 hover:bg-gray-200 rounded-[50px] text-neutral-800 cursor-pointer'
          aria-label='Get Help'
        >
          <CircleHelp className='w-5' />
          <p>Help</p>
        </button>
        <button
          className='flex items-start gap-3 p-3 bg-gray-100 hover:bg-gray-200 rounded-[50px] text-neutral-800 cursor-pointer'
          aria-label='View Activity'
        >
          <History className='w-5' />
          <p>Activity</p>
        </button>
        <button
          className='flex items-start gap-3 p-3 bg-gray-100 hover:bg-gray-200 rounded-[50px] text-neutral-800 cursor-pointer'
          aria-label='Open Settings'
        >
          <Settings className='w-5' />
          <p>Settings</p>
        </button>
      </div>
    </nav>
  );
};

export default SidebarMobile;
