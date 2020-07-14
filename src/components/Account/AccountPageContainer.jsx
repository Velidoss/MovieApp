import React from "react";
import {connect} from "react-redux";
import {
    getCreatedLists,
    getUserAccData,
    getUserFavoriteMovies,
    getUserFavoriteTvShows
} from "../../redux/accountReducer";
import AccountDetails from "./AccountDetails/AccountDetails";
import Preloader from "../common/Preloader";
import style from './Account.module.scss';
import Favorite from "./Favorite/Favorite";
import {getMovieGenres} from "../../redux/moviesReducer";
import UserPlaylists from "./UserPlaylists/UserPlaylists";
import {getPlaylistDetails} from "../../redux/playlistsReducer";

class AccountPageContainer extends React.Component{

    componentDidMount() {
        this.props.getUserAccData();
        this.props.getCreatedLists();
        this.props.getUserFavoriteMovies();
        this.props.getUserFavoriteTvShows();
        this.props.getMovieGenres();
    }

    render(){
        if(!this.props.accountData || !this.props.createdLists || !this.props.favoriteMovies || !this.props.favoriteTvShows
            || !this.props.genres
        ){
            return(
                <div>
                    <Preloader/>
                </div>
            )
        }
        return (
            <div className={style.account}>
                <AccountDetails  accountData={this.props.accountData}/>
                <Favorite
                    favoriteMovies={this.props.favoriteMovies}
                    favoriteTvShows={this.props.favoriteTvShows}
                    genres = {this.props.genres}
                />
                <UserPlaylists
                    createdLists={this.props.createdLists}
                />
            </div>
        )
    }
}

let mapStateToProps = (state)=>{
    return {
        sessionId: state.auth.session_id,
        accountData : state.account.userAccountData,
        createdLists: state.account.userLists,
        favoriteMovies: state.account.userFavoriteMovies,
        favoriteTvShows:state.account.userFavoriteTvShows,
        genres: state.movies.movieGenres,
    }
};

export default connect(mapStateToProps,
    {getUserAccData,
        getCreatedLists,
        getUserFavoriteMovies,
        getUserFavoriteTvShows,
        getMovieGenres,
        getPlaylistDetails
    })(AccountPageContainer)