import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import Routes from './src/routes/Routes';
import { ThemeProvider } from 'styled-components';
import { useColorScheme } from 'react-native';
import './src/i18n/i18n';

import themes from './src/themes';

import Login from './src/screens/Login';

export default function App({}) {
  // dark, light, null

  const deviceTheme = useColorScheme();

  const theme = themes[deviceTheme || 'dark'];

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
}
