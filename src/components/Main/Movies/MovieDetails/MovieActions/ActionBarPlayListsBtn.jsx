import style from "../Detailes.module.scss";
import React from "react";
import List from "./List";
import {connect} from "react-redux";
import {getCreatedLists} from "../../../../../redux/accountReducer";
import {getPlaylistDetails} from "../../../../../redux/playlistsReducer";
import {addToPlayList} from "../../../../../redux/moviesReducer";

class ActionBarPlayListsBtn extends React.PureComponent{
    constructor(props){
        super(props);
        this.state={
            listOpen:false,
        }
    }

    componentDidMount() {
        this.props.getCreatedLists();
    }

    openList=()=>{
        this.setState({listOpen:true});
    };
    closeList=()=>{
        this.setState({listOpen:false});
    };

    render(){
        if(this.props.userLists){
            return(
                <div  className={style.action} onMouseLeave={this.closeList}>
                    <button className={style.btn} onMouseOver={this.openList}>
                        <img className={style.icon} src={this.props.imgPath}  alt=""/>
                    </button>
                    {this.state.listOpen
                        ? <div className={style.popup}>
                            <p   className={style.popup_text}>{this.props.title}</p>
                            <ul className={style.popup_playlists}>
                                {this.props.userLists.map(list=>{
                                    return <List key={list.id} id={list.id} name={list.name} movieId={this.props.movieId} />
                                }) }
                            </ul>
                        </div>
                        : null}
                </div>
            )
        }
        return <div></div>

    }

};

let mapStateToProps = (state)=>{
    return {
        userLists: state.account.userLists,
    }
};

export  default connect(mapStateToProps, {getCreatedLists, getPlaylistDetails, addToPlayList})(ActionBarPlayListsBtn);
