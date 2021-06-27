import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialTopTab1Screen } from '../Screen/MaterialTopTab1Screen';
import { MaterialTopTab2Screen } from '../Screen/MaterialTopTab2Screen';
import { MaterialTopTab3Screen } from '../Screen/MaterialTopTab3Screen';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MaterialTopTab1Screen" component={MaterialTopTab1Screen} />
      <Tab.Screen name="MaterialTopTab2Screen" component={MaterialTopTab2Screen} />
      <Tab.Screen name="MaterialTopTab3Screen" component={MaterialTopTab3Screen} />
    </Tab.Navigator>
  );
}
