import ButtonOptions from '../ui/ButtonOptions/ButtonOptions';
import { CircleHelp, History, Settings } from 'lucide-react';

const SidebarMenu = ({ collapsed = false }) => {
  const menuItems = [
    {
      icon: CircleHelp,
      text: 'Help',
      label: 'Get Help',
    },
    {
      icon: History,
      text: 'Activity',
      label: 'View Activity',
    },
    {
      icon: Settings,
      text: 'Settings',
      label: 'Open Settings',
    },
  ];
  return (
    <div
      className={`flex flex-col ${collapsed ? 'items-center' : 'items-start'}`}
    >
      {menuItems.map((item, index) => (
        <ButtonOptions
          key={index}
          collapsed={collapsed}
          icon={item.icon}
          text={item.text}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default SidebarMenu;
