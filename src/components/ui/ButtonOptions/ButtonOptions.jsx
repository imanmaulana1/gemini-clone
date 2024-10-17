const ButtonOptions = ({ collapsed, icon: Icon, text, label }) => {
  return (
    <button
      className={`flex items-start gap-3 p-3 ${
        collapsed ? '' : 'pe-5 w-full'
      } bg-gray-100 dark:bg-darkmode-secondary hover:bg-gray-200 hover:dark:bg-darkmode-hover rounded-[50px] text-neutral-800 dark:text-neutral-200 cursor-pointer transition-all duration-300 ease`}
      aria-label={`${label}`}
    >
      <Icon className='w-5' />
      {!collapsed && <p>{text}</p>}
    </button>
  );
};

export default ButtonOptions;
