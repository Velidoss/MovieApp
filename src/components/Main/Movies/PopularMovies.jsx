import React from "react";
import style from './Movies.module.scss';
import Movie from "./Movie";

const PopularMovies=(props)=>{
    return (
        <div className={style.container}>
            <h2 className={style.pageTitle}>Popular movies</h2>
            <div className={style.itemsList} >
            {props.popularMovies.map(movie=>{
                return (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            poster_path={movie.poster_path}
                            title={movie.title}
                            vote_average={movie.vote_average}
                            release_date={movie.release_date}
                            genre_ids={movie.genre_ids}
                            movieGenres={props.movieGenres}
                        />
                    )
                })
            }
            </div>
        </div>
    )
};
export default PopularMovies;