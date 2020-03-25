import React, { useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import './movieDetails.css';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { getDetailsMovieAction } from '../../actions/movieActions';

const MovieDetails = (props) => {

    const dispatch = useDispatch();

    //get id for get the movie
    let params = useParams();

    //get details movie state
    const detailsMovie = useSelector( state => state.movies.detailMovie)

    useEffect(() => {
        //call the api
        const loadDataMovie = (movie) => dispatch( getDetailsMovieAction(movie) );
        loadDataMovie(params.id);
    }, [])
    
    //get job object 
    let getJob = (detailsMovie, job) => {
        const jobPerson = detailsMovie?.extendedcommon?.roles?.role?.find(element => {
            if(element.name === job){
                return element;
            }
        })
        return jobPerson;
    }

    //get actor job object
    const actor = getJob(detailsMovie, "Actor");

    //get director job object
    const director = getJob(detailsMovie, "Director");

    //get producer job object
    const producer = getJob(detailsMovie, "Producer");

    //get producer job object
    const writer = getJob(detailsMovie, "Writer");
    
    return(
        <div className="movie-card-details-container">
            <div className="back-header">
                <div 
                    className="button-back"
                    onClick={() => props.history.goBack()}
                >
                    <i className="fa fa-arrow-circle-left"></i>
                    <p>Regresar</p>
                </div>
            </div>
            <div className="container-information-movie">
                <figure className="main-image-movie">
                    <img src={detailsMovie.image_medium} />
                </figure>
                <div className="information-text">
                    <h4>{detailsMovie.title}</h4>
                    <div className="basic-information">
                        <p>{'('+detailsMovie?.extendedcommon?.media?.publishyear+')'}</p>
                        <p>{detailsMovie?.extendedcommon?.media?.duration}</p>
                        <p>{detailsMovie?.extendedcommon?.media?.rating?.code}</p>
                    </div>
                    <div className="description">
                        <p>{detailsMovie?.extendedcommon?.media?.description_extended}</p>
                    </div>
                    <div className="array-data-information">
                        <p>Géneros:</p>
                        {detailsMovie?.extendedcommon?.genres?.genre?.map((element) => (
                            <p key={element.name}>{element.name}</p>
                        ))}
                    </div>
                    <div className="array-data-information">
                        <p>Actor:</p>
                        {actor?.talents?.talent.map((element) => (
                            <p key={element.name} className="square-border">{element.name}</p>
                        ))}
                    </div>
                    <div className="array-data-information">
                        <p>Director:</p>
                        {director?.talents?.talent.map((element) => (
                            <p key={element.name} className="square-border">{element.name}</p>
                        ))}
                    </div>
                    <div className="array-data-information">
                        <p>Producer:</p>
                        {producer?.talents?.talent.map((element) => (
                            <p key={element.name} className="square-border">{element.name}</p>
                        ))}
                    </div>
                    <div className="array-data-information">
                        <p>Escritor:</p>
                        {writer?.talents?.talent.map((element) => (
                            <p key={element.name} className="square-border">{element.name}</p>
                        ))}
                    </div>
                    <div>
                        <p>{'Titulo Original: '+detailsMovie?.extendedcommon?.media?.originaltitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;