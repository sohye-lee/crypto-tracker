import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

// const darkTheme = {
//   textcolor: 'whitesmoke',
//   backgroundColor: 'black',
// };

// const lightTheme = {
//   textColor: 'black',
//   backgroundColor: 'whitesmoke',
// };

// const root = ReactDOM.createRoot(document.getElementById('root') as Element);
// root.render(
//   <React.StrictMode>
//     <ThemeProvider theme={darkTheme}>
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>
// );
const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
