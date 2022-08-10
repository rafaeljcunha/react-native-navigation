import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Authenticated } from '../../../screens/AuthenticationFlow/modules';

const Tab = createBottomTabNavigator();

export default function AuthTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Authenticated"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Authenticated" component={Authenticated} />
    </Tab.Navigator>
  );
}
