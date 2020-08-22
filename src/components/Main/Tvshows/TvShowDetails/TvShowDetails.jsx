import React from "react";
import style from './../../Movies/MovieDetails/Detailes.module.scss';
import {NavLink} from "react-router-dom";
import MovieActionBarHook from "../../Movies/MovieDetails/MovieActions/MovieActionBar";

const TvShowDetails = (props) => (
    <div className={style.container}>
        <div className={style.general}>
            <div className={style.picture}>
                <img src={`https://image.tmdb.org/t/p/w500${props.tvShowDetails.poster_path}`} alt=""/>
            </div>
            <div className={style.info}>
                <h2 className={style.title}>{props.tvShowDetails.name}</h2>
                <div className={style.item}>
                    {props.tvShowDetails.first_air_date}<span> | </span>{props.tvShowDetails.vote_average * 10 + '%'}
                </div>
                <div>
                    <MovieActionBarHook movieId={props.tvShowDetails.id} mediaType={props.mediaType}/>
                </div>
                <div className={style.item}>
                    {
                        props.tvShowDetails.genres.map(genre => {
                            return (
                                <span className={style.mapItem}>{genre.name}</span>
                            );
                        })
                    }
                </div>
                <div className={style.item}>
                    <span>Production countries: </span>
                </div>
                <div className={style.item}>
                    {props.tvShowDetails.overview}
                </div>
                <div className={style.item}>
                    <a href={"/"}>Watch trailer</a>
                </div>
            </div>
        </div>
        <div className={style.cast}>
            <h2 className={style.title}>Cast</h2>
            <div className={style.actorsList}>
                {props.tvShowCredits.map(actor => {
                    if (actor.order < 10) {
                        return (
                            <div className={style.actor}>
                                {actor.profile_path
                                    ? <NavLink to={`/actor/${actor.id}`}><img
                                        src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt=""/></NavLink>
                                    : <img src={"https://via.placeholder.com/200x300"} alt=""/>
                                }
                                <h4>{actor.name}</h4>
                                <span>{actor.character}</span>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
        <div className={style.movieImages}>
            <h2 className={style.title}>Images</h2>
            <div className={style.screenshots}>
                {props.tvShowImages.map(image => {
                    return (
                        <div className={style.image}>
                            <img src={`https://image.tmdb.org/t/p/w500/${image.file_path}`} alt=""/>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
);

export default TvShowDetails;