import React from 'react';
import style from "./Movies.module.scss";
import {NavLink} from "react-router-dom";

const Movie=(props)=>{
    return(
        <div className={style.item} >
            <NavLink to={`/movie/${props.id}`}><img src={`https://image.tmdb.org/t/p/w300${props.poster_path}`} alt=""/></NavLink>
            <h3 className={style.itemTitle}>{props.title}</h3>
            <div className={style.itemInfo}>
                <span>{props.vote_average*10+'%'}</span> |
                <span>{props.release_date}</span>
            </div>
            <div className={style.genres}>
                {
                    props.genre_ids.map(genre_id=>{
                        for(let i=0; i < props.movieGenres.length;i++){
                            if(props.movieGenres[i].id === genre_id){
                                return (
                                    <div className={style.genre}>
                                        <span>{props.movieGenres[i].name}</span>
                                    </div>
                                );
                            }
                        }
                    })
                }
            </div>
        </div>
    )
};

export default Movie;