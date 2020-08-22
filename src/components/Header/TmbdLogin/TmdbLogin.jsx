import React from "react";
import {authUser, createSessionId, logout} from "../../../redux/authReducer";
import {connect} from "react-redux";


const TmdbLogin = ({isAuth, logoutUser, verifyToken}) => {
    return (
        <div>
            {isAuth ?
                <button type={"submit"} onClick={logoutUser}>Logout</button>
                : <button type={"submit"} onClick={verifyToken}>TmdbLogin</button>
            }
        </div>
    )

};

let mapStateToProps = (state) => {
    return {
        sessionId: state.auth.session_id,
        requestToken: state.auth.request_token,
    }
};

export default connect(mapStateToProps, {authUser, createSessionId, logout})(TmdbLogin);