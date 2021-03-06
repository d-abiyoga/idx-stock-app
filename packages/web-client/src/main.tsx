import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { GlobalStyle } from './styles/global.styled';
// import { ThemeProvider } from 'styled-components';
// import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    {/* <GlobalStyle /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
