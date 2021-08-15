import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Dimensions, ScrollView } from 'react-native';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Movie } from '../interface/movieInterface';
import { ArgumentosNecesarios } from '../navigation/Navigation';

// npm i --save-dev @types/react-native-vector-icons
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';

const altoDeLaVentana = Dimensions.get('screen').height;


// Mapeando a que esta view 'DetailScreen' debe tener un argumento de tipo MOvie
interface Props extends StackScreenProps<ArgumentosNecesarios, 'DetailScreen'> { };

export const DetailScreen = ({ route }: Props) => {

    // const movie = route.params as Movie;
    const movie = route.params;

    console.log('movie: ', movie);
    console.log('movie title: ', movie.title);

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const {isLoading, movieObtenida, creditos} = useMovieDetails(movie.id);
    
    console.log('creditos: ',creditos);
    
    

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image source={{ uri }} style={styles.posterImage} />
                </View>
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>

            <View style={styles.marginContainer}>
                <Icon name="star-outline" color="grey" size={20} />
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    posterImage: {
        flex: 1,
    },
    imageContainer: {
        width: '100%',
        height: altoDeLaVentana * 0.7,
        // backgroundColor: 'red',
        // paddingBottom:15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 3,
        elevation: 20,
        // overflow: 'hidden'
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    imageBorder: {
        flex: 1,
        backgroundColor: 'red',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        overflow: 'hidden'
    },
    // sombraAbajo:{
    //     shadowColor: '#000',
    // shadowOffset: {
    //     width: 0,
    //     height: 10,
    // },
    // shadowOpacity: 0.24,
    // shadowRadius: 7,
    // elevation: 10
    // }
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subTitle: {
        fontSize: 16,
        opacity: 0.4
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
