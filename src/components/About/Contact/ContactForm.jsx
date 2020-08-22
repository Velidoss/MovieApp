import React from 'react';
import {Field} from "react-final-form";
import style from "./ContactForm.module.scss"
import {validate, validateLength} from "../../../Utils/validators/validators";


const ContactForm = (props) => {
    let lengthCheck = validateLength( 5,30);
    const getValidator = isRequired =>
        isRequired ? value => (value ? undefined : "Required") : () => {};
    return(
        <form className={style.form} onSubmit={props.handleSubmit}>
            <div  className={style.form_fields}>
                <div className={style.contact_info}>
                    <Field name={"name"}>{({input, meta})=>(
                        <div className={style.field_wrapper}>
                            <label>Name</label>
                            <input {...input} className={style.input_field} type={'text'} placeholder={"Enter your name"}/>
                            {meta.error && meta.touched && <span className={style.error}>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                    <div className={style.field_wrapper}>
                        <label>Surname</label>
                        <Field className={style.input_field} name={"surname"} component={"input"} type={'text'} placeholder={"Enter your surname"} validate={validate} key={props.values.name ? 1: 0}/>
                    </div>
                    <Field name={"email"}>
                        {({input, meta})=>(
                            <div className={style.field_wrapper}>
                                <label >Email</label>
                                <input {...input} className={style.input_field}  type={'email'} placeholder={"Enter your email adress"}/>
                                {meta.error && meta.touched && <span className={style.error}>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                </div>
                <Field name={"message"}>
                    {({input, meta})=>(
                        <div className={style.contact_message}>
                            <div className={style.field_wrapper}>
                                <label >Message</label>
                                <textarea {...input} className={style.input_message} placeholder={"Enter your message"}/>
                                {meta.error && meta.touched && <span className={style.error}>{meta.error}</span>}
                            </div>
                        </div>
                    )}
                </Field>
            </div>

            <button className={style.btn_submit} type={"submit"}>Send message</button>
        </form>
    )
};

export default ContactForm;