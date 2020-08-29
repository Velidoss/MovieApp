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
                    <strong>Rating:&nbsp;</strong><span>{props.vote_average*10+'%'}</span> <span>&nbsp;|&nbsp;</span>
                    <strong>Released:&nbsp;</strong><span>{props.release_date}</span>
                </div>
                <div className={style.genres}>
                    {props.type === "movie" && props.genre_ids.map(genre_id=>{
                        for(let i=0; i < props.movieGenres.length;i++){
                            if(props.movieGenres[i].id === genre_id){
                                return (
                                    props.movieGenres[i].name
                                );
                            }
                        }
                        }).join(", ")
                    }
                    {props.type === "tv" && props.genre_ids.map(genre_id=>{
                        for(let i=0; i < props.tvGenres.length;i++){
                            if(props.tvGenres[i].id === genre_id){
                                return (
                                    props.tvGenres[i].name
                                );
                            }
                        }
                        }).join(", ")
                    }
                </div>
                <div className={style.item_overview}>
                    <strong>Description:&nbsp;</strong>{props.overview}
                </div>
            </div>
        </div>
    )
};

export default MovieTemplateHorizontal;