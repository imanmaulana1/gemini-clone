import { useContext } from 'react';
import { Context } from '../../context/Context';
import { ChatWindow, Greeting } from '../../components';

const BodyMainContent = () => {
  const { showResult } = useContext(Context);
  return (
    <div className='max-w-[900px] mx-auto'>
      {!showResult ? <Greeting /> : <ChatWindow />}
    </div>
  );
};

export default BodyMainContent;
