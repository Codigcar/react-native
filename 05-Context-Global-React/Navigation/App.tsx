import 'react-native-gesture-handler';
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateralAvatar } from './src/navigator/MenuLateralAvatar';
import { Tabs } from './src/navigator/Tabs';
import { TopTabNavigator } from './src/navigator/TopTabNavigator';

const App = () => {
    return (
      <NavigationContainer>
        {/* <StackNavigator /> */}
        {/* <MenuLateralBasico /> */}
        {/* <MenuLateralAvatar /> */}
        <Tabs />
        {/* <TopTabNavigator /> */}
      </NavigationContainer>
    )
}
export default App