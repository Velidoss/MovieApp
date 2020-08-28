import React from "react";
import style from "./Rated.module.scss";
import MovieTemplateHorizontal from "../../common/templates/MovieTemplateHorizontal";
import {NavLink, Route} from "react-router-dom";
import SadEmojiAlert from "../../common/Alerts/SadEmojiAlert";

const Rated = (props) => (
    <div className={style.rated}>
        <div className={style.rated_links}>
            <NavLink className={style.link} activeClassName={style.link_active} to={"/account/rated/movies"}>Rated
                movies</NavLink>
            <NavLink className={style.link} activeClassName={style.link_active} to={"/account/rated/tv"}>Rated tv
                shows</NavLink>
        </div>

        <Route path={"/account/rated/movies"} render={() => (
            <div className={style.rated_list}>
                <h3 className={style.title}>Rated movies</h3>
                {props.ratedMovies.length>1
                    ?   <div>
                        {props.ratedMovies.map(movie => {
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
                    : <SadEmojiAlert message="There is no rated movies in your account"/>
                }

            </div>
        )}/>
        <Route path={"/account/rated/tv"} render={() => (
            <div className={style.rated_list}>
                <h3 className={style.title}>Rated tv shows</h3>
                {props.ratedTv.length>1
                    ? <div>
                        {props.ratedTv.map(movie => {
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
                                    type={"tv"}
                                />
                            )
                        })}
                    </div>
                    : <SadEmojiAlert message="There is no rated tv-shows in your account"/>
                }

            </div>
        )}/>


    </div>
);

export default Rated;