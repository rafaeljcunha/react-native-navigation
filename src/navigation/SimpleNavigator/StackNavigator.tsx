import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../../screens/Account/Account';
import Home from '../../screens/Home/Home';
import CreditCards from '../../screens/CreditCards/CreditCards';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="AccountScreen" component={Account} />
      <Stack.Screen
        name="CreditCards"
        component={CreditCards}
        initialParams={{ showDescription: false }}
      />
    </Stack.Navigator>
  );
}
