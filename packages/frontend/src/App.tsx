import React from 'react';

import { ThemeProvider } from 'styled-components';

import dark from './styles/themes/dark';

import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes';

const App: React.FC = () => (
  <ThemeProvider theme={dark}>
    <Routes />
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
