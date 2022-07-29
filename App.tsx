import React from 'react'
import { ThemeProvider } from 'styled-components';

import themes from '.src/themes';

import Login from './src/screens/Login';


export default function App() {
  return (
      <ThemeProvider theme={themes.dark}>
      <Login/>
      </ThemeProvider>
  );
}
