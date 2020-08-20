import React from "react";
import style from "../../Main/Actors/Actors.module.scss";

const PageButton = (props)=>{
    return (
        <div>
            <div className={style.page}>
                {props.dotsLeft && <span>...</span>}<button onClick={()=>props.onPageChange(props.page)}>{props.page}</button>{props.dotsRight && <span>...</span>}
            </div>
        </div>
    )
};

export default PageButton;