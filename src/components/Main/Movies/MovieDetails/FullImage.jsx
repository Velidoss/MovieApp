import React, {useRef} from "react";
import style from './Detailes.module.scss';
import useOnClickOutside from "../../../../Utils/clickOutSideHook/useOnClickOutside";

export default function FullImage({file_path, closeFull}) {

    const clickOutsideRef = useRef();

    useOnClickOutside(clickOutsideRef, closeFull);

    return (
        <div className={style.full_image}>
            <img ref={clickOutsideRef} className={style.full_image_content} src={`https://image.tmdb.org/t/p/w1280/${file_path}`} alt=""/>
        </div>
    )
}