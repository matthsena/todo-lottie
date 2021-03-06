import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar, useColorScheme } from 'react-native';

export interface ThemeProviderType {
  colors: {
    primary: string;
    font: string;
    background: string;
    bottomSheet: string;
  };
}

const lightTheme: ThemeProviderType = {
  colors: {
    primary: '#0000e8',
    font: '#000',
    background: '#FFF',
    bottomSheet: '#EEE',
  },
};

const darkTheme: ThemeProviderType = {
  colors: {
    primary: '#0000e8',
    font: '#FFF',
    background: '#000',
    bottomSheet: '#141414',
  },
};

export default function Theme({ children }: { children: JSX.Element }) {
  const appearanceMode = useColorScheme();

  return (
    <ThemeProvider theme={appearanceMode === 'dark' ? darkTheme : lightTheme}>
      <StatusBar barStyle={'light-content'} />
      {children}
    </ThemeProvider>
  );
}
