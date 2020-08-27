import React from "react";
import style from "../Detailes.module.scss";
import rate from "../../../../../styles/svg/star-solid.svg";
import like from "../../../../../styles/svg/heart-solid.svg";
import mark from "../../../../../styles/svg/bookmark-solid.svg";
import watch from "../../../../../styles/svg/clipboard-list-solid.svg";

const ActionBarInactive = () =>(
    <div className={style.buttons}>
        <div className={style.action}>
            <button className={style.btn}><img className={style.icon} src={rate} alt=""/></button>
        </div>
        <div className={style.action}>
            <button className={style.btn}>
                <img className={style.icon} src={like} alt=""/>
            </button>
        </div>
        <div className={style.action}>
            <button className={style.btn}>
                <img className={style.icon} src={mark} alt=""/>
            </button>
        </div>
        <div className={style.action}>
            <button className={style.btn}>
                <img className={style.icon} src={watch} alt=""/>
            </button>
        </div>
    </div>
);

export default ActionBarInactive;