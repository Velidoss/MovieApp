import React from 'react';
import style from "./Movies.module.scss";
import {NavLink} from "react-router-dom";
import Genre from "./MovieDetails/Genre";

const Movie = (props) => (
    <div className={style.item}>
        <NavLink to={`/${props.type}/${props.id}`}>
            <img src={props.poster_path
                ? `https://image.tmdb.org/t/p/w300${props.poster_path}`
                : `https://via.placeholder.com/300x450`
            } alt=""/></NavLink>
        <h3 className={style.itemTitle}>{props.title}</h3>
        <div className={style.itemInfo}>
            <span>{props.vote_average * 10 + '%'}</span> <span>&nbsp;|&nbsp;</span>
            <span>{props.release_date}</span>
        </div>
        <div className={style.genres}>
            {
                props.genre_ids.map(genre_id => {
                    for (let i = 0; i < props.genres.length; i++) {
                        if (props.genres[i].id === genre_id) {
                            return props.genres[i].name
                        }
                    }
                }).join(", ")
            }
        </div>
    </div>
);

export default Movie;