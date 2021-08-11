import React from 'react'
import { Movie } from '../interface/movieInterface';
import { View, Text, FlatList } from 'react-native';
import { MoviePoster } from './MoviePoster';

interface Props {
    title?: string;
    peliculasActualesEnCine: Movie[];
}

export const HorizontalSlider = ({title, peliculasActualesEnCine}: Props) => {
    return (
        <View style={{ backgroundColor: 'white', height: (title) ? 260 : 220 }}>
            {
                 title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>{title}</Text>
            }
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
    )
}
