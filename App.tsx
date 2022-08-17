import { useEffect, useState, useCallback } from 'react';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes/Routes';
import { ThemeProvider } from 'styled-components/native';
import { useColorScheme } from 'react-native';
import './src/i18n/i18n';
import themes from './src/themes';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';


export default function App({}) {
  // dark, light, null
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme || 'dark'];


  const [fontsLoaded] = useFonts({
    'Lexend-Bold': require('./assets/fonts/Lexend-Bold.ttf'),
    'Lexend-Light': require('./assets/fonts/Lexend-Light.ttf'),
    'Lexend-Regular': require('./assets/fonts/Lexend-Regular.ttf'),
    'Lexend-SemiBold': require('./assets/fonts/Lexend-SemiBold.ttf'),
    'Nunito-Black': require('./assets/fonts/Nunito-Black.ttf'),
    
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
  }

