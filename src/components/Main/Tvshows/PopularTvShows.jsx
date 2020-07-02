import React from "react";
import style from "../Movies/Movies.module.scss";
import {NavLink} from "react-router-dom";

const PopularTvShows = (props)=>{
    return (
        <div className={style.container}>
            <h2 className={style.pageTitle}>Popular Tv-shows</h2>
            <div className={style.itemsList} >
                {props.popularTvShows.map(show=>{
                    return (
                        <div className={style.item}>
                            <NavLink to={`/tvshow/${show.id}`}><img src={`https://image.tmdb.org/t/p/w300${show.poster_path}`} alt=""/></NavLink>
                            <h3 className={style.itemTitle}>{show.name}</h3>
                            <div className={style.itemInfo}>
                                <span>{show.vote_average*10+'%'}</span>
                                <span>Released: {show.first_air_date}</span>
                            </div>
                            <div className={style.genres}>
                            {
                                show.genre_ids.map(genre_id=>{
                                    for(let i=0; i < props.tvShowsGenres.length;i++){
                                        if(props.tvShowsGenres[i].id === genre_id){
                                            return (
                                                <div className={style.genre}>
                                                    <span>{props.tvShowsGenres[i].name}</span>
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

export default PopularTvShows;