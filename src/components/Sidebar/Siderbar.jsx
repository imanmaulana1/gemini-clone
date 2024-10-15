import { useState } from 'react';
import {
  AlignJustify,
  CircleHelp,
  History,
  MessageSquare,
  Plus,
  Settings,
} from 'lucide-react';

const Siderbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav className='min-h-screen pt-4 pb-6 px-3 inline-flex flex-col justify-between bg-gray-100 transition-all duration-300 ease'>
      <div
        className={`flex flex-col ${
          collapsed ? 'items-start' : 'items-center'
        }`}
      >
        <button
          className='block cursor-pointer bg-gray-100 hover:bg-gray-200 rounded-[50px] p-3'
          aria-label='Toggle Menu'
          onClick={() => setCollapsed((prevState) => !prevState)}
        >
          <AlignJustify className='w-6' />
        </button>
        <button
          className={`${
            collapsed ? 'w-auto px-4 rounded-[50px]' : 'w-10 px-0 rounded-full'
          } mt-14 inline-flex items-center justify-center gap-3 h-10  bg-gray-200 hover:bg-gray-300 text-sm text-neutral-600 hover:text-neutral-700 cursor-pointer transition-colors duration-300 ease`}
          aria-label='Start a New Chat'
        >
          <Plus className='w-5' />
          {collapsed && <p>New Chat</p>}
        </button>
        {collapsed && (
          <div className='flex flex-col'>
            <p className='mt-6 mb-2 ps-3  text-gray-700'>Recent</p>
            <button
              className='flex items-start gap-3 p-3 pe-5 bg-gray-100 hover:bg-gray-200 rounded-[50px] text-neutral-500 hover:text-neutral-700 cursor-pointer'
              aria-label='Open Recent Chat'
            >
              <MessageSquare className='w-5' />
              <p>Creating a News Portal Using ...</p>
            </button>
          </div>
        )}
      </div>
      <div
        className={`flex flex-col ${
          collapsed ? 'items-start' : 'items-center'
        }`}
      >
        <button
          className={`flex items-start gap-3 p-3 ${
            collapsed ? 'pe-5 w-full' : ''
          } bg-gray-100 hover:bg-gray-200 rounded-[50px] text-neutral-800 cursor-pointer`}
          aria-label='Get Help'
        >
          <CircleHelp className='w-5' />
          {collapsed && <p>Help</p>}
        </button>
        <button
          className={`flex items-start gap-3 p-3 ${
            collapsed ? 'pe-5 w-full' : ''
          } bg-gray-100 hover:bg-gray-200 rounded-[50px] text-neutral-800 cursor-pointer`}
          aria-label='View Activity'
        >
          <History className='w-5' />
          {collapsed && <p>Activity</p>}
        </button>
        <button
          className={`flex items-start gap-3 p-3 ${
            collapsed ? 'pe-5 w-full' : ''
          } bg-gray-100 hover:bg-gray-200 rounded-[50px] text-neutral-800 cursor-pointer`}
          aria-label='Open Settings'
        >
          <Settings className='w-5' />
          {collapsed && <p>Settings</p>}
        </button>
      </div>
    </nav>
  );
};

export default Siderbar;
