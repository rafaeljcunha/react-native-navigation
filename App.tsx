import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthenticatedProvider } from './src/screens/AuthenticationFlow/providers';

// Available Navigations
import {
  AuthNavigation,
  StackWithTabsNavigation,
} from './src/navigation/NestingNavigator';
import DrawerNavigator from './src/navigation/SimpleNavigator/DrawerNavigator';
import StackNavigator from './src/navigation/SimpleNavigator/StackNavigator';
import TabNavigator from './src/navigation/SimpleNavigator/TabNavigator';

export default function App() {
  return (
    <AuthenticatedProvider>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </AuthenticatedProvider>
  );
}
