import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../Screen/Tab1Screen';
import {Tab2Screen} from '../Screen/Tab2Screen';
import {Tab3Screen} from '../Screen/Tab3Screen';
import {StackNavigator} from './StackNavigator';
import {colores} from '../theme/Styles';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colores.primary,
        style: {
          borderTopColor: colores.seconday,
          borderTopWidth: 5,
          elevation: 30,
        },
      }}>
      <Tab.Screen name="Tab1Screen" component={StackNavigator} />
      <Tab.Screen name="Tab2Screen" component={Tab2Screen} />
      <Tab.Screen name="Tab3Screen" component={Tab3Screen} />
    </Tab.Navigator>
  );
};
