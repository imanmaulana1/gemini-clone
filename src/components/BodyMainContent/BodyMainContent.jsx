import { useContext } from 'react';
import { Context } from '../../context/Context';
import { ChatWindow, Greeting } from '../../components';

const BodyMainContent = () => {
  const { showResult } = useContext(Context);
  return (
    <div
      className={`${
        !showResult ? 'flex items-center justify-center' : ''
      } max-w-[900px] h-[75vh] mx-auto`}
    >
      {!showResult ? <Greeting /> : <ChatWindow />}
    </div>
  );
};

export default BodyMainContent;
