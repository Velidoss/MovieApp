import React, {PureComponent} from "react";
import style from "./Link.module.scss";
import {connect} from "react-redux";
import {addToPlayList,removeFromPlayList} from "../../../../../redux/moviesReducer";
import {getPlaylistsDetails} from "../../../../../redux/playlistsReducer";
import Preloader from "../../../../common/Preloader/Preloader";

class List extends PureComponent{

    constructor(props){
        super(props);
        this.state={
            containsMovie:false,
            playListDetails:[],
        }
    }

    setPlayList = ()=>{
        if(this.props.playlist.length > 0){
            this.props.playlist.forEach(list=>{
                if(list.id === this.props.id.toString()){
                     return this.setState({playListDetails:list.items});
                }
            })
        }

    };

    componentDidMount() {
        this.props.getPlaylistsDetails(this.props.id);
        this.setPlayList();
        this.checkMovieInList();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.containsMovie !==prevState.containsMovie || this.state.playListDetails !==prevState.playListDetails){
            this.setPlayList();
            this.checkMovieInList();
        }
    }

    addPlayList=(playlistId)=>{
        this.props.addToPlayList(playlistId, this.props.movieId);
        this.setState({containsMovie:true});
    };
    removePlayList=(playlistId)=>{
        this.props.removeFromPlayList(playlistId, this.props.movieId);
        this.setState({containsMovie:false});
    };

    checkMovieInList=()=>{
        if(this.state.playListDetails.length > 0){
            this.state.playListDetails.find(item=>{
                if(item.id === this.props.movieId){
                    this.setState({containsMovie:true});
                }
            })
        }
    };


    render(){
        console.log(this.state);
        if(this.props.playlist.length > 0){
            return (
                <div className={style.list_name}>
                    {this.props.name}
                    {this.state.containsMovie
                        ? <button className={style.list_btn} onClick={()=>{this.removePlayList(this.props.id)}}>-</button>
                        : <button className={style.list_btn} onClick={()=>{this.addPlayList(this.props.id)}}>+</button>
                    }

                </div>
            )
        }
        return <Preloader/>
    }

};

let mapStateToProps = (state)=>{
    return {
        playlist: state.playlists.playLists,
    }
};


export default connect(mapStateToProps,{addToPlayList, removeFromPlayList, getPlaylistsDetails})(List);