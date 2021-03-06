import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getUserAccData} from "../../redux/accountReducer";
import AccountDetails from "./AccountDetails/AccountDetails";
import Preloader from "../common/Preloader/Preloader";
import style from './Account.module.scss';
import {Route} from "react-router-dom";
import FavoriteContainer from "./Favorite/FavoriteContainer";
import UserPlaylistsContainer from "./UserPlaylists/UserPlaylistsContainer";
import WatchlistContainer from "./Watchlist/WatchlistContainer";
import RatedContainer from "./Rated/RatedContainer";
import {compose} from "redux";
import WithAuth from "../WithAuth";

const AccountPageContainer =(props)=>{

    useEffect(()=>{
        props.getUserAccData();
    }, []);


        if(!props.accountData){
            return <Preloader/>

        }
        return (
            <div className={style.account}>
                <AccountDetails  accountData={props.accountData}/>
                <Route exact path={`/account`} render={()=>(<FavoriteContainer/>)}/>
                <Route path={`/account/favorite`} render={()=>(<FavoriteContainer/>)}/>
                <Route path={`/account/playlists`} render={()=>(<UserPlaylistsContainer/>)}/>
                <Route path={`/account/watchlist`} render={()=>(<WatchlistContainer/>)}/>
                <Route path={`/account/rated`} render={()=>(<RatedContainer/>)}/>
            </div>
        )

};

let mapStateToProps = (state)=>{
    return {
        sessionId: state.auth.session_id,
        accountData : state.account.userAccountData,
    }
};

export default compose(connect(mapStateToProps,{getUserAccData}), WithAuth)(AccountPageContainer)