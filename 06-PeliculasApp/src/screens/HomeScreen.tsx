import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, Dimensions, FlatList, ScrollView } from 'react-native';
import movieDB from '../api/movieDB';
import { MovieDBResponse } from '../interface/movieInterface';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

const windowWidth = Dimensions.get('window').width;

export const HomeScreen = () => {

    const navigation = useNavigation();
    const { peliculasActualesEnCine, isLoading, peliculasOtrasPeliculas } = useMovies();
    const { top } = useSafeAreaInsets();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>
                {/* <Text>HomeScreen</Text>
            <Button title='ir a Detail' onPress={() => navigation.navigate('DetailScreen')}></Button> */}

                {/* <MoviePoster movie={peliculasActualesEnCine[8]} /> */}

                <View style={{/* backgroundColor:'red', */ height: 400 }}>
                    <Carousel
                        data={peliculasActualesEnCine}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        // renderItem={() => <MoviePoster movie={peliculasActualesEnCine[8]} /> }
                        sliderWidth={windowWidth}
                        itemWidth={280}
                        inactiveSlideOpacity={0.9}
                    />
                </View>

                {/* Peliculas populares */}
                {/* <HorizontalSlider title="En cine" peliculasActualesEnCine={peliculasActualesEnCine}  />     */}
                <HorizontalSlider title="Populares" peliculasActualesEnCine={peliculasOtrasPeliculas}  />    
                {/* <HorizontalSlider  peliculasActualesEnCine={peliculasOtrasPeliculas}  />     */}
                {/* <HorizontalSlider title="En cine" peliculasActualesEnCine={peliculasActualesEnCine}  />     */}

            </View>
        </ScrollView>

    )
}
