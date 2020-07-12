import React from "react";
import preloader from "../../styles/svg/Preloader.svg";

const Preloader = ()=>{
    return (
        <div>
            <img src={preloader} alt="loading..."/>
        </div>
    )
};

export default Preloader;