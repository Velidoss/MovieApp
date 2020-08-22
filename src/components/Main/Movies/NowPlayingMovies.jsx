import React from "react";
import style from './Movies.module.scss';
import Movie from "./Movie";

const NowPlayingMovies = (props) => (
    <div className={style.container}>
        <h2 className={style.pageTitle}>Now playing movies</h2>
        <div className={style.itemsList}>
            {props.nowPlayingMovies.map(movie => {
                return (
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        type={"movie"}
                        poster_path={movie.poster_path}
                        title={movie.title}
                        vote_average={movie.vote_average}
                        release_date={movie.release_date}
                        genre_ids={movie.genre_ids}
                        genres={props.movieGenres}
                    />
                )
            })
            }
        </div>
    </div>
);
export default NowPlayingMovies;