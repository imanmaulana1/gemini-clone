import { useContext } from 'react';
import { Context } from '../../context/Context';

import { AvaIcon, Loader } from '../../components';

import { icons } from '../../assets/icons';

const ChatWindow = () => {
  const { recentChat, resultData, loading } = useContext(Context);
  return (
    <div className='px-[5%] max-h-[75vh] overflow-y-scroll scrollbar'>
      <div className='flex items-center gap-5 my-10'>
        <AvaIcon icons={icons.user_icon} alt='User Icon' />
        <p className='font-light'>{recentChat}</p>
      </div>
      <div className='flex items-start gap-5'>
        <AvaIcon icons={icons.gemini_icon} />
        {loading ? (
          <Loader />
        ) : (
          <p
            dangerouslySetInnerHTML={{ __html: resultData }}
            className='text-md text-black font-light leading-loose '
          ></p>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
