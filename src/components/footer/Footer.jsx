import React from 'react';
import style from './Footer.module.scss';
import tmdbLogo from './../../styles/svg/tmdb_logo.svg'

const Footer = ()=>{
    return (
        <div className={style.footer}>
            <p className={style.message}>Made by Velidoss. Not for commercial use.</p>
            <span className={style.source}>
                <p>Source of content:</p>
                <img className={style.tmdb_logo} src={tmdbLogo} alt=""/>
            </span>

        </div>
    )
};

export default Footer;