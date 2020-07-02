import React from "react";
import style from './Actors.module.scss';
import {NavLink} from "react-router-dom";

const Actors =(props)=>{
    return (
        <div className={style.actorsList}>
            {
                props.popularActors.map(actor=>{
                    return(
                        <div className={style.actor}>
                            <NavLink to={`/actor/${actor.id}`}><img src={actor.profile_path
                                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                                : "https://www.swmassage.ca/wp-content/uploads/2019/05/male-team-placeholder-featured-2-200x300.jpg"} alt=""/>
                            </NavLink>
                            <h4 className={style.name}>{actor.name}</h4>
                            <p className={style.films}>{
                            }</p>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Actors;