import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from '../../screens/Account/Account';
import Home from '../../screens/Home/Home';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        initialParams={{ disableButtons: true }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={Account}
        initialParams={{ disableButtons: true }}
      />
    </Tab.Navigator>
  );
}
