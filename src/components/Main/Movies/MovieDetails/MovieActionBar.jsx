import React from "react";
import style from "./Detailes.module.scss";
import {connect} from "react-redux";
import {rateMovie} from "../../../../redux/moviesReducer";
import {compose} from "redux";
import rate from "../../../../styles/svg/star-solid.svg";
import like from "../../../../styles/svg/heart-solid.svg";
import mark from "../../../../styles/svg/bookmark-solid.svg";
import watch from "../../../../styles/svg/clipboard-list-solid.svg";
import ActionBarBtn from "./MovieActions/ActionBarBtn";
import {
    addToFavorites,
    addToWatchList,
    getUserFavoriteMovies,
    getUserMovieWatchlist,
    removeFromFavorites,
    removeFromWatchList
} from "../../../../redux/accountReducer";
import ActionBarPlayListsBtn from "./MovieActions/ActionBarPlayListsBtn";

class MovieActionBar extends React.PureComponent{

    constructor(props){
        super(props);
        this.state={
            rating:0,
            rateOpen: false,
            playlistsOpen:false,
            inUsersWatchlist:false,
            inUsersFavorites: false,
        };

    }

    openRate=  ()=>{
        this.setState({rateOpen:true});
    };

    closeRate=  ()=>{
        this.setState({rateOpen:false});
    };

    handleChangeRating=  (event)=>{
        this.setState({rating:event.target.value});
    };

    handleSubmitRating=  (event)=>{
        this.props.rateMovie(this.props.movieId, this.props.guestSessionId, this.state.rating);
        alert('value is:'+this.state.rating);
        event.preventDefault();
    };

    rateMovie = (rating)=>{
        this.props.rateMovie(this.props.movieId, this.props.guestSessionId, rating);
        alert('Movie rated');
    };

    checkMovieInFavorites = ()=>{
        if(this.props.usersFavorites){
            this.props.usersFavorites.find(item=>{
                if(item.id === this.props.movieId){
                    return this.setState({inUsersFavorites: true});
                }
            })
        }

    };
    checkMovieInWatchList = ()=>{
        if(this.props.usersMovieWatchlist){
            this.props.usersMovieWatchlist.find(item=>{
                if(item.id === this.props.movieId){
                    return this.setState({inUsersWatchlist: true});
                }
            })
        }
    };

    componentDidMount() {
        console.log('componentDidMount');
        this.props.getUserMovieWatchlist();
        this.props.getUserFavoriteMovies();
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        if(this.props.usersFavorites !== prevProps.usersFavorites || this.state.inUsersFavorites !== prevState.inUsersFavorites){
            console.log('componentDidUpdate');
            this.checkMovieInFavorites();
        }
        if(this.props.usersMovieWatchlist !== prevProps.usersMovieWatchlist || this.state.inUsersWatchlist !== prevState.inUsersWatchlist) {
            console.log('componentDidUpdate');
            this.checkMovieInWatchList();
        }
    }

    addFavorites=()=>{
        this.props.addToFavorites(this.props.accountId, this.props.mediaType, this.props.movieId);
        this.setState({inUsersFavorites: true})
    };
    addWatchList=()=>{
        this.props.addToWatchList(this.props.accountId, this.props.mediaType, this.props.movieId);
        this.setState({inUsersWatchlist: true});
    };

    removeFavorites=()=>{
        this.props.removeFromFavorites(this.props.accountId, this.props.mediaType, this.props.movieId);
        this.setState({inUsersFavorites: false})
    };
    removeWatchList=()=>{
        this.props.removeFromWatchList(this.props.accountId, this.props.mediaType, this.props.movieId);
        this.setState({inUsersWatchlist: false});
    };

    render() {
        console.log('render');

    return (
        <div className={style.buttons}>
            <div className={style.action} onMouseLeave={this.closeRate}>
                {!this.props.isAuth
                    ?<button className={style.btn} onMouseOver={this.openRate}> <img className={style.icon} src={rate} alt=""/></button>
                    :<div>
                        <button className={style.btn} onMouseOver={this.openRate}> <img className={style.icon} src={rate} alt=""/></button>
                        {this.state.rateOpen
                            ? <form className={style.rate} onSubmit={this.handleSubmitRating}>
                                <select id="rating" onChange={this.handleChangeRating}  value={this.state.rating} className={style.hashmarks}>
                                    <option value="0" label={"0"}/>
                                    <option value="2" label={"2"}/>
                                    <option value="4" label={"4"}/>
                                    <option value="6" label={"6"}/>
                                    <option value="8" label={"8"}/>
                                    <option value="10" label={"10"}/>
                                </select>
                                <button type={"submit"}>Submit rating</button>
                            </form>
                            : null
                        }
                    </div>
                }
            </div>
            {!this.props.isAuth
                ?<div  className={style.action}><button className={style.btn} >
                <img className={style.icon} src={like}  alt=""/>
            </button> </div>
                : <div>
                    {this.state.inUsersFavorites
                        ? <ActionBarBtn added={this.state.inUsersFavorites} callback={this.removeFavorites} title={"Remove from favorites"} imgPath={like}/>
                        : <ActionBarBtn added={this.state.inUsersFavorites} callback={this.addFavorites} title={"Add to favorites"} imgPath={like}/>
                    }
                </div>
            }
            {!this.props.isAuth
                ? <div  className={style.action}><button className={style.btn} >
                    <img className={style.icon} src={mark}  alt=""/>
                </button></div>
                : <div>
                    {this.state.inUsersWatchlist
                        ? <ActionBarBtn added={this.state.inUsersWatchlist} callback={this.removeWatchList} title={"Remove from watchlist"} imgPath={mark}/>
                        : <ActionBarBtn added={this.state.inUsersWatchlist} callback={this.addWatchList} title={"Add to watchlist"} imgPath={mark}/>
                    }
                </div>
            }
            {!this.props.isAuth
                ?  <div  className={style.action}><button className={style.btn} >
                    <img className={style.icon} src={watch}  alt=""/>
                </button></div>
                : <ActionBarPlayListsBtn imgPath={watch} movieId={this.props.movieId} title={"Playlists"}/>
            }
        </div>
        )
    }
}

let mapStateToProps = (state)=>{
    return {
        accountId: state.account.currentUserAccountId,
        usersMovieWatchlist: state.account.userMovieWatchlist,
        usersFavorites: state.account.userFavoriteMovies,
    }
};


export default compose(connect(mapStateToProps, {rateMovie, addToWatchList, addToFavorites, removeFromWatchList, removeFromFavorites, getUserMovieWatchlist, getUserFavoriteMovies }) )(MovieActionBar);