import React from "react";
import style from './../Account.module.scss';
import Movie from "../../Main/Movies/Movie";

const Favorite = (props)=>{console.log(props);
    return (
        <div className={style.favorites}>
            <h2 className={style.title}>Favorite movies</h2>
            <div className={style.favorites_list}>
                {props.favoriteMovies.map(movie=>{
                    return(
                        <div className={style.favorites_list_item}>
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                poster_path={movie.poster_path}
                                title={movie.title}
                                vote_average={movie.vote_average}
                                release_date={movie.release_date}
                                genre_ids={movie.genre_ids}
                                movieGenres={props.genres}
                                type={"movie"}
                            />
                        </div>

                    )
                })}
            </div>
            <h2 className={style.title}>Favorite tv shows</h2>
            <div className={style.favorites_list}>
                {props.favoriteTvShows.map(movie=>{
                    return(
                        <div className={style.favorites_list_item}>
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                poster_path={movie.poster_path}
                                title={movie.name}
                                vote_average={movie.vote_average}
                                release_date={movie.first_air_date}
                                genre_ids={movie.genre_ids}
                                movieGenres={props.genres}
                                type={"tv"}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Favorite;