const ButtonOptions = ({ collapsed, icon: Icon, text, label }) => {
  return (
    <button
      className={`flex items-start gap-3 p-3 ${
        collapsed ? '' : 'pe-5 w-full'
      } bg-gray-100 hover:bg-gray-200 rounded-[50px] text-neutral-800 cursor-pointer`}
      aria-label={`${label}`}
    >
      <Icon className='w-5' />
      {!collapsed && <p>{text}</p>}
    </button>
  );
};

export default ButtonOptions;
