import style from "../Detailes.module.scss";
import React, {useState} from "react";

const ActionBarBtn = (props)=>{

    const [btnOpen, setBtnOpen] = useState(false);

    return (
        <div  className={style.action} onMouseLeave={()=>setBtnOpen(false)}>
            <button className={props.added ? style.btn_active : style.btn} onMouseOver={()=>setBtnOpen(true)}>
                <img className={style.icon} src={props.imgPath}  alt=""/>
            </button>
            {btnOpen
                ? <div className={style.popup}>
                    <button onClick={()=>props.callback()}  className={style.popup_btn}>{props.title}</button>
                </div>
                : null}
        </div>
    )
};

export  default ActionBarBtn;
