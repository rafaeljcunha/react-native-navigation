import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NonAuthenticated } from '../../../screens/AuthenticationFlow/modules';

const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="NonAuthenticated"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NonAuthenticated" component={NonAuthenticated} />
    </Stack.Navigator>
  );
}
