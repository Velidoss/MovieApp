import React from "react";
import style from "../../Main/Actors/Actors.module.scss";

const PageButton = (props)=>{
    return (
        <div>
            <div className={style.page}>
                <button onClick={(event)=>props.onPageChange(props.page)}>{props.page}</button>
            </div>
        </div>
    )
};

export default PageButton;