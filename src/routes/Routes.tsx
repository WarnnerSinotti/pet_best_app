import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Login from '../screens/Login';
import Menu from '../screens/Menu';
import Step01 from '../screens/Step01';
import Signup from '../screens/Signup';
import Teste from '../screens/Teste';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: '',
            headerTransparent: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Step01"
          component={Step01}
          options={{
            title: '',
            gestureEnabled: false,
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            title: 'signup',
            headerTransparent: true,
            gestureEnabled: true,
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
            headerShown: false, //desabilitar depois ativando titulo
          }}
        />
        <Stack.Screen
          name="Teste"
          component={Teste}
          options={{
            title: 'Teste',
            headerTransparent: true,
            gestureEnabled: true,
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
            headerShown: false, //desabilitar depois ativando titulo
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
