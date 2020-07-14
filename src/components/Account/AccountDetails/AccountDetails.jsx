import React from 'react';
import style from './../Account.module.scss';

const AccountDetails = (props) => {

    return (
        <div className={style.user_details}>
            <div>
                <img className={style.user_image} src={`https://www.gravatar.com/avatar/${props.accountData.avatar.gravatar.hash}?s=150`} alt=""/>
            </div>
            <div className={style.user_personal_info}>
                <p>{props.accountData.name}</p>
            </div>
            <div className={style.user_menu}>
                <ul className={style.user_menu_list}>
                    <li className={style.item}>Favorite</li>
                    <li className={style.item}>Playlists</li>
                    <li className={style.item}>Ratings</li>
                    <li className={style.item}>Watchlist</li>
                </ul>
            </div>
        </div>
    );
};

export default AccountDetails;