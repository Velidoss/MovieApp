import React from "react";
import style from '../Account.module.scss';
import PlaylistCard from "../../Main/Playlists/PlaylistCard";

const UserPlaylists = (props) => (
    <div>
        <h2 className={style.title}>Playlists</h2>
        <div className={style.playlists}>
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
    </div>

);

export default UserPlaylists;