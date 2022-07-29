/* import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screen/Login/index";


const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={Index}
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
        <Stack.Screen name="Cadastro" component={Cadastro} 
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 */