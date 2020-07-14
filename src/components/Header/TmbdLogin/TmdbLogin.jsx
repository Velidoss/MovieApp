import React from "react";
import {authUser, createSessionId, logout} from "../../../redux/authReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


class TmdbLogin extends React.Component{

    verifyToken = ()=>{
        this.props.authUser();
    };
    logoutUser = () =>{
        this.props.logout();
    };
    //
    // componentDidUpdate(prevProps) {
    //     if(this.props.sessionId !== prevProps.sessionId){
    //         this.render();
    //     }
    // }

    render(){
        return (

              <div>
                  {this.props.isAuth ?
                      <button type={"submit"} onClick={this.logoutUser}>Logout</button>
                      : <button type={"submit"} onClick={this.verifyToken}>TmdbLogin</button>
                  }
              </div>
        )
    }
};

let mapStateToProps = (state)=>{
    return {
        sessionId: state.auth.session_id,
        requestToken: state.auth.request_token,
    }
};

export default connect(mapStateToProps, {authUser, createSessionId, logout})(TmdbLogin);