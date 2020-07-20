import React from "react";
import {connect} from "react-redux";
import {authUser} from "../redux/authReducer";
import {Redirect} from "react-router-dom";

const WithAuth = (Component) =>{
    class WithAuth extends React.Component{

        render(){
            if(!this.props.isAuth){
                return <Redirect to={"/login"}/>
            }
            return (
                <Component
                    {...this.props}
                />
            )
        }
    };
    let mapStateToProps=(state)=>{
        return {
            isAuth : state.auth.isAuth
        }
    };

    return connect(mapStateToProps, {authUser})(WithAuth)

};

export default WithAuth;

