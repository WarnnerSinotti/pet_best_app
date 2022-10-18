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
import Forgot from '../screens/Forgot';
import Shop from '../screens/Shop';
import Bird from '../screens/Animals/Bird';
import Cat from '../screens/Animals/Cat';
import Dog from '../screens/Animals/Dog';
import Fish from '../screens/Animals/Fish';
import Hamster from '../screens/Animals/Hamster';
import Rabbit from '../screens/Animals/Rabbit';
import Turtle from '../screens/Animals/Turtle';

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
          name="Forgot"
          component={Forgot}
          options={{
            title: 'Forgot',
            headerTransparent: true,
            gestureEnabled: true,
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
            headerShown: false, //desabilitar depois ativando titulo
          }}
        />
        <Stack.Screen
          name="Shop"
          component={Shop}
          options={{
            title: 'Shop',
            headerTransparent: true,
            gestureEnabled: true,
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
            headerShown: false, //desabilitar depois ativando titulo
          }}
        />
        <Stack.Screen
          name="Dog"
          component={Dog}
          options={{
            title: 'Dog',
            headerTransparent: true,
            gestureEnabled: true,
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
            headerShown: false, //desabilitar depois ativando titulo
          }}
        />
         <Stack.Screen
          name="Cat"
          component={Cat}
          options={{
            title: 'Cat',
            headerTransparent: true,
            gestureEnabled: true,
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
            headerShown: false, //desabilitar depois ativando titulo
          }}
        />
        <Stack.Screen
          name="Bird"
          component={Bird}
          options={{
            title: 'Bird',
            headerTransparent: true,
            gestureEnabled: true,
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
            headerShown: false, //desabilitar depois ativando titulo
          }}
        />
        <Stack.Screen
          name="Fish"
          component={Fish}
          options={{
            title: 'Fish',
            headerTransparent: true,
            gestureEnabled: true,
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
            headerShown: false, //desabilitar depois ativando titulo
          }}
        />
        <Stack.Screen
          name="Hamster"
          component={Hamster}
          options={{
            title: 'Hamster',
            headerTransparent: true,
            gestureEnabled: true,
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
            headerShown: false, //desabilitar depois ativando titulo
          }}
        />
        <Stack.Screen
          name="Rabbit"
          component={Rabbit}
          options={{
            title: 'Rabbit',
            headerTransparent: true,
            gestureEnabled: true,
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
            headerShown: false, //desabilitar depois ativando titulo
          }}
        />
        <Stack.Screen
          name="Turtle"
          component={Turtle}
          options={{
            title: 'Turtle',
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
