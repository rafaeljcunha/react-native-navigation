import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../screens/Account/Account';
import Home from '../screens/Home/Home';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="AccountScreen" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
