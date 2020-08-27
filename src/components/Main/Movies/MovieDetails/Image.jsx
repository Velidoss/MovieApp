import React, {useState} from "react";
import style from './Detailes.module.scss';
import FullImage from "./FullImage";

export default function Image({file_path}){

    const [openFullSize, toggleOpenFullSize] = useState(false);

    const openFull = () =>{
        toggleOpenFullSize(true);
    };
    const closeFull = () =>{
        toggleOpenFullSize(false);
    };

    return (
        <div className={style.image}>
            <img onClick={openFull} src={`https://image.tmdb.org/t/p/w500/${file_path}`} alt=""/>
            {openFullSize && <FullImage closeFull={closeFull} file_path={file_path} />}
        </div>
    )
}
