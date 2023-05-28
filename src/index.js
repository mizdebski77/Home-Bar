import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './core/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './core/theme';
import { GlobalStyle } from './core/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>

);
