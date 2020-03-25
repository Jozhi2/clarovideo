import {
    FILTER_MOVIE,
    FILTER_MOVIE_SUCCESS,
    GET_MOVIE,
    GET_MOVIE_ERROR,
    GET_MOVIE_SUCCESS,
    GET_DATA_MOVIE,
    GET_DATA_MOVIE_SUCCESS,
    GET_DATA_MOVIE_ERROR
} from '../types';

import clientAxios from '../config/axios'
//filter movies
export function filterMovieAction(movie){
    return async(dispatch) => {
        dispatch ( filterMovie() );
        const moviesWithFilterTitle = movie.movies.filter(element => {
            let titleLowerCase = element.title.toLowerCase();
            let searchLowerCase = movie.search.toLowerCase();
            if(titleLowerCase.includes(searchLowerCase)){
                return element;
            }
        });
        //lenght to know if there are results
        //console.log(moviesWithFilterTitle.length)
        dispatch ( filterMovieSuccess(moviesWithFilterTitle));
    }
}

const filterMovie = () => ({
    type: FILTER_MOVIE,
    payload: true
})

const filterMovieSuccess = (movies) => ({
    type: FILTER_MOVIE_SUCCESS,
    payload: movies
})

//download movies claro video
export function getMoviesAction(){
    return async(dispatch) => {
        dispatch ( getMovie() );
        //this is one way to get the result with axios
        clientAxios.get('/services/cms/level?api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52&isCacheable=true&node=gen_accion&domain=https%3A%2F%2Fmfwkweb-api.clarovideo.net%2F&origin=https%3A%2F%2Fwww.clarovideo.com%2F&user_id=22822863')
        .then((response) => {
            const typeListadoInfinitoModule = (element) => {
                if(element.type === 'listadoinfinito'){
                    return element.components.component;
                }
            }
            const listadoInfinitoModule = response.data.response.modules.module.map(typeListadoInfinitoModule);

            const listadoInfinitoComponent = listadoInfinitoModule[0].find(element => element.type === 'Listadoinfinito');
            return listadoInfinitoComponent.properties.url;
        })
        .then((response) => {
            //this is another way to get the result with axios adding params in a different format
            return clientAxios.get(response, {
                params:{
                    api_version: 'v5.86',
                    authpn: 'webclient',
                    authpt: 'tfg1h3j4k6fd7',
                    format: 'json',
                    device_id: 'web',
                    device_category: 'web',
                    device_model: 'web',
                    device_type: 'web',
                    device_manufacturer: 'generic',
                    HKS: '9s5hqq76r3g6sg4jb90l38us52'
                }
            })
        })
        .then((response) => {
            dispatch( getMovieSuccess(response.data.response.groups) )
        })
        .catch((error) => {
            console.log(error)
            dispatch( getMovieError() )
        });
        
        // try{
        //     dispatch( getMovieSuccess(true) )
        // } catch(error){
        //     dispatch( getMovieError(true) )
        // }
    }
}

const getMovie = () => ({
    type: GET_MOVIE,
    payload: true
})

const getMovieSuccess = movies => ({
    type: GET_MOVIE_SUCCESS,
    payload: movies
})

const getMovieError = () => ({
    type: GET_MOVIE_ERROR,
    payload: true
})

export function getDetailsMovieAction(movie){
    return async(dispatch) => {
        console.log(movie)
    }
}

const getDataMovie = () => ({
    type: GET_DATA_MOVIE,
    payload: true
})

const getDataMovieSuccess = movie => ({
    type: GET_DATA_MOVIE_SUCCESS,
    payload: movie
})

const getDataMovieError = () => ({
    type: GET_DATA_MOVIE_ERROR,
    payload: true
})