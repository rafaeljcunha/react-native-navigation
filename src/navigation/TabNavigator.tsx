import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Account from '../screens/Account/Account';
import Home from '../screens/Home/Home';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="AccountScreen">
        <Tab.Screen name="AccountScreen" component={Account} />
        <Tab.Screen name="HomeScreen" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
