import 'react-native-gesture-handler';
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateralAvatar } from './src/navigator/MenuLateralAvatar';

const App = () => {
    return (
      <NavigationContainer>
        {/* <StackNavigator /> */}
        {/* <MenuLateralBasico /> */}
        <MenuLateralAvatar />
        
      </NavigationContainer>
    )
}
export default App