import { useContext } from 'react';
import { Context } from '../../context/Context';
import {ChatHistory, SidebarMenu} from '../../components';

const SidebarMobile = () => {
  const { showSidebar } = useContext(Context);
  return (
    <nav
      className={`fixed flex flex-col justify-between lg:hidden top-0 bottom-0 w-[80%] pb-8 bg-gray-100 dark:bg-darkmode-secondary z-10 transition-all duration-300 ease ${
        showSidebar ? 'left-0' : '-left-[80%]'
      }`}
    >
      <div className='flex flex-col overflow-y-scroll h-[30vh] md:h-[60vh] px-2 mt-20 scrollbar'>
        <ChatHistory />
      </div>
      <div className='flex flex-col items-start px-2'>
        <SidebarMenu />
      </div>
    </nav>
  );
};

export default SidebarMobile;
