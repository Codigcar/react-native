import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Pagina1Screen } from '../Screen/Pagina1Screen';
import {Pagina2Screen} from '../Screen/Pagina2Screen';
import {Pagina3Screen} from '../Screen/Pagina3Screen';
import { PersonaScreen } from '../Screen/PersonaScreen';

export type RootStackParams = {
    Pagina1Screen: undefined,
    Pagina2Screen: undefined,
    Pagina3Screen: undefined,
    PersonaScreen: {id: number, nombre: string}
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Pagina1Screen"
      screenOptions={{
        cardStyle: {backgroundColor: 'white'},
        // headerShown: false,
        headerStyle:{
            elevation:0,
            shadowColor:'transparent'
        }
      }}>
      <Stack.Screen name="Pagina1Screen" options={{title:"Pagina 1"}} component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{title:"Pagina 2"}} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{title:"Pagina 3"}} component={Pagina3Screen} />
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
    </Stack.Navigator>
  );
};
