import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import {
  ButtonHamburger,
  ButtonNewChat,
  ChatHistory,
  SidebarMenu,
} from '../../components';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { newChat } = useContext(Context);
  return (
    <nav
      className={`hidden lg:inline-flex flex-col justify-between min-h-screen pt-4 pb-6 px-3  bg-gray-100 transition-all duration-300 ease ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div
        className={`flex flex-col ${
          collapsed ? 'items-center' : 'items-start'
        }`}
      >
        <ButtonHamburger
          onClick={() => setCollapsed((prevState) => !prevState)}
          classes={'bg-gray-100 hover:bg-gray-200 rounded-[50px] p-3'}
        />

        <ButtonNewChat
          collapsed={collapsed}
          onClick={() => newChat()}
          classes={'mt-14'}
        />

        {!collapsed && <ChatHistory />}
      </div>
      <SidebarMenu collapsed={collapsed} />
    </nav>
  );
};

export default Sidebar;
