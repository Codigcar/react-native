import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../Screen/SettingsScreen';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico=() => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={StackNavigator} />
      <Drawer.Screen name="Article" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}