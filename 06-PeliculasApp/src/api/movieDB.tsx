

import axios from 'axios';

const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params: {
        api_key:'c5f05ce60b0143810180dbb335284aef',
        language:'es-ES'
    }
});

export default movieDB;

