import React, {useState} from "react";
import style from './../Account.module.scss';
import Movie from "../../Main/Movies/Movie";
import SadEmojiAlert from "../../common/Alerts/SadEmojiAlert";

const Favorite = (props)=>{

    const [overflow, toggleOverflow] = useState({overflow:"scroll"});

    // const openScroll = () =>{
    //     if(props.favoriteMovies.length>3){
    //         toggleOverflow({overflow:"scroll"})
    //     }
    // };


    return (
        <div className={style.account_content}>
            <h2 className={style.title}>Favorite movies</h2>
            {props.favoriteMovies.length >0
                ? <div  className={style.account_content_list}>
                    {props.favoriteMovies.map(movie=>{
                        return(
                            <div key={movie.id} className={style.account_content_list_item}>
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    poster_path={movie.poster_path}
                                    title={movie.title}
                                    vote_average={movie.vote_average}
                                    release_date={movie.release_date}
                                    genre_ids={movie.genre_ids}
                                    genres={props.movieGenres}
                                    type={"movie"}
                                />
                            </div>
                        )
                    })}
                </div>
                : <SadEmojiAlert message={"There in no favorite movies yet :c"}/>
            }

            <h2 className={style.title}>Favorite tv shows</h2>
            {props.favoriteTvShows.length >0
                ? <div className={style.account_content_list}>
                    {props.favoriteTvShows.map(movie=>{
                        return(
                            <div key={movie.id} className={style.account_content_list_item}>
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    poster_path={movie.poster_path}
                                    title={movie.name}
                                    vote_average={movie.vote_average}
                                    release_date={movie.first_air_date}
                                    genre_ids={movie.genre_ids}
                                    genres={props.tvGenres}
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