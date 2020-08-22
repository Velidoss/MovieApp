import React from "react";
import style from "./Watchlist.module.scss";
import MovieTemplateHorizontal from "../../common/templates/MovieTemplateHorizontal";

const Watchlist = (props) => (
    <div className={style.watchlist}>
        <div className={style.movies}>
            <h3 className={style.title}>Movies watchlist</h3>
            {props.movieWatchlist.map(movie => {
                return (
                    <MovieTemplateHorizontal
                        key={movie.id}
                        id={movie.id}
                        poster_path={movie.poster_path}
                        title={movie.title}
                        vote_average={movie.vote_average}
                        release_date={movie.release_date}
                        genre_ids={movie.genre_ids}
                        overview={movie.overview}
                        movieGenres={props.genres}
                        type={"movie"}
                    />
                )
            })}
        </div>
        <div className={style.tv}>
            <h3 className={style.title}>Tv shows watchlist</h3>
            {props.tvWatchlist.map(movie => {
                return (
                    <MovieTemplateHorizontal
                        key={movie.id}
                        id={movie.id}
                        poster_path={movie.poster_path}
                        title={movie.name}
                        vote_average={movie.vote_average}
                        release_date={movie.first_air_date}
                        genre_ids={movie.genre_ids}
                        overview={movie.overview}
                        movieGenres={props.genres}
                        type={"movie"}
                    />
                )
            })}
        </div>
    </div>
);

export default Watchlist;