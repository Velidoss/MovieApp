import React from "react";
import preloader from "../../../styles/svg/Preloader.svg";
import style from './Preloader.module.scss';

const Preloader = ()=>{
    return (
        <div className={style.container}>
            <img className={style.preloader} src={preloader} alt="loading..."/>
        </div>
    )
};

export default Preloader;