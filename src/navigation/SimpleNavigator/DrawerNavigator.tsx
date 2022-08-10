import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Account from '../../screens/Account/Account';
import Home from '../../screens/Home/Home';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen
        name="HomeScreen"
        component={Home}
        initialParams={{ disableButtons: true }}
      />
      <Drawer.Screen
        name="AccountScreen"
        component={Account}
        initialParams={{ disableButtons: true }}
      />
    </Drawer.Navigator>
  );
}
