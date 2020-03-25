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

    useEffect(() => {
        //call the api
        const loadDataMovie = (movie) => dispatch( getDetailsMovieAction(movie) );
        loadDataMovie(params.id);
    }, [])
    
    let imgUrl = "https://clarovideocdn7.clarovideo.net/PELICULAS/AFGHANLUKE/EXPORTACION_WEB/SS/AFGHANLUKEWVERTICAL.jpg?size=200x300"
    let title = "Afghan Luke: Verdad oculta";
    let code = "PG-13";
    let description_extended = "Un grupo de seis adolescentes de Los Ángeles, muy dolidos por una trágica pérdida, se reúnen solo para descubrir que sus padres pueden estar ocultando un terrible secreto que trastorna su mundo.";
    let year = "2017";
    let duration = "00:53:05"
    let originaltitle = "Runaways"
    let genre = [
        {
            "id": "52540",
            "name": "TV Series",
            "desc": "Series"
        },
        {
            "id": "51131",
            "name": "Action",
            "desc": "Acción"
        },
        {
            "id": "51105",
            "name": "Drama",
            "desc": "Drama"
        },
        {
            "id": "51220",
            "name": "Sci-Fi",
            "desc": "Ciencia ficción"
        }
    ]
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
                    <img src={imgUrl} />
                </figure>
                <div className="information-text">
                    <h4>{title}</h4>
                    <div className="basic-information">
                        <p>{'('+year+')'}</p>
                        <p>{duration}</p>
                        <p>{code}</p>
                    </div>
                    <div className="description">
                        <p>{description_extended}</p>
                    </div>
                    <div className="genres">
                        <p>Géneros: </p>
                        {genre?.map((element) => (
                            <p key={element.name}>{element.name}</p>
                        ))}
                    </div>
                    <div>
                        <p>{'Titulo Original: '+originaltitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;