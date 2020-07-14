import React from 'react';
import style from "./Actors.module.scss";
import {NavLink} from "react-router-dom";

const Actor = (props) => (
    <div>
        <div className={style.actor}>
            <NavLink to={`/actor/${props.id}`}><img src={props.profile_path
                ? `https://image.tmdb.org/t/p/w200${props.profile_path}`
                : "https://www.swmassage.ca/wp-content/uploads/2019/05/male-team-placeholder-featured-2-200x300.jpg"} alt=""/>
            </NavLink>
            <h4 className={style.name}>{props.name}</h4>
            <p className={style.films}>{
            }</p>
        </div>
    </div>
);

export default Actor;