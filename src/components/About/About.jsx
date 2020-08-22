import React from 'react';
import style from './About.module.scss';
import ContactFormContainer from "./Contact/ContactFormContainer";

const About = () => (
    <div className={style.about_page}>
        <h2>Who am I?</h2>
        <p>The guy you looking at is me - Yurii Velidchenko. I'm beginner in programming, who tries to witness a world
            of programming. I'va started from python, PHP, but now I've found myself very bounded with React and
            JavaScript. For the beginning, you can look on one of my first applications, made by myself with Tmdb
            api.</p>
        <p>If you're interested in some sort of conversations with me, dont be shy and write a letter in a contact form
            below.</p>
        <ContactFormContainer/>
    </div>
);


export default About;