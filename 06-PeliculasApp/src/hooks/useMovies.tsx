import { useState } from "react";
import { useEffect } from "react";
import movieDB from "../api/movieDB";
import { MovieDBResponse, Movie } from '../interface/movieInterface';

export const useMovies = () => {

    const [peliculasActualesEnCine, setPeliculasActualesEnCine] = useState<Movie[]>([]);
    const [peliculasOtrasPeliculas, setPeliculasOtrasPeliculas] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getMovies = async() => {
        setTimeout(async() => {
            const respPeliculasActuales = await movieDB.get<MovieDBResponse>('/now_playing')
            const peliculasActuales = respPeliculasActuales.data.results;            
            setPeliculasActualesEnCine(peliculasActuales);
            
            const respOtrasPeliculas = await movieDB.get<MovieDBResponse>('/popular')
            const otrasPeliculas = respOtrasPeliculas.data.results;       
            setPeliculasOtrasPeliculas(otrasPeliculas);

            setIsLoading(false);
        }, 3000);
    }

    useEffect(() => {
        // Trae las peliculas ctuales
        getMovies();
    }, [])

    return {
        peliculasActualesEnCine,
        isLoading,
        peliculasOtrasPeliculas
    }
}
