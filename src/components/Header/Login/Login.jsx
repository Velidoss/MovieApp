import React from "react";
import {Field, Form} from "react-final-form";
import {authWithLogin} from "../../../redux/authReducer";
import {connect} from "react-redux";


class Login extends React.Component{

    onSubmit = (values)=>{
        this.props.authWithLogin(values.username, values.password);
        // alert(JSON.stringify(values, 0,2));
    };

    render(){
        return (
            <Form onSubmit={this.onSubmit}
                  render={({handleSubmit})=>(
                      <form onSubmit={handleSubmit}>
                          <div>
                              <label >Username</label>
                              <Field name={"username"} component={"input"} type={"text"} placeholder={"username"} />
                          </div>
                          <div>
                              <label >Password</label>
                              <Field name={"password"} component={"input"} type={"password"} placeholder={"password"} />
                          </div>
                          <div>
                              <button type={"submit"}>Login</button>
                          </div>
                      </form>
                  )}
            />
        )
    }
};

let mapStateToProps = (state)=>{
    return {
        sessionId: state.auth.session_id
    }
};

export default connect(mapStateToProps, {authWithLogin})(Login);