import React from "react";
import {connect} from "react-redux";
import {authUser} from "../redux/authReducer";

const WithAuth = (Component) =>{
    class WithAuth extends React.Component{

        AuthenticateUser=()=> {
            if(!this.props.isAuth){
                this.verifyToken();
            }
        };

        verifyToken = ()=>{
            this.props.authUser();
        };

        render(){
            return (
                <Component
                    {...this.props}
                    isAuth={this.props.isAuth}
                    AuthenticateUser={this.AuthenticateUser}
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

