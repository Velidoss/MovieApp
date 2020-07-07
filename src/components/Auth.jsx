import React from "react";
import {connect} from "react-redux";
import {makeGuestSessionId} from "../redux/authReducer";

const Auth = (Component) =>{
    class Auth extends React.Component{
        componentDidMount() {
            if(!this.props.guestSessionId){
                this.props.makeGuestSessionId();
            }
        }

        render(){
            return (
                <Component
                    {...this.props}
                    guestSessionId ={this.props.guestSessionId}
                />
            )
        }

    };
    let mapStateToProps=(state)=>{
        return {
            guestSessionId : state.auth.guestSessionId,
        }
    };

    return connect(mapStateToProps, {makeGuestSessionId})(Auth)

};

export default Auth;

