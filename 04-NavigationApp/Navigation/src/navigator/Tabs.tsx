import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../Screen/Tab1Screen';
import {Tab2Screen} from '../Screen/Tab2Screen';
import {Tab3Screen} from '../Screen/Tab3Screen';
import {StackNavigator} from './StackNavigator';
import {colores} from '../theme/Styles';
import { Text } from 'react-native';

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
        labelStyle:{
          fontSize:13
        }
      }}
      screenOptions={({route}) => ({
        tabBarIcon:({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName='StackNavigation'
            break;
            case 'Tab2Screen':
              iconName='T2'
            break;
            case 'Tab3Screen':
              iconName='T3'
            break;
          }
          return <Text>{iconName}</Text>
        }
      })}
      >
      {/* <Tab.Screen name="Tab1Screen" options={{title:'Tab1', tabBarIcon: (props) => <Text style={{color:props.color}} >Hola</Text> }} component={StackNavigator} /> */}
      <Tab.Screen name="Tab1Screen" component={StackNavigator} />
      <Tab.Screen name="Tab2Screen" component={Tab2Screen} />
      <Tab.Screen name="Tab3Screen" component={Tab3Screen} />
    </Tab.Navigator>
  );
};
