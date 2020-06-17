import React from "react";
import style from './Movies.module.scss';

const Movies=(props)=>{
    return (
            <div className={style.container}>
                <h2 className={style.pageTitle}>Popular movies</h2>
                <div className={style.moviesList} >
                {props.popularMovies.map(movie=>{
                    return (
                            <div className={style.movie}>
                                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt=""/>
                                <h3 className={style.movieTitle}>{movie.title}</h3>
                                <div className={style.movieInfo}>
                                    <span>  {movie.vote_average}</span>
                                    <span>Released: {movie.release_date}</span>
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