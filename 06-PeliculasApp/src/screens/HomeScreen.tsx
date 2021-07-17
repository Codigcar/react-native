import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying } from '../interface/movieInterface';

export const HomeScreen = () => {

    const navigation =  useNavigation();

    useEffect(() => {
        movieDB.get<MovieDBNowPlaying>('/now_playing')
            .then( resp => {
                console.log(resp.data.results[0].title);
            });
    }, [])
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title='ir a Detail' onPress={() => navigation.navigate('DetailScreen')}></Button>
        </View>
    )
}
