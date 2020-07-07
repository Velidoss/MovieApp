import React from 'react';
import {Field} from "react-final-form";
import style from "./ContactForm.module.scss"


const ContactForm = (props) => {
    return(
        <form className={style.form} onSubmit={props.handleSubmit}>
            <div  className={style.form_fields}>
                <div className={style.contact_info}>
                    <div className={style.field_wrapper}>
                        <label>Name</label>
                        <Field className={style.input_field} name={"name"} component={"input"} type={'text'} placeholder={"Enter your name"}/>
                    </div>
                    <div className={style.field_wrapper}>
                        <label >Email</label>
                        <Field className={style.input_field} name={"email"} component={"input"} type={'email'} placeholder={"Enter your email adress"}/>
                    </div>
                </div>
                <div className={style.contact_message}>
                    <div className={style.field_wrapper}>
                        <label >Message</label>
                        <Field className={style.input_message} name={"text"} component={"textarea"} type={'text'} placeholder={"Enter your message"}/>
                    </div>
                </div>

            </div>
            <button className={style.btn_submit} type={"submit"}>Send message</button>
        </form>
    )
};

export default ContactForm;