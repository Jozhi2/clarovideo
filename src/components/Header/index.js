import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';

import { filterMovieAction } from '../../actions/movieActions'
const Header = () => {

    //component state
    const [search, searchFilter] = useState('')

    const dispatch = useDispatch();

    //call the action
    const filterMovie = (movieFilter) => dispatch( filterMovieAction(movieFilter) )
    const movies = useSelector( state => state.movies.movies)

    //define filter
    const filterMovies = e =>{
        e.preventDefault();

        if(search.trim === ''){
            return;
        }
        
        filterMovie({search, movies});
    }

    //const movies = useSelector( state => state.movies.movies)
    //console.log(movies);
    return(
        <nav className = "navbar navbar-expand-lg navbar-dark">
            <div className="justify-content-evenly container">
                <div className="logo-container pb-4">
                    <img src="https://www.clarovideo.com/webclient/sk_core/images/clarovideo-logo-sitio.svg" alt="logo" className="logo hidden-xs" />
                </div>
            </div>
            <div className="container">
                <form 
                    className="w-100"
                    onSubmit={filterMovies}
                >
                    <div className="form-row d-flex align-items-center">
                        <div className="form-group col-11">
                            <input 
                                type="text" 
                                className="form-control w-100" 
                                placeholder="BUSCAR PELICULA"
                                value={search}
                                onChange={e => searchFilter(e.target.value)}
                            />
                        </div>
                        <div className="form-group col-1">
                            <button className="btn-icons">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default Header;