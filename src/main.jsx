import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ContextProvider from './context/Context.jsx';
import ThemeProvider from './context/Theme.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ThemeProvider>
  </StrictMode>
);
