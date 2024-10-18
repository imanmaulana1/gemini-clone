import { useContext } from 'react';
import { Context } from '../../context/Context';

import { AvaIcon, Loader } from '../../components';

import { icons } from '../../assets/icons';

const ChatWindow = () => {
  const { recentChat, resultData, loading } = useContext(Context);
  return (
    <div className='px-[5%] max-h-[76vh] md:max-h-[80vh] lg:max-h-[75vh] xl:max-h-[78vh] pb-4 overflow-y-scroll scrollbar'>
      <div className='flex items-center gap-5 my-10'>
        <AvaIcon icons={icons.user_icon} alt='User Icon' />
        <p className='font-light text-black dark:text-white transition-colors duration-300 ease'>
          {recentChat}
        </p>
      </div>
      <div className='w-full flex items-start gap-5'>
        <AvaIcon
          icons={icons.gemini_icon}
          classes={loading ? 'animate-spin' : ''}
        />
        {loading ? (
          <Loader />
        ) : (
          <div
            dangerouslySetInnerHTML={{ __html: resultData }}
            className='prose prose-pre:whitespace-pre-wrap prose-pre:break-words text-md prose-h2:text-black dark:prose-h2:text-white prose-h3:text-black dark:prose-h3:text-white prose-p:text-black dark:prose-p:text-white text-black dark:text-white font-light leading-loose transition-colors duration-300 ease'
          ></div>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
