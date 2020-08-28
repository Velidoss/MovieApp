import React from "react";
import {Field, Form} from "react-final-form";
import {authUser, authWithLogin, createSessionId} from "../../../redux/authReducer";
import {connect} from "react-redux";
import style from './Login.module.scss';


const Login = (props) => {

    const verifyToken = () => {
        props.authUser();
    };

    const onSubmitForm = (values) => {
        props.authWithLogin(values.username, values.password);
    };

    return (
        <div className={style.container}>
            <h3 className={style.title}>Login</h3>
        {/*    <Form onSubmit={onSubmitForm}*/}
        {/*          render={({handleSubmit}) => (*/}
        {/*              <form className={style.form} onSubmit={handleSubmit}>*/}
        {/*                  <div className={style.form_element}>*/}
        {/*                      <label className={style.label}>Username</label>*/}
        {/*                      <Field className={style.field} name={"username"} component={"input"} type={"text"}*/}
        {/*                             placeholder={"username"}/>*/}
        {/*                  </div>*/}
        {/*                  <div className={style.form_element}>*/}
        {/*                      <label className={style.label}>Password</label>*/}
        {/*                      <Field className={style.field} name={"password"} component={"input"} type={"password"}*/}
        {/*                             placeholder={"password"}/>*/}
        {/*                  </div>*/}
        {/*                  <div className={style.btn_element}>*/}
        {/*                      <button className={style.btn} type={"submit"}>Login</button>*/}
        {/*                  </div>*/}
        {/*              </form>*/}
        {/*          )}*/}
        {/*    />*/}
            <div>
                <p className={style.description}>You need to have Tmdb account, just click on button below to log in through tmdb website</p>
                <div className={style.btn_element}>
                    <button className={style.btn} type={"submit"} onClick={verifyToken}>TmdbLogin</button>
                </div>
            </div>

        </div>

    )

};

let mapStateToProps = (state) => {
    return {
        sessionId: state.auth.session_id,
        requestToken: state.auth.request_token,
    }
};

export default connect(mapStateToProps, {authWithLogin, authUser, createSessionId})(Login);