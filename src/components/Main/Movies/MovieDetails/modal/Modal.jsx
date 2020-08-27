import React, {useState} from "react";
import style from "../Detailes.module.scss";

const Modal = ({ videoLink}) => {

    const [open, toggleOpen] = useState(false);


    return (
        <div>
            <div className={style.item}>
                <button className={style.video_button} onClick={() => toggleOpen(true)}>Watch trailer</button>
            </div>
            {open
                ? <div className={style.modal}>
                    <button className={style.close_modal} onClick={() => toggleOpen(false)}>&times;</button>
                    <div className={style.modal_content}>
                        <iframe width="840" height="470"
                                src={`https://www.youtube.com/embed/${videoLink}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                        </iframe>
                    </div>
                </div>
                : null
            }
        </div>
    )


};

export default Modal;