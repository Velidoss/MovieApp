import React from "react";
import style from './Actors.module.scss';
import {NavLink} from "react-router-dom";

const ActorDetails = (props)=>{
    let known_for = props.actorDetails.movie_credits.cast.map(
        (film, i)=>{
            if(i<10){
                return (
                    <div className={style.film}>
                        <NavLink to={`/movie/${film.id}`}>
                            {film.poster_path
                                ? <img src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`} alt=""/>
                                : <img src={`https://via.placeholder.com/200x300`} alt=""/>}
                                <p>{film.title}</p>
                        </NavLink>
                    </div>
                )
            }
        }
    );
    let roles = props.actorDetails.movie_credits.cast.sort();
    return (
        <div className={style.actorDetails}>
            <div className={style.details}>
                <div>
                    <img className={style.actorImage} src={`https://image.tmdb.org/t/p/w300/${props.actorDetails.profile_path}`} alt=""/>
                </div>
                <div className={style.info}>
                    <h3 className={style.infoItem}>{props.actorDetails.name}</h3>
                    <p className={style.infoItem}><strong>Born: </strong>{props.actorDetails.birthday} | {props.actorDetails.place_of_birth}</p>
                    <p className={style.infoItem}><strong>Bio: </strong>{props.actorDetails.biography}</p>
                </div>
            </div>
            <h2 className={style.title}>Known for:</h2>
            <div className={style.known_for}>
                {known_for}
            </div>
            <h2 className={style.title}>Roles:</h2>
            <div>
                {props.actorDetails.movie_credits.cast.map(film=>{
                    return (
                        <div className={style.roles}>
                            <NavLink to={`/movie/${film.id}`} className={style.role}>
                                    <strong>{film.release_date}</strong> <p>{film.title}</p> as <p>{film.character}</p>
                            </NavLink>
                        </div>
                        )
                    }
                )}
            </div>
        </div>
    )
};

export default ActorDetails;