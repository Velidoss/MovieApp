import React from "react";
import style from '../Account.module.scss';
import PlaylistCard from "../../Main/Playlists/PlaylistCard";
import SadEmojiAlert from "../../common/Alerts/SadEmojiAlert";

const UserPlaylists = (props) => (
    <div className={style.account_content}>
        <h2 className={style.title}>Playlists</h2>
        {props.createdLists.length>1
            ? <div className={style.playlists}>
                {props.createdLists.map(list => {
                    return (
                        <PlaylistCard
                            key={list.id}
                            id={list.id}
                            name={list.name}
                            description={list.description}
                            item_count={list.item_count}
                        />
                    )
                })}
            </div>
            : <SadEmojiAlert message={"There in no playlists created"}/>
        }

    </div>

);

export default UserPlaylists;