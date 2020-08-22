import React, {useState} from "react";
import style from "./Dropdown.module.scss";
import {NavLink} from "react-router-dom";

const Dropdown =({title, list})=>{

    const [listOpen, toggleListOpen] = useState(false);


    const clickOutside = ()=>{
        toggleListOpen(false);
    };


    return (
        <div onMouseLeave={clickOutside}>
            <div className={style.menu_item} onClick={()=>toggleListOpen(prev=>!prev)}><p>{title}</p></div>
            <div className={style.dropdown}>
                {listOpen && <ul className={style.dropdown_menu}>
                    {list.map(item=>(
                        <li className={style.item} key={item.id}><NavLink className={style.link} to={item.link}>{item.title}</NavLink></li>
                    ))}
                </ul>}
            </div>
        </div>

    )

};

export default Dropdown;