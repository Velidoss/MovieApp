import React from "react";
import style from './Detailes.module.scss';
import {NavLink} from "react-router-dom";
import MovieActionBarHook from "./MovieActions/MovieActionBarHook";
import Genre from "./Genre";

const MovieDetails = (props)=>{
    return(
        <div className={style.container}>
            {  props.openModal ?
                (   <div className={style.modal}>
                    <button className={style.close_modal} onClick={props.closeVideo}>&times;</button>
                    <div className={style.modal_content}>
                        <iframe width="840" height="470" src={`https://www.youtube.com/embed/${props.movieDetails.videos.results[0].key}`} frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                        </iframe>
                    </div>
                </div>)
                : null
            }
            <div className={style.general}>
                <div className={style.picture}>
                    <img src={`https://image.tmdb.org/t/p/w500${props.movieDetails.poster_path}`} alt=""/>
                </div>
                <div className={style.info}>
                    <h2 className={style.title}>{props.movieDetails.title}</h2>
                    <div className={style.item}>
                        {props.movieDetails.release_date}<span> | </span>{props.movieDetails.vote_average*10+'%'}
                        <MovieActionBarHook movieId={props.movieDetails.id} mediaType={props.mediaType} />
                    </div>
                    <div className={style.item}><strong>Jenre: </strong>
                        <div className={style.genres}>
                            {
                                props.movieDetails.genres.map(genre=>{
                                    return (
                                        <Genre key={genre.id} name={genre.name}/>
                                    );
                                })
                            }
                        </div>

                    </div>
                    <div className={style.item}>
                        <strong>Director: </strong>{props.movieCredits.crew.map(member=>{
                            if(member.job === "Director"){
                                return member.name;
                            }
                        })}
                    </div>

                    <div className={style.item}>
                        <span>Production countries: </span>
                        {props.movieDetails.production_countries.map(country=>(<span className={style.mapItem}>{country.name}</span>))}
                    </div>
                    <div className={style.item}>
                        {props.movieDetails.overview}
                    </div>
                    {props.movieDetails.videos.results
                        ? (<div className={style.item}>
                            <button className={style.video_button} onClick={props.openVideo}>Watch trailer</button>
                        </div>)
                        :null
                    }
                </div>
            </div>
            <div className={style.cast}>
                <h2 className={style.title}>Cast</h2>
                <div className={style.actorsList}>
                    {props.movieCredits.cast.map(actor=>{
                        if (actor.order <10){
                            return (
                                <div className={style.actor}>
                                    <NavLink to={`/actor/${actor.id}`}>
                                        <img src={actor.profile_path
                                        ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                                        : `https://via.placeholder.com/200x300` } alt=""/>
                                    </NavLink>
                                    <h4 className={style.actor_name}>{actor.name}</h4>
                                    <p className={style.actor_char}>{actor.character}</p>
                                </div>
                            )
                        }

                    })}
                </div>
            </div>
            <div className={style.movieImages}>
                <h2 className={style.title}>Images</h2>
                <div className={style.screenshots}>
                    {props.movieImages.map(image=>{
                        return(
                            <div className={style.image}>
                                <img src={`https://image.tmdb.org/t/p/w500/${image.file_path}`} alt=""/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default MovieDetails;