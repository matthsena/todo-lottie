import React from 'react';
import { useColorScheme } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import Login from './src/screens/Login';
import Home from './src/screens/Home';

export interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  children?: JSX.Element;
}

enableScreens();
const Stack = createNativeStackNavigator();

export default function Routes() {
  const theme = useColorScheme();

  const MyTheme = {
    dark: theme === 'dark' ? true : false,
    colors: {
      primary: '#fff',
      background: 'rgb(255, 255, 255)',
      card: '#0000e8',
      text: 'rgb(255, 255, 255)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Tarefas',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
