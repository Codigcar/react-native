import React from 'react'
import { Text, View } from 'react-native';
import dineroFormatter  from 'currency-formatter';

import { CredistInterface } from '../interface/creditsInterface';
import { MovieFullInterface } from '../interface/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    movie: MovieFullInterface,
    creditos: CredistInterface[]
}

export const MovieDetail = ({ movie, creditos }: Props) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>

                    <Icon name="star-outline" color="grey" size={16} />
                    <Text style={{ marginLeft: 10 }}>
                        {movie.vote_average}
                    </Text>
                    <Text style={{ marginLeft: 5 }}>
                        - {movie.genres.map(genero => genero.name).join(', ')}
                    </Text>
                </View>

                {/* Historia */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16 }}>
                    {movie.overview}
                </Text>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text>
                    {movie.budget}
                </Text>

            </View>


        </>
    )
}
