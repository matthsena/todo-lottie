import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar, useColorScheme } from 'react-native';

export interface ThemeProviderType {
  colors: {
    primary: string;
    font: string;
    background: string;
  };
}

const lightTheme: ThemeProviderType = {
  colors: {
    primary: '#0000e8',
    font: '#000',
    background: '#FFF',
  },
};

const darkTheme: ThemeProviderType = {
  colors: {
    primary: '#0000e8',
    font: '#FFF',
    background: '#000',
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
