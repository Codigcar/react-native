import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Movie } from '../interface/movieInterface';

interface Props {
    movie: Movie;
}

export const MoviePoster = ({ movie }: Props) => {
    // console.log(movie.poster_path);
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <View style={{
            width: 300,
            height: 420,
            // backgroundColor: 'red' 
        }}>
            <Text>{movie.title}</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: uri }}
                    style={styles.image}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        // width: 100,
        // height: 100
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex:1,
        borderRadius:18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 10
    }
});
