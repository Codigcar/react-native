import React from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';

const App = () => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: 'black'}}>
            <CalculadoraScreen />
        </SafeAreaView>
    )
}
export default App