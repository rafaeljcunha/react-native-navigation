import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Account from '../screens/Account/Account';
import Home from '../screens/Home/Home';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen" component={Home} />
        <Drawer.Screen name="AccountScreen" component={Account} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
