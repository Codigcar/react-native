import { NavigationContainer } from '@react-navigation/native';
import React from 'react'

import 'react-native-gesture-handler';
import { MyStackNavigation } from './src/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <MyStackNavigation />
    </NavigationContainer>
  )
}


 export default App;
