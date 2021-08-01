import { useState } from "react";
import { useEffect } from "react";
import movieDB from "../api/movieDB";
import { MovieDBNowPlaying, Movie } from '../interface/movieInterface';

export const useMovies = () => {

    const [peliculasActualesEnCine, setPeliculasActualesEnCine] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getMovies = async() => {
        setTimeout(async() => {
            const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing')
            const peliculas = resp.data.results;            
            setPeliculasActualesEnCine(peliculas);
            setIsLoading(false);
        }, 3000);
    }

    useEffect(() => {
        // Trae las peliculas ctuales
        getMovies();
    }, [])

    return {
        peliculasActualesEnCine,
        isLoading
    }
}
