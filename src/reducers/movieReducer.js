import {
    FILTER_MOVIE,
    FILTER_MOVIE_SUCCESS,
    GET_MOVIE,
    GET_MOVIE_ERROR,
    GET_MOVIE_SUCCESS,
    GET_DATA_MOVIE,
    GET_DATA_MOVIE_SUCCESS,
    GET_DATA_MOVIE_ERROR
} from '../types'

//every reducer has his own state
const initialState = {
    movies: [],
    filteredMovies: [],
    detailMovie: {},
    error: null,
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case FILTER_MOVIE:
        case GET_DATA_MOVIE:
        case GET_MOVIE:
            return{
                ...state,
                loading: action.payload
            }
        case GET_MOVIE_SUCCESS:
            return{
                ...state,
                movies: action.payload,
                filteredMovies: action.payload,
                loading: false,
                error: null
            }
        case FILTER_MOVIE_SUCCESS:
            return{
                ...state,
                filteredMovies: action.payload,
                loading: false,
                error: null
            }
        case GET_DATA_MOVIE_SUCCESS:
            return{
                ...state,
                detailMovie: action.payload,
                loading: false,
                error: null
            }
        case GET_MOVIE_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_DATA_MOVIE_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}