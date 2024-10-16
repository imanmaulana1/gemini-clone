import { createContext, useState } from 'react';
import run from '../service/geminiService';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState('');
  const [recentChat, setRecentChat] = useState([]);
  const [prevChats, setPrevChats] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');

  const delayParagraph = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prevResultData) => prevResultData + nextWord);
    }, 40 * index);
  };

  const formatMarkdown = (text) => {
    return text
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
      .replace(/\*(.*?)\*/g, '<i>$1</i>')
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      .replace(/^\* (.+)$/gm, '<p>$1</p>')
      .replace(/\n/g, '<br />');
  };

  const onSent = async (prompt) => {
    setResultData('');
    setShowResult(true);
    setLoading(true);

    try {
      const response = await run(prompt);
      console.log(response);

      const formattedResponse = formatMarkdown(response);

      const newResponse = formattedResponse.split(' ');

      newResponse.forEach((word, index) => {
        delayParagraph(index, word + ' ');
      });

      setRecentChat(prompt);
      setPrevChats((prevChats) => [...prevChats, prompt]);
    } catch (error) {
      console.error('Error sending prompt: ', error);
      setResultData('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  const contextValue = {
    prevChats,
    setPrevChats,
    recentChat,
    setRecentChat,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    onSent,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
