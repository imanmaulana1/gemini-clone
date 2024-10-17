import { useContext } from 'react';
import { Context } from '../../context/Context';

import { ButtonHamburger, ButtonNewChat, AvaIcon } from '../../components';

import { icons } from '../../assets/icons';

const HeaderMainContent = () => {
  const { newChat, setShowSidebar } = useContext(Context);
  return (
    <header className='flex items-center justify-between text-xl py-5 px-3 text-neutral-700'>
      <div className='flex items-center gap-3 relative z-20'>
        <ButtonHamburger
          onClick={() => setShowSidebar((prevState) => !prevState)}
          classes={'lg:hidden'}
        />

        <h1 className='font-medium'>Gemini</h1>
      </div>
      <div className='flex items-center gap-3'>
        <ButtonNewChat
          collapsed={true}
          onClick={() => newChat()}
          classes={'lg:hidden'}
        />

        <AvaIcon icons={icons.user_icon} alt={'User Icon'} />
      </div>
    </header>
  );
};

export default HeaderMainContent;
