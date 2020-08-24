import React from 'react';
import style from './About.module.scss';

const About = () => (
    <div className={style.about_page}>
        <div>
            <h1 className="display-4">Бібліотека фільмів на React</h1>
            <p className="lead">Версія: 0.1</p>
            <p>Development stack:</p>
            <strong>
                React (classes, but now hooks), react-router-dom, sass,
                axios.{" "}
            </strong>
        </div>
        <hr />
        <div>
            <p>Мене звати Юрій, я front-end розробник-початківець. </p>
            <p>На даний момент я посилено вивчаю React&Redux та JavaScript.</p>
            <p>Мої контакти:</p>
            <strong>Telegram:</strong> <span>@Velidoss</span>
            <p></p>
            <strong>Електронна пошта:</strong> <span>velidoss11@gmail.com</span>
        </div>

    </div>
);


export default About;