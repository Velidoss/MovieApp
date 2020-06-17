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
        session_id:state.auth.session_id,
        request_token:state.auth.request_token
    }
};

export default connect(mapStateToProps, {authUser})(Auth);