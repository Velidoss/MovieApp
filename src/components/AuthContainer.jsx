import React from "react";
import {connect} from "react-redux";
import {authUser} from "../redux/authReducer";
import Auth from "./Auth";

const AuthContainer = (props)=>{
    return (
        <div>
            <Auth />
        </div>
    )
};

let mapStateToProps=(state)=>{
    return {
        sessionId:state.auth.session_id
    }
};

export default connect(mapStateToProps, {authUser})(Auth);