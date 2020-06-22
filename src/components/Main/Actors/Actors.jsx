import React from "react";
import style from './Actors.module.scss';
import {NavLink} from "react-router-dom";

const Actors =(props)=>{
    return (
        <div className={style.actorsList}>
            {console.log(props)}
            {
                props.popularActors.map(actor=>{
                    if(actor.known_for_department === 'Acting'){
                        return(
                            <div className={style.actor}>
                                <NavLink to={`/actor/${actor.id}`}><img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt=""/></NavLink>
                                <h4 className={style.name}>{actor.name}</h4>
                                <p className={style.films}>{
                                }</p>
                            </div>
                        )
                    }

                })
            }
        </div>
    )
}

export default Actors;