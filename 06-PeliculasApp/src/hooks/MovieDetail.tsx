import React from 'react'
import { Text, View } from 'react-native';
import { CredistInterface } from '../interface/creditsInterface';
import { MovieFullInterface } from '../interface/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    movie: MovieFullInterface,
    creditos: CredistInterface[]
}

export const MovieDetail = ({movie, creditos}:Props) => {
    return (
        <>
            {/* Detalles */}
            <View style={{marginHorizontal:20, flexDirection:'row'}}>
                <Icon name="star-outline" color="grey" size={16} />
                <Text>{movie.vote_average}</Text>
                    <Text style={{marginLeft:5}}>
                        - {movie.genres.map(genero => genero.name).join(', ')}
                    </Text>
            </View>
        </>            
    )
}
