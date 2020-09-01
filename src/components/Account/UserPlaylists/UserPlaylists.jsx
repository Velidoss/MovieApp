import React from "react";
import style from '../Account.module.scss';
import PlaylistCard from "../../Main/Playlists/PlaylistCard";
import SadEmojiAlert from "../../common/Alerts/SadEmojiAlert";
import CreatePlaylist from "../../Main/Playlists/CreatePlayList/CreatePlaylist";

const UserPlaylists = (props) => (
    <div className={style.account_content}>
        <div className={style.title_wrapper}>
            <h2 className={style.title}>Playlists</h2>
            <CreatePlaylist/>
        </div>

        {props.createdLists.length>0
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
            : <div>
                <SadEmojiAlert message={"There in no playlists created"}/>
            </div>
        }

    </div>

);

export default UserPlaylists;