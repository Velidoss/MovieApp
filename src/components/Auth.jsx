import React from "react";
import keys from "../config/config";
import {Redirect} from "react-router-dom";

const Auth = (props)=>{
    let authUser = ()=>{
        props.authUser();

    };

    console.log(props);
    if(props.request_token){
        window.location.href=`https://www.themoviedb.org/authenticate/${props.request_token}?redirect_to=${keys.appUrl}`;
    }
    return (
        <div>
            <button onClick={authUser}>Auth</button>
        </div>
    );
};

export default Auth;