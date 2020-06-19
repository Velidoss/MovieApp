import React from "react";
import style from './Movies.module.scss';
import {NavLink} from "react-router-dom";

const Movies=(props)=>{
    return (
            <div className={style.container}>
                <h2 className={style.pageTitle}>Popular movies</h2>
                <div className={style.itemsList} >
                {props.popularMovies.map(movie=>{
                    return (
                        <div className={style.item}>
                            <NavLink to={`/movie/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt=""/></NavLink>
                            <h3 className={style.itemTitle}>{movie.title}</h3>
                            <div className={style.itemInfo}>
                                <span>{movie.vote_average*10+'%'}</span> |
                                <span>{movie.release_date}</span>
                            </div>
                            <div className={style.genres}>
                                {
                                    movie.genre_ids.map(genre_id=>{
                                        for(let i=0; i < props.movieGenres.length;i++){
                                            if(props.movieGenres[i].id === genre_id){
                                                return (
                                                    <div className={style.genre}>
                                                        <span>{props.movieGenres[i].name}</span>
                                                    </div>
                                                );
                                            }
                                        }
                                    })
                                }
                            </div>
                        </div>
                        )
                    })
                }
                </div>
                <h2 className={style.pageTitle}>Now playing movies</h2>
                <div className={style.itemsList} >
                    {props.nowPlayingMovies.map(movie=>{
                        return (
                            <div className={style.item}>
                                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt=""/>
                                <h3 className={style.itemTitle}>{movie.title}</h3>
                                <div className={style.itemInfo}>
                                    <span>{movie.vote_average*10+'%'}</span>
                                    <span>{movie.release_date}</span>
                                </div>
                                <div className={style.genres}>
                                    {
                                        movie.genre_ids.map(genre_id=>{
                                            for(let i=0; i < props.movieGenres.length;i++){
                                                if(props.movieGenres[i].id === genre_id){
                                                    return (
                                                        <div className={style.genre}>
                                                            <span>{props.movieGenres[i].name}</span>
                                                        </div>
                                                    );
                                                }
                                            }
                                        })
                                    }
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        )
};
export default Movies;