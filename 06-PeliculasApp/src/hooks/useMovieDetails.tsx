import { useEffect, useState } from "react"
import movieDB from '../api/movieDB';
import { MovieFullInterface, MovieDBResponse } from '../interface/movieInterface';
import { CredistInterface } from '../interface/creditsInterface';



interface MovieDetailsInterface {
    isLoading: boolean,
    movieObtenida?: MovieFullInterface
    creditos: any[],
}

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetailsInterface>({
        isLoading: true,
        movieObtenida: undefined,
        creditos:[]
    });

    const getMovieDetails = async() => {
        // const movieObtenida = await movieDB.get<MovieFullInterface>(`/${movieId}`);
        // console.log('movieObtenida Overview: ', movieObtenida.data.overview);

        // get data por los endpoinst
        const movieObtenidaById = movieDB.get<MovieFullInterface>(`/${movieId}`);
        const creditsObtenidosById = movieDB.get<CredistInterface>(`/${movieId}/credits`);
    
        // Realizando todas las Promises en una peticion
        const [movieDetailsResp, castPromiseResp] = await Promise.all([movieObtenidaById, creditsObtenidosById]);
    
        // Asignando la data obtenid
        setState({
            isLoading: false,
            movieObtenida: movieDetailsResp.data,
            creditos: castPromiseResp.data.cast
        })
    }
    

    useEffect(() => {
        getMovieDetails();
    }, []);

    return {
        // isLoading: state.isLoading,
        // movieObtenida: state.movieObtenida,
        // creditos: state.creditos


        // Mejor enviar esto
        ...state
    }

}
