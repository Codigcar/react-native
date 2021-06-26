import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab2Screen} from '../Screen/Tab2Screen';
import {Tab3Screen} from '../Screen/Tab3Screen';
import {StackNavigator} from './StackNavigator';
import {colores} from '../theme/Styles';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


export const Tabs = () => {
  return Platform.OS === 'ios'
        ? <TabsOS />
        :<TabsAndroid />
}

const TabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid=()=> {
  return (
    <TabAndroid.Navigator
    sceneAnimationEnabled={true}
    barStyle={{
      backgroundColor: colores.primary
    }}
    screenOptions={({route}) => ({
      tabBarIcon:({color, focused}) => {
        let iconName: string = '';
        switch (route.name) {
          case 'Tab1Screen':
            iconName='bandage-outline'
          break;
          case 'Tab2Screen':
            iconName='basketball-outline'
          break;
          case 'Tab3Screen':
            iconName='bookmarks-outline'
          break;
        }
        // return <Text style={{color: color}}>{iconName}</Text>
        return <Icon name={iconName} size={20} color={color} />
      }
    })}
    >
      <TabAndroid.Screen name="Tab1Screen" component={StackNavigator} />
      <TabAndroid.Screen name="Tab2Screen" component={Tab2Screen} />
      <TabAndroid.Screen name="Tab3Screen" component={Tab3Screen} />
    </TabAndroid.Navigator>
  );
}


const TabOS = createBottomTabNavigator();

const TabsOS = () => {
  return (
    <TabOS.Navigator
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
      <TabOS.Screen name="Tab1Screen" component={StackNavigator} />
      <TabOS.Screen name="Tab2Screen" component={Tab2Screen} />
      <TabOS.Screen name="Tab3Screen" component={Tab3Screen} />
    </TabOS.Navigator>
  );
};
