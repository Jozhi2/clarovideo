import React, { Fragment, useEffect } from 'react';
import './contentCards.css';
import MovieCard from "../MovieCard/index";

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { getMoviesAction } from '../../actions/movieActions';

const ContentCards = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        //call the api
        const loadMovies = () => dispatch( getMoviesAction() );
        loadMovies();
    }, [])

    const movies = useSelector( state => state.movies.filteredMovies)

    return(
        <Fragment>
            <div className="content-cards">
                <div className="content-movies">
                    {movies?.map((element) => (
                        <MovieCard 
                            url={element.image_large} 
                            key={element.id} 
                            id={element.id}
                        />
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default ContentCards;