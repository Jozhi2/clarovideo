import React from 'react';
import './movieCard.css';
import * as buttonPlay from './assets/button-play.png'

const MovieCard = (props) => {
    return(
       <div className="movie-card">
           <div className="item-card">
               <a href={"/movie/"+props.id}>
                <img src={props.url} alt=""/>
                <div className="content-play">
                    <div className="position-content-play">
                        <img src={buttonPlay} alt={""}/>
                    </div>
                </div>
               </a>
           </div>
       </div>
    )
}

export default MovieCard;