import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import style from "../../Account/Account.module.scss"
import {getPlaylistDetails} from "../../../redux/playlistsReducer";

const PlaylistCard = (props) => {

    useEffect(() => {
        props.getPlaylistDetails(props.id);
    }, []);

    if (!props.listDetails) {
        return null;
    }
    let bgImage = {
        background: `url(https://image.tmdb.org/t/p/w400/${props.listDetails.items[0]["poster_path"]}) 50% 50% no-repeat`
    };

    return (
        <NavLink className={style.link} to={`/playlist/${props.id}`}>
            <div style={bgImage} className={style.playlist}>
                <div className={style.playlist_wrapper}>
                    <div className={style.playlist_info}>
                        <strong className={style.title}>{props.name}</strong>
                        <p className={style.description}>{props.description}</p>
                        <p className={style.item_count}>{props.item_count} films</p>
                    </div>
                </div>
            </div>
        </NavLink>
    )
};

let mapStateToProps = (state) => {
    return {
        listDetails: state.playlists.listDetails
    }
};

export default connect(mapStateToProps, {getPlaylistDetails})(PlaylistCard);