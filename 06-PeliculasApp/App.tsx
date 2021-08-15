import { NavigationContainer } from '@react-navigation/native';
import React from 'react'

import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MyStackNavigation } from './src/navigation/Navigation';

const App = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'red'}}>
      <NavigationContainer>
        <MyStackNavigation />
      </NavigationContainer>
    </SafeAreaView>
  )
}


 export default App;
