import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../Screen/Tab1Screen';
import { Tab2Screen } from '../Screen/Tab2Screen';
import { Tab3Screen } from '../Screen/Tab3Screen';

const Tab = createBottomTabNavigator();

export  const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1Screen" component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" component={Tab2Screen} />
      <Tab.Screen name="Tab3Screen" component={Tab3Screen} />
    </Tab.Navigator>
  );
}