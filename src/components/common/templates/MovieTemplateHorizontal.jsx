import React from 'react';
import style from "./MovieTemplateHorizontal.module.scss";
import {NavLink} from "react-router-dom";
import Genre from "../../Main/Movies/MovieDetails/Genre";

const MovieTemplateHorizontal=(props)=>{
    let link = ()=>{
        if(props.type ==="movie"){
            return "movie";
        }else if (props.type ==="tv"){
            return "tvshow";
        }
    };
    return(
        <div className={style.item} >
            <div className={style.item_picture}>
                <NavLink to={`/${link()}/${props.id}`}>
                    <img src={props.poster_path
                        ?`https://image.tmdb.org/t/p/w200${props.poster_path}`
                        :`https://via.placeholder.com/200x300`
                    } alt=""/></NavLink>
            </div>
            <div className={style.item_desc}>
                <h3 className={style.item_title}>{props.title}</h3>
                <div className={style.item_info}>
                    <span>{props.vote_average*10+'%'}</span> |
                    <span>{props.release_date}</span>
                </div>
                <div className={style.genres}>
                    {
                        props.genre_ids.map(genre_id=>{
                            for(let i=0; i < props.movieGenres.length;i++){
                                if(props.movieGenres[i].id === genre_id){
                                    return (
                                        <Genre  key={props.movieGenres[i].id} name={props.movieGenres[i].name}/>
                                    );
                                }
                            }
                        })
                    }
                </div>
                <div className={style.item_overview}>
                    {props.overview}
                </div>
            </div>
        </div>
    )
};

export default MovieTemplateHorizontal;