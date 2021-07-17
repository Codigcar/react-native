import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import movieDB from '../api/movieDB';

export const HomeScreen = () => {

    const navigation =  useNavigation();

    useEffect(() => {
        movieDB.get('/now_playing')
            .then( resp => {
                console.log(resp.data);
            });
    }, [])
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title='ir a Detail' onPress={() => navigation.navigate('DetailScreen')}></Button>
        </View>
    )
}
