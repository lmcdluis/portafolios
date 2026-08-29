import React from 'react';
import { LangProvider } from './i18n/LangContext';
import { ThemeProvider } from './theme/ThemeContext';
import Home from './pages/home/index';

export const App: React.FC = () => (
  <ThemeProvider>
    <LangProvider>
      <Home />
    </LangProvider>
  </ThemeProvider>
);

export default App;
