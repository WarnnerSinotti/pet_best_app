import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Menu from "../screens/Menu";
import Step01 from "../screens/Step01";
import Step02 from "../screens/Step02";
import Step03 from "../screens/Step03";
import Step04 from "../screens/Step04";

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
        <Stack.Screen name="Step01" component={Step01} 
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}/>
        <Stack.Screen name="Step02" component={Step02}
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}/>
        <Stack.Screen name="Step03" component={Step03} 
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}/>
        <Stack.Screen name="Step04" component={Step04} 
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
