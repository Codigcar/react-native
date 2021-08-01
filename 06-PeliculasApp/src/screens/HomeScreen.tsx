import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useEffect } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying } from '../interface/movieInterface';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {

    const navigation =  useNavigation();
    const {peliculasActualesEnCine, isLoading} = useMovies();
    const {top} = useSafeAreaInsets();
    
    if (isLoading) {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }
    
    return (
        <View style={{marginTop: top + 20}}>
            {/* <Text>HomeScreen</Text>
            <Button title='ir a Detail' onPress={() => navigation.navigate('DetailScreen')}></Button> */}
            <MoviePoster movie={peliculasActualesEnCine[8]} />
        </View>
        
    )
}
