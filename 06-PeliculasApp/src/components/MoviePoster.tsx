import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interface/movieInterface';
import { useNavigation } from '@react-navigation/native';

interface Props {
    movie: Movie;
    height?: number;
    width?:number;
}

export const MoviePoster = ({ movie, height = 380, width = 280 }: Props) => {
    // console.log(movie.poster_path);
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.8} 
            onPress={() => navigation.navigate('DetailScreen', movie)}
            style={{
                width: width,
                height: height,
                // backgroundColor: 'red' 
                marginHorizontal: 5
            }}
        >
            
                {/* <Text>{movie.title}</Text> */}
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: uri }}
                        style={styles.image}
                    />
                </View>
            
        </TouchableOpacity>
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
