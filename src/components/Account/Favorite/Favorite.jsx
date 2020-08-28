import React from "react";
import style from './../Account.module.scss';
import Movie from "../../Main/Movies/Movie";
import sadFace from "../../../styles/svg/sad-tear-solid.svg";
import SadEmojiAlert from "../../common/Alerts/SadEmojiAlert";

const Favorite = (props)=>{
    return (
        <div className={style.account_content}>
            <h2 className={style.title}>Favorite movies</h2>
            {props.favoriteMovies.length >1
                ? <div className={style.favorites_list}>
                    {props.favoriteMovies.map(movie=>{
                        return(
                            <div key={movie.id} className={style.favorites_list_item}>
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    poster_path={movie.poster_path}
                                    title={movie.title}
                                    vote_average={movie.vote_average}
                                    release_date={movie.release_date}
                                    genre_ids={movie.genre_ids}
                                    genres={props.genres}
                                    type={"movie"}
                                />
                            </div>
                        )
                    })}
                </div>
                : <SadEmojiAlert message={"There in no favorite movies yet :c"}/>
            }

            <h2 className={style.title}>Favorite tv shows</h2>
            {props.favoriteTvShows.length >1
                ? <div className={style.favorites_list}>
                    {props.favoriteTvShows.map(movie=>{
                        return(
                            <div key={movie.id} className={style.favorites_list_item}>
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    poster_path={movie.poster_path}
                                    title={movie.name}
                                    vote_average={movie.vote_average}
                                    release_date={movie.first_air_date}
                                    genre_ids={movie.genre_ids}
                                    genres={props.genres}
                                    type={"tvshow"}
                                />
                            </div>
                        )
                    })}
                </div>
                : <SadEmojiAlert message={"There in no favorite movies yet :c"}/>
            }
        </div>
    )
};

export default Favorite;