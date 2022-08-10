import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '../SimpleNavigator/TabNavigator';
import CreditCards from '../../screens/CreditCards/CreditCards';

const Stack = createNativeStackNavigator();

export function StackWithTabsNavigation() {
  return (
    <Stack.Navigator initialRouteName="TabNavigator">
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
        initialParams={{ disableButtons: true }}
      />
      <Stack.Screen
        name="CreditCards"
        component={CreditCards}
        initialParams={{ disableButtons: true }}
      />
    </Stack.Navigator>
  );
}
