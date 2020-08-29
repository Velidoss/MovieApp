import React from "react";
import style from "./Watchlist.module.scss";
import MovieTemplateHorizontal from "../../common/templates/MovieTemplateHorizontal";
import SadEmojiAlert from "../../common/Alerts/SadEmojiAlert";

const Watchlist = (props) => {

    return (
    <div className={style.watchlist}>
        <div className={style.movies}>
            <h3 className={style.title}>Movies watchlist</h3>
            {props.movieWatchlist.length>0
                ? <div>
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
                                movieGenres={props.movieGenres}
                                type={"movie"}
                            />
                        )
                    })}
                </div>
                : <SadEmojiAlert message={"There is no movie in your watchlist"} />
            }

        </div>
        <div className={style.tv}>
            <h3 className={style.title}>Tv shows watchlist</h3>
            {props.tvWatchlist.length >0
                ? <div>
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
                                tvGenres={props.tvGenres}
                                type={"tv"}
                            />
                        )
                    })}
                </div>
                : <SadEmojiAlert message={"There is no tv-show in your watchlist"} />
            }
        </div>
    </div>
)};

export default Watchlist;