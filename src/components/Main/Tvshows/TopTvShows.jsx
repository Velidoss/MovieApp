import React from "react";
import style from "../Movies/Movies.module.scss";
import {NavLink} from "react-router-dom";
import Movie from "../Movies/Movie";

const TopTvShows = (props)=>{
    return (
        <div className={style.container}>
            <h2 className={style.pageTitle}>Top rated Tv-shows</h2>
            <div className={style.itemsList} >
                {props.topTvShows.map(show=>{
                    return (
                        <Movie
                            key={show.id}
                            id={show.id}
                            type={"tvshow"}
                            poster_path={show.poster_path}
                            title={show.name}
                            vote_average={show.vote_average}
                            release_date={show.first_air_date}
                            genre_ids={show.genre_ids}
                            genres={props.tvShowsGenres}
                        />
                    )
                })
                }
            </div>
        </div>
    )
};

export default TopTvShows;