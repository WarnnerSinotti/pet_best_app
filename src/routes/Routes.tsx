import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Menu from "../screens/Menu";

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
        <Stack.Screen name="Menu" component={Menu} 
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
