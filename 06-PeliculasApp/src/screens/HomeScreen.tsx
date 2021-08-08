import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, Dimensions, FlatList, ScrollView } from 'react-native';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying } from '../interface/movieInterface';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width;

export const HomeScreen = () => {

    const navigation = useNavigation();
    const { peliculasActualesEnCine, isLoading } = useMovies();
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
                    />
                </View>

                {/* Peliculas populares */}
                <View style={{ backgroundColor: 'red', height: 260 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>En cine</Text>
                    <FlatList
                        // las peliculas a mostrar
                        data={peliculasActualesEnCine}
                        // mostrar todos las peliculas con el componente
                        renderItem={({ item }: any) => <MoviePoster movie={item} width={140} height={200} />}
                        // importante siempre colcoar un Id para que REACT identifique
                        keyExtractor={(item) => item.id.toString()}
                        // volverlo horizontal
                        horizontal={true}
                        // eliminar el icono de scroll y no oculte
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                {/* Peliculas populares */}
                <View style={{ backgroundColor: 'red', height: 250 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>En cine</Text>
                    <FlatList
                        // las peliculas a mostrar
                        data={peliculasActualesEnCine}
                        // mostrar todos las peliculas con el componente
                        renderItem={({ item }: any) => <MoviePoster movie={item} width={140} height={200} />}
                        // importante siempre colcoar un Id para que REACT identifique
                        keyExtractor={(item) => item.id.toString()}
                        // volverlo horizontal
                        horizontal={true}
                        // eliminar el icono de scroll y no oculte
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

            </View>
        </ScrollView>

    )
}
