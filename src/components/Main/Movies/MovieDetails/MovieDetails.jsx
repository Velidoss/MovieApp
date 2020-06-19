import React from "react";
import style from './Detailes.module.scss';

const MovieDetails = (props)=>{
    return(
        <div className={style.container}>
            <div className={style.general}>
                <div className={style.picture}>
                    <img src={`https://image.tmdb.org/t/p/w500${props.movieDetails.poster_path}`} alt=""/>
                </div>
                <div className={style.info}>
                    <h2 className={style.title}>{props.movieDetails.title}</h2>
                    <div className={style.item}>
                        {props.movieDetails.release_date}<span> | </span>{props.movieDetails.vote_average*10+'%'}
                    </div>
                    <div className={style.item}>
                        {
                            props.movieDetails.genres.map(genre=>{
                                return (
                                    <span className={style.mapItem}>{genre.name}</span>
                                );
                            })
                        }
                    </div>
                    <div className={style.item}>
                        <span>Production countries: </span>
                        {props.movieDetails.production_countries.map(country=>(<span className={style.mapItem}>{country.name}</span>))}
                    </div>
                    <div className={style.item}>
                        {props.movieDetails.overview}
                    </div>
                    <div className={style.item}>
                        <a href={"/"}>Watch trailer</a>
                    </div>
                </div>
            </div>
            <div className={style.cast}>
                <h2 className={style.title}>Cast</h2>
                <div className={style.actorsList}>
                    {props.movieCredits.map(actor=>{
                        if (actor.order <10){
                            return (
                                <div className={style.actor}>
                                    <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt=""/>
                                    <h4>{actor.name}</h4>
                                    <span>{actor.character}</span>
                                </div>
                            )
                        }

                    })}
                </div>
            </div>
        </div>
    )
};

export default MovieDetails;