import React from "react";
import UserPlaylists from "./UserPlaylists";
import {connect} from "react-redux";
import {getCreatedLists} from "../../../redux/accountReducer";
import Preloader from "../../common/Preloader";

class UserPlaylistsContainer extends React.Component{

    componentDidMount() {
        this.props.getCreatedLists();
    }

    render(){
        if(!this.props.createdLists){
            return (
                <div>
                    <Preloader/>
                </div>
            )
        }
        return (
            <UserPlaylists
                createdLists={this.props.createdLists}/>
        )
    }
}

let mapStateToProps = (state)=>{
    return {
        createdLists: state.account.userLists,
    }
};

export default connect( mapStateToProps, {getCreatedLists})(UserPlaylistsContainer);