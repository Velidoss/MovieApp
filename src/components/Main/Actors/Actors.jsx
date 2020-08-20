import React from "react";
import style from './Actors.module.scss';
import Actor from "./Actor";

const Actors =(props)=>{
    return (
        <div className={style.container}>
            <h2 className={style.pageTitle}>Popular Actors</h2>
            <div className={style.actorsList}>
                {
                    props.popularActors.map(actor=>{
                        return(
                            <Actor
                                key={actor.id}
                                id={actor.id}
                                profile_path={actor.profile_path}
                                name={actor.name}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Actors;