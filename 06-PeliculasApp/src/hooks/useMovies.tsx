import { useState } from "react";
import { useEffect } from "react";
import movieDB from "../api/movieDB";
import { MovieDBResponse, Movie } from '../interface/movieInterface';

interface MoviesState {
    peliculasActualesEnCine: Movie[];
    peliculasPopulares: Movie[];
    peliculasMasValoradas: Movie[];
    peliculasProximas: Movie[];
}

export const useMovies = () => {

    const [peliculasActualesEnCine, setPeliculasActualesEnCine] = useState<Movie[]>([]);
    const [peliculasPopulares, setPeliculasOtrasPeliculas] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [moviesState, setMoviesState] = useState<MoviesState>({
        peliculasActualesEnCine: [],
        peliculasPopulares: [],
        peliculasMasValoradas: [],
        peliculasProximas: []
    });

    const getMovies = async() => {

        setTimeout(async() => {
            // const respPeliculasActuales = await movieDB.get<MovieDBResponse>('/now_playing')
            // const peliculasActuales = respPeliculasActuales.data.results;            
            // setPeliculasActualesEnCine(peliculasActuales);
            
            // const respOtrasPeliculas = await movieDB.get<MovieDBResponse>('/popular')
            // const peliculasPopulares = respOtrasPeliculas.data.results;       
            // setPeliculasOtrasPeliculas(peliculasPopulares);

            const respPeliculasActuales = movieDB.get<MovieDBResponse>('/now_playing');
            const respPeliculasPopulares = movieDB.get<MovieDBResponse>('/popular');
            const respPeliculasMasValoradas = movieDB.get<MovieDBResponse>('/top_rated');
            const respPeliculasProximas = movieDB.get<MovieDBResponse>('/upcoming');

            const response = await Promise.all([
                respPeliculasActuales, 
                respPeliculasPopulares,
                respPeliculasMasValoradas,
                respPeliculasProximas
            ])

            setMoviesState({
                peliculasActualesEnCine: response[0].data.results,
                peliculasPopulares: response[0].data.results,
                peliculasMasValoradas: response[0].data.results,
                peliculasProximas: response[0].data.results
            })

            setIsLoading(false);
        }, 3000);
    }

    useEffect(() => {
        // Trae las peliculas ctuales
        getMovies();
    }, [])

    return {
        // peliculasActualesEnCine,
        // isLoading,
        // peliculasOtrasPeliculas: peliculasPopulares
        ...moviesState,
        isLoading
    }
}
