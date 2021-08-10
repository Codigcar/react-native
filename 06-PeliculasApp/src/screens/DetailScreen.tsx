import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text } from 'react-native';
import { Movie } from '../interface/movieInterface';
import { ArgumentosNecesarios } from '../navigation/Navigation';

// Mapeando a que esta view 'DetailScreen' debe tener un argumento de tipo MOvie
interface Props extends StackScreenProps<ArgumentosNecesarios, 'DetailScreen'>{};

export const DetailScreen = ({route}: Props) => {

    // const movie = route.params as Movie;
    const movie = route.params;

    console.log('movie: ', movie);
    console.log('movie title: ', movie.title);
    

    return (
        <View>
            <Text>DetailScreen</Text>
        </View>
    )
}
