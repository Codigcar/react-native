import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interface/movieInterface';

// export type RootStackParams = {
export type ArgumentosNecesarios = {
  HomeScreen: undefined,
  DetailScreen: Movie
}

const Stack = createStackNavigator<ArgumentosNecesarios>();

export const MyStackNavigation =() => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, cardStyle:{backgroundColor:'white'}}} >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}