import { useEffect, useState } from "react"
import movieDB from '../api/movieDB';
import { MovieFullInterface } from "../interface/movieInterface";



interface MovieDetailsInterface {
    isLoading: boolean,
    cast: any[],
    movieFull: MovieFullInterface
}

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetailsInterface>();

    const getMovieDetails = async() => {
        const movieObtenida = await movieDB.get<MovieFullInterface>(`/${movieId}`);
        console.log('movieObtenida Overview: ', movieObtenida.data.overview);
    }

    useEffect(() => {
        getMovieDetails();
    }, []);

    return {
        state
    }

}
