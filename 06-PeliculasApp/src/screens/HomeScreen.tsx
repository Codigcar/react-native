import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useEffect } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying } from '../interface/movieInterface';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {

    const navigation =  useNavigation();
    const {peliculasActualesEnCine, isLoading} = useMovies();
    // console.log(peliculasActualesEnCine[0]);
    
    if (isLoading) {
        return (
            <View>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }
    
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title='ir a Detail' onPress={() => navigation.navigate('DetailScreen')}></Button>
        </View>
    )
}
