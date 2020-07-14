import React from "react";
import style from "../Movies.module.scss";

const Genre = (props) =>{
    return (
        <div className={style.genre}>
            <span>{props.name}</span>
        </div>
    )
};

export default Genre;