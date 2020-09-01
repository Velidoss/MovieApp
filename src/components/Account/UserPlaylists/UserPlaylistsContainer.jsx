import React, {useEffect} from "react";
import UserPlaylists from "./UserPlaylists";
import {connect} from "react-redux";
import {getCreatedLists} from "../../../redux/accountReducer";
import Preloader from "../../common/Preloader/Preloader";

const UserPlaylistsContainer = (props) => {

    useEffect(() => {
        props.getCreatedLists();
    }, [props.createdLists]);


    if (!props.createdLists) {
        return (
            <div>
                <Preloader/>
            </div>
        )
    }
    return (
        <UserPlaylists
            createdLists={props.createdLists}/>
    )
};

let mapStateToProps = (state) => {
    return {
        createdLists: state.account.userLists,
    }
};

export default connect(mapStateToProps, {getCreatedLists})(UserPlaylistsContainer);