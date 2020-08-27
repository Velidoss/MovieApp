import React from "react";
import style from './Detailes.module.scss';
import {NavLink} from "react-router-dom";
import AuthContext from "../../../../context/AuthContext";
import MovieActionBar from "./MovieActions/MovieActionBar";
import ActionBarInactive from "./MovieActions/ActionBarInactive";
import Modal from "./modal/Modal";
import Image from "./Image";
import TvActionBar from "./MovieActions/TvActionBar";


const MovieDetails = ({details, credits, images, mediaType}) => {

    let actorsList;
    switch (mediaType) {
        case "movie":
            actorsList = credits.cast;
            break;
        case "tv":
            actorsList = credits;
            break;
        default:
            return null;
    }

    return (
        <div className={style.container}>
            <div className={style.general}>
                <div className={style.picture}>
                    <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt=""/>
                </div>
                <div className={style.info}>
                    {mediaType === "movie" &&
                    <h2 className={style.title}>{`${details.title}(${new Date(details.release_date).getFullYear()})`}</h2>}
                    {mediaType === "tv" &&
                    <h2 className={style.title}>{`${details.name}(${new Date(details.first_air_date).getFullYear()})`}</h2>}
                    <div className={style.item}>
                        {mediaType === "movie" && <span><strong
                            className={style.item_title}>Release date:&nbsp;</strong><span>{details.release_date}</span></span>}
                        {mediaType === "tv" && <span><strong className={style.item_title}>First air date:&nbsp;</strong><span>{details.first_air_date}</span></span>}
                    </div>
                    <div className={style.item}>
                        <strong
                            className={style.item_title}>Rating:&nbsp;</strong><span>{details.vote_average * 10 + '%'}</span>
                    </div>
                    <div className={style.item}><strong>Jenre:&nbsp;</strong>
                        <div className={style.genres}>
                            {
                                details.genres.map(genre => {
                                    return (
                                        genre.name
                                    );
                                }).join(", ")
                            }
                        </div>

                    </div>
                    <div className={style.item}>
                        {mediaType === "movie" &&
                        <div>
                            <strong className={style.item_title}>Director:&nbsp;</strong>
                            {credits.crew.map(member => {
                                if (member.job === "Director") {
                                    return member.name;
                                }
                            })
                            }
                        </div>}
                        {mediaType === "tv" &&
                        <div>
                            <strong className={style.item_title}>Created by:&nbsp;</strong>
                            {details.created_by.map(creator => {
                                return creator.name
                            }).join(", ")
                            }
                        </div>}

                    </div>
                    {mediaType === "movie" && <div className={style.item}>
                        <p>
                            <strong className={style.item_title}>Production countries:&nbsp;</strong>
                            {details.production_countries.map(country => (
                                country.name)).join(', ')
                            }
                        </p>
                    </div>}

                    <div className={style.item}>
                        <div className={style.item_desc}>
                            <strong className={style.item_title}>Description</strong>
                            {details.overview}
                        </div>

                    </div>
                    {details.videos.results.length >0
                        ? <Modal videoLink={details.videos.results[0].key}/>
                        : null
                    }
                    <div style={{marginTop: "40px"}} className={style.item}>
                        <AuthContext.Consumer>
                            {(isAuth) => {
                                if (isAuth) {
                                    if (mediaType === "movie") {
                                        return <MovieActionBar isAuth={isAuth} movieId={details.id}
                                                               mediaType={mediaType}/>
                                    } else if (mediaType === "tv") {
                                        return <TvActionBar isAuth={isAuth} tvshowId={details.id}
                                                               mediaType={mediaType}/>
                                    }
                                } else {
                                    return <ActionBarInactive/>
                                }
                            }}
                        </AuthContext.Consumer>
                    </div>
                </div>
            </div>
            <div className={style.cast}>
                <h2 className={style.title}>Cast</h2>
                <div className={style.actorsList}>
                    {actorsList.map((actor, i) => {
                        if (actor.order < 10) {
                            return (
                                <div key={i} className={style.actor}>
                                    <NavLink to={`/actor/${actor.id}`}>
                                        <img src={actor.profile_path
                                            ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                                            : `https://via.placeholder.com/200x300`} alt=""/>
                                    </NavLink>
                                    <h4 className={style.actor_name}>{actor.name}</h4>
                                    <p className={style.actor_char}>{actor.character}</p>
                                </div>
                            )
                        }

                    })}
                </div>
            </div>
            {images.length>0 && <div className={style.movieImages}>
                <h2 className={style.title}>Images</h2>
                <div className={style.screenshots}>
                    {images.map((image, i) => {
                        if (i < 8) {
                            return (
                                <Image key={i} file_path={image.file_path}/>
                            )
                        }
                    })}
                </div>
            </div>
            }

        </div>
    )
};

export default MovieDetails;