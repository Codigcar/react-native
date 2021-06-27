import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../Screen/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico=() => {

  const {width, height} = useWindowDimensions();

  return (
    <Drawer.Navigator drawerType={ width > height ? 'permanent': 'front' } >
      <Drawer.Screen name="Feed"    options={{title:'Home'}} component={StackNavigator} />
      <Drawer.Screen name="Article" options={{title:'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}