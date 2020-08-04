import style from "../Detailes.module.scss";
import React, {useState} from "react";
import List from "./List";

const ActionBarList = (props)=>{

    const [listOpen, setListOpen] = useState(false);
    return (
        <div  className={style.action} onMouseLeave={()=>setListOpen(false)}>
            <button className={props.added ? style.btn_active : style.btn} onMouseOver={()=>setListOpen(true)}>
                <img className={style.icon} src={props.imgPath}  alt=""/>
            </button>
            {listOpen
                ? <div className={style.popup}>
                    <p   className={style.popup_text}>{props.title}</p>
                    <ul>
                        {props.usersLists.results.map(list=>{
                            return <List key={list.id} id={list.id} name={list.name} addToPlaylist={props.addToPlayList}/>
                        })}
                    </ul>
                </div>
                : null}
        </div>
    )
};

export  default ActionBarList;
