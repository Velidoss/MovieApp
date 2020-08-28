import React from "react";
import style from "../../Account/Account.module.scss";
import sadFace from "../../../styles/svg/sad-tear-solid.svg";

const SadEmojiAlert = ({message})=>(
    <div>
        <div className={style.empty_banner}>
            <p className={style.message}>{message}</p>
            <img className={style.sad_emoji} src={sadFace} alt=""/>
        </div>
    </div>
);

export default SadEmojiAlert;