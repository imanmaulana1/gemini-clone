import { createContext, useState } from 'react';
import run from '../service/geminiService';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState('');
  const [recentChat, setRecentChat] = useState([]);
  const [prevChat, setPrevChat] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');

  const onSent = async (prompt) => {
    await run(prompt);
  };

  const contextValue = {};

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
