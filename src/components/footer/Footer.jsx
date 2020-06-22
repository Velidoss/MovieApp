import React from 'react';
import style from './Footer.module.scss';

const Footer = ()=>{
    return (
        <div className={style.footer}>
            <p className={style.message}>Made by Velidoss. Not for commercial use</p>
        </div>
    )
};

export default Footer;