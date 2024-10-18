import { createContext, useEffect, useState } from 'react';
import run from '../service/geminiService';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState('');
  const [recentChat, setRecentChat] = useState([]);
  const [prevChats, setPrevChats] = useState(() => {
    const savedChats = localStorage.getItem('prevChats');
    const savedTimeStamp = Number(localStorage.getItem('prevChatsTimeStamp'));
    const duration = 1000 * 60 * 60 * 24; // 24 hours
    if (
      savedChats &&
      savedTimeStamp &&
      Date.now() - savedTimeStamp < duration
    ) {
      return JSON.parse(savedChats);
    } else {
      localStorage.removeItem('prevChats');
      localStorage.removeItem('prevChatsTimeStamp');
    }

    return [];
  });
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const duration = 1000 * 60 * 60 * 24; // 24 hours
    const prevChatsTimeStamp = Number(
      localStorage.getItem('prevChatsTimeStamp')
    );
    if (prevChatsTimeStamp && Date.now() - prevChatsTimeStamp > duration) {
      localStorage.removeItem('prevChats');
      localStorage.removeItem('prevChatsTimeStamp');
      setPrevChats([]);
    }
  }, []);

  const delayParagraph = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prevResultData) => prevResultData + nextWord);
    }, 45 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const formatMarkdown = (text) => {
    return text
      .replace(
        /```([\s\S]*?)```/g,
        (_, p1) =>
          `<pre class="bg-darkblue p-4 rounded-xl"><code class="text-neutral-200">${p1.trim()}</code></pre><br />`
      )
      .replace(
        /^## (.*$)/gim,
        '<h2 class="my-0 text-black dark:text-white" style="margin: 0;">$1</h2>'
      )
      .replace(
        /^### (.*$)/gim,
        '<h3 class="my-0 text-neutral-800 dark:text-white" style="margin: 0;">$1</h3>'
      )
      .replace(
        /^\* (.+)/gim,
        '<div><strong class="text-neutral-800 dark:text-white">•</strong> $1</div>'
      )
      .replace(
        /\*\*(.*?)\*\*/gim,
        '<strong class="text-neutral-800 dark:text-white">$1</strong>'
      )
      .replace(/^#$/gim, '<hr />')
      .replace(/^(?!<h2|<h3|<div><strong>•|<pre|<hr)(.+)$/gim, '<p>$1</p>') // Paragraf
      .replace(/<\/p>\s*<p>/g, '</p><p>') 
      .replace(/(<\/h2>|<\/h3>|<\/p>)/g, '$1<br />')
      .replace(/<p><\/p>/g, '<></>')// Hapus tag <p> kosong
      .replace(/<p>\s*<\/p>/g, '<></>');
  };
  

  const onSent = async (prompt) => {
    setResultData('');
    setShowResult(true);
    setLoading(true);

    try {
      const response = await run(prompt);

      const formattedResponse = formatMarkdown(response);
      console.log(formattedResponse);

      const newResponse = formattedResponse.split(' ');

      newResponse.forEach((word, index) => {
        delayParagraph(index, word + ' ');
      });

      setRecentChat(prompt);
      setPrevChats((prevChats) => {
        const updateChats = [...prevChats, prompt];
        localStorage.setItem('prevChats', JSON.stringify(updateChats));
        localStorage.setItem('prevChatsTimeStamp', Date.now());
        return updateChats;
      });
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
    newChat,
    showSidebar,
    setShowSidebar,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
