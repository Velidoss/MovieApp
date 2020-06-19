import React from "react";
import style from "../Movies/Movies.module.scss";

const TvShows = (props)=>{
    return (
            <div className={style.container}>
                <h2 className={style.pageTitle}>Popular Tv-shows</h2>
                <div className={style.itemsList} >
                    {props.popularTvShows.map(show=>{
                        return (
                            <div className={style.item}>
                                <img src={`https://image.tmdb.org/t/p/w300${show.poster_path}`} alt=""/>
                                <h3 className={style.itemTitle}>{show.name}</h3>
                                <div className={style.itemInfo}>
                                    <span>  {show.vote_average}</span>
                                    <span>Released: {show.first_air_date}</span>
                                </div>

                            </div>
                        )
                    })
                    }
                </div>
                <h2 className={style.pageTitle}>Top rated Tv-shows</h2>
                <div className={style.itemsList} >
                    {props.topTvShows.map(show=>{
                        return (
                            <div className={style.item}>
                                <img src={`https://image.tmdb.org/t/p/w300${show.poster_path}`} alt=""/>
                                <h3 className={style.itemTitle}>{show.name}</h3>
                                <div className={style.itemInfo}>
                                    <span>  {show.vote_average}</span>
                                    <span>Released: {show.first_air_date}</span>
                                </div>

                            </div>
                        )
                    })
                    }
                </div>
        </div>
    )
};

export default TvShows;